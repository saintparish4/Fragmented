package validation

import (
	"context"
	"crypto/sha256"
	"log"
	"math/rand"
	"unsafe"

	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	ethtypes "github.com/ethereum/go-ethereum/core/types"
	"github.com/saintparish4/Fragmented/internal/inference"
	"github.com/saintparish4/Fragmented/internal/types"
)

// Assume ResultVerifier ABI wrapper generated via abigen
type Verifier interface {
	SubmitFraudProof(opts *bind.TransactOpts, reqHash [32]byte, correctOutput []byte) (*ethtypes.Transaction, error)
}

type Validator struct {
	engine   *inference.Engine         // local oracle
	verifier Verifier                  // on-chain contract
	sampler  <-chan types.InferRequest // stream of recents reqs
	stakeKey common.Address
}

func New(engine *inference.Engine, verifier Verifier,
	sampler <-chan types.InferRequest, stakeKey common.Address) *Validator {
	return &Validator{engine, verifier, sampler, stakeKey}
}

func (v *Validator) Run(ctx context.Context) {
	for {
		select {
		case <-ctx.Done():
			return
		case req := <-v.sampler:
			if rand.Float64() > 0.05 { // 5% sample
				continue
			}
			v.validate(ctx, req)
		}
	}
}

func (v *Validator) validate(_ context.Context, req types.InferRequest) {
	resp, _, err := v.engine.Infer(&req)
	if err != nil {
		log.Printf("validator local infer err: %v", err)
		return
	}

	// Compare resp.Output vs chain‑recorded output (pseudo)
	chainOut := chainOutput(req) // You'll need to implement this
	if !equal(resp.Output, chainOut) {
		// Simple deterministic hash for MVP
		hash := sha256.Sum256([]byte(req.ModelID))
		_, err = v.verifier.SubmitFraudProof(nil, hash, float32SliceToBytes(resp.Output))
		if err != nil {
			log.Printf("fraud proof submit err: %v", err)
		} else {
			log.Printf("fraud proof submitted, req %x", hash[:4])
		}
	}
}

// Helper functions you need to implement based on your types:

// Compare two float32 slices for equality
func equal(a, b []float32) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return true // Found difference
		}
	}
	return false // They are equal
}

// Convert float32 slice to bytes
func float32SliceToBytes(data []float32) []byte {
	if len(data) == 0 {
		return nil
	}
	return (*[4]byte)(unsafe.Pointer(&data[0]))[:][:len(data)*4]
}

// Mock function - you need to implement this to get chain-recorded output
func chainOutput(_ types.InferRequest) []float32 {
	// TODO: Implement actual chain lookup
	// For MVP, return empty slice or mock data
	return []float32{}
}
