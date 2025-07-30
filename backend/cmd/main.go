package main

import (
	"log"
	"net/http"
	"time"

	"github.com/saintparish4/Fragmented/internal/config"
	"github.com/saintparish4/Fragmented/internal/inference"
	"github.com/saintparish4/Fragmented/internal/server"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("failed to load config: %v", err)
	}

	// Init inference engine (lazy session cache)
	engine, err := inference.NewEngine(cfg.ModelsDir)
	if err != nil {
		log.Fatalf("engine init error: %v", err)
	}
	r := server.NewRouter(engine)

	srv := &http.Server{
		Addr:              ":" + cfg.Port,
		Handler:           r,
		ReadHeaderTimeout: 5 * time.Second,
	}

	log.Printf("Edge Node listening on :%s (models: %s)", cfg.Port, cfg.ModelsDir)
	if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatalf("server error: %v", err)
	}
}
