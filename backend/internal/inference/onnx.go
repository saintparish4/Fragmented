package inference

import (
	"fmt"
	"os"
	"path/filepath"
	"sync"
	"time"

	"github.com/saintparish4/Fragmented/internal/metrics"
	"github.com/saintparish4/Fragmented/internal/types"
)

type Engine struct {
	modelsDir string
	sessions  sync.Map // map[string]bool - tracks loaded models
}

func NewEngine(modelsDir string) (*Engine, error) {
	return &Engine{
		modelsDir: modelsDir,
	}, nil
}

func (e *Engine) getOrLoad(modelID string) (bool, error) {
	if _, ok := e.sessions.Load(modelID); ok {
		return true, nil
	}
	path := filepath.Join(e.modelsDir, modelID+".onnx")
	if _, err := os.Stat(path); err != nil {
		return false, fmt.Errorf("model not found: %s", path)
	}
	e.sessions.Store(modelID, true)
	return true, nil
}

func (e *Engine) Infer(req *types.InferRequest) (*types.InferResponse, int, error) {
	modelID := req.ModelID
	if modelID == "" {
		return nil, 400, fmt.Errorf("model_id is required")
	}
	if len(req.Shape) == 0 || len(req.Data) == 0 {
		return nil, 400, fmt.Errorf("shape and data are required")
	}

	_, err := e.getOrLoad(modelID)
	if err != nil {
		metrics.ErrorsTotal.WithLabelValues(modelID, "load_model").Inc()
		return nil, 404, err
	}

	start := time.Now()

	// Mock inference - return input data as output for now
	// In a real implementation, you would use a proper ONNX runtime here
	output := make([]float32, len(req.Data))
	copy(output, req.Data)

	elapsed := time.Since(start).Seconds() * 1000.0

	metrics.RequestsTotal.WithLabelValues(modelID, "200").Inc()
	metrics.Latency.WithLabelValues(modelID).Observe(elapsed)

	return &types.InferResponse{
		ModelID:   modelID,
		Output:    output,
		OutPutDim: req.Shape,
		LatencyMs: elapsed,
	}, 200, nil
}
