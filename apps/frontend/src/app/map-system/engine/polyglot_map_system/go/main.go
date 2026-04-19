package main

import (
	"fmt"
	"math/rand"
	"sync"
)

/**
 * GO Map Concurrency Engine - Optimized Resource Flow
 * Fitur: State-aware processing (Static vs Dynamic)
 */

type ResourceParticle struct {
	X float64 `json:"x"`
	Y float64 `json:"y"`
	Velocity float64 `json:"v"`
}

func processSDA(isPaused bool) {
	const particleCount = 2000
	particles := make([]ResourceParticle, particleCount)
	
	if isPaused {
		fmt.Println("GO: Rendering static resource snapshot (Low CPU).")
		// Hanya kirim data posisi tanpa kalkulasi physics
		return
	}

	// Mode Dynamic: Kalkulasi aliran SDA menggunakan Goroutines
	var wg sync.WaitGroup
	for i := 0; i < particleCount; i++ {
		wg.Add(1)
		go func(idx int) {
			defer wg.Done()
			// Simulasi kalkulasi flow/aliran sumber daya
			particles[idx].X += rand.Float64()
			particles[idx].Y += rand.Float64()
		}(i)
	}
	wg.Wait()
	fmt.Printf("GO: Processed %d dynamic particles.\n", particleCount)
}

func main() {
	fmt.Println("GO: Optimized SDA Flow Engine ready.")
	processSDA(false) // Contoh eksekusi dynamic
}
