package types

type InferRequest struct {
	ModelID string `json:"model_id"` // "mnist"
	InputName string `json:"input_name,omitempty"` // "input"
	OutputName string `json:"output_name,omitempty"` // "output"
	Shape []int64 `json:"shape"` // [1, 1, 28, 28]
	Data []float32 `json:"data"` // Flattened tensor [784]
}

type InferResponse struct {
	ModelID string `json:"model_id"`
	Output []float32 `json:"output"`
	OutPutDim []int64 `json:"output_dim"`
	LatencyMs float64 `json:"latency_ms"`
}

