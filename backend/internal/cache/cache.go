package cache

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"time"

	"github.com/redis/go-redis/v9"
)

type Cache struct {
	rdb    *redis.Client
	ttlSec int
}

func New(addr string, ttlSec int) *Cache {
	return &Cache{rdb: redis.NewClient(&redis.Options{
		Addr: addr, // "localhost:6379"
	}),
		ttlSec: ttlSec, 
	}
}

// KeyFromRequest returns SHA-256(input) so identical tensors hit the cache
func KeyFromRequest(shape []int64, data []float32) (string, error) {
	raw, err := json.Marshal(struct {
		S []int64 `json:"s"`
		D []float32 `json:"d"`
	}{shape, data})
	if err != nil {
		return "", err 
	}
	sum := sha256.Sum256(raw)
	return hex.EncodeToString(sum[:]), nil 
}

func (c *Cache) Get(ctx context.Context, key string) ([]byte, bool) {
	val, err := c.rdb.Get(ctx, key).Bytes()
	if err == redis.Nil || err != nil {
		return nil, false 
	}
	return val, true 
}

func (c *Cache) Set(ctx context.Context, key string, value []byte) error {
	return c.rdb.Set(ctx, key, value, time.Duration(c.ttlSec)*time.Second).Err()
}
