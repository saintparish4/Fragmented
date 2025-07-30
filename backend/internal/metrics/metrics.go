package metrics 

import (
	"github.com/prometheus/client_golang/prometheus"
)

var (
	RequestsTotal = prometheus.NewCounterVec(
		prometheus.CounterOpts{
			Name: "infer_requests_total",
			Help: "Total number of inference requests",
		},
		[]string{"model_id", "code"},
	)
	ErrorsTotal = prometheus.NewCounterVec(
		prometheus.CounterOpts{
			Name: "infer_errors_total",
			Help: "Total number of inference errors", 
		},
		[]string{"model_id", "reason"},
	)
	Latency = prometheus.NewHistogramVec(
		prometheus.HistogramOpts{
			Name: "infer_latency_ms",
			Help: "Inference latency in milliseconds",
			Buckets: []float64{1, 2, 5, 10, 20, 50, 100, 200, 500, 1000 },
		},
		[]string{"model_id"},
	)
	CacheHits = prometheus.NewCounter(
		prometheus.CounterOpts{
			Name: "infer_cache_hits_total",
			Help: "Total number of cache hits",
		},
	)
	CacheMisses = prometheus.NewCounter(
		prometheus.CounterOpts{
			Name: "infer_cache_misses_total",
			Help: "Total number of cache misses",
		},
	)
)

func init() {
	prometheus.MustRegister(RequestsTotal, ErrorsTotal, Latency)
}