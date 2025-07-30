package config

import (
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	Port      string
	ModelsDir string
}

func Load() (*Config, error) {
	_ = godotenv.Load() // Optional if you want to use environment variables

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port if not set
	}
	models := os.Getenv("MODELS_DIR")
	if models == "" {
		models = "./models"
	}

	return &Config{
		Port:      port,
		ModelsDir: models,
	}, nil
}
