package server

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/saintparish4/Fragmented/internal/inference"
	"github.com/saintparish4/Fragmented/internal/types"
	"github.com/saintparish4/Fragmented/internal/metrics"
	"github.com/go-chi/chi/v5"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

func NewRouter(engine *inference.Engine) http.Handler {
	r := chi.NewRouter()

	r.Get("/healthz", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok"))
	})

	r.Handle("/metrics", promhttp.Handler())

	r.Post("/v1/infer", func (w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		decoder := json.NewDecoder(r.Body)
		decoder.DisallowUnknownFields()

		var req types.InferRequest
		if err := decoder.Decode(&req); err != nil {
			w.WriteHeader(http.StatusBadRequest)
			_ = json.NewEncoder(w).Encode(map[string]string{"error": err.Error()})
			return 
		}

		start := time.Now()
		resp, code, err := engine.Infer(&req)
		if err != nil {
			metrics.RequestsTotal.WithLabelValues(req.ModelID, "error").Inc()
			w.WriteHeader(code)
			_ = json.NewEncoder(w).Encode(map[string]string{"error": err.Error()})
			return 
		}

		// Attach end-to-end latency (includes JSON decode/encode)
		resp.LatencyMs = float64(time.Since(start).Milliseconds())
		w.WriteHeader(http.StatusOK)
		_ = json.NewEncoder(w).Encode(resp) 
	})

	return r 
}