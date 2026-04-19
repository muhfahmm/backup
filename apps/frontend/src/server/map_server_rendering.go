package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

/**
 * MAP SERVER RENDERING - THE HEART OF THE APP
 * Port: 8081
 * Deskripsi: Orkestrator backend pusat yang menghubungkan layanan polyglot
 * (CPP, Go, Java, Python, Rust) untuk simulasi map yang persisten.
 */

type ServiceStatus struct {
	Name   string `json:"name"`
	Status string `json:"status"`
	URL    string `json:"url"`
}

type HeartbeatData struct {
	Timestamp time.Time        `json:"timestamp"`
	Services  []ServiceStatus  `json:"services"`
	WorldState string          `json:"world_state"`
}

func main() {
	// 1. Inisialisasi Registry Layanan Backend (13 Polyglot Frameworks)
	services := []ServiceStatus{
		// C++
		{Name: "CPP (Drogon)", Status: "Checking...", URL: "http://localhost:8082"},
		{Name: "CPP (uWebSockets)", Status: "Checking...", URL: "http://localhost:8083"},
		// Rust
		{Name: "Rust (Actix)", Status: "Checking...", URL: "http://localhost:8084"},
		{Name: "Rust (Axum)", Status: "Checking...", URL: "http://localhost:8085"},
		// Go
		{Name: "Go (FastHttp)", Status: "Checking...", URL: "http://localhost:8086"},
		{Name: "Go (Gin)", Status: "Checking...", URL: "http://localhost:8087"},
		{Name: "Go (Fiber)", Status: "Checking...", URL: "http://localhost:8088"},
		// Python
		{Name: "Python (FastAPI)", Status: "Checking...", URL: "http://localhost:8089"},
		{Name: "Python (BlackSheep)", Status: "Checking...", URL: "http://localhost:8090"},
		{Name: "Python (Sanic)", Status: "Checking...", URL: "http://localhost:8091"},
		// Java
		{Name: "Java (Vert.x)", Status: "Checking...", URL: "http://localhost:8092"},
		{Name: "Java (Netty)", Status: "Checking...", URL: "http://localhost:8093"},
		{Name: "Java (Quarkus)", Status: "Checking...", URL: "http://localhost:8094"},
	}

	// background routine for health checking
	go func() {
		client := http.Client{
			Timeout: 500 * time.Millisecond,
		}
		for {
			for i := range services {
				resp, err := client.Get(services[i].URL + "/api/simulation/status")
				if err == nil && resp.StatusCode == http.StatusOK {
					services[i].Status = "Ready"
					resp.Body.Close()
				} else {
					services[i].Status = "Offline"
				}
			}
			time.Sleep(2 * time.Second)
		}
	}()

	// 2. Endpoint Utama Aggregator (Jantung Aplikasi)
	http.HandleFunc("/api/map/heartbeat", func(w http.ResponseWriter, r *http.Request) {
		// CORS
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")
		
		data := HeartbeatData{
			Timestamp: time.Now(),
			Services:  services,
			WorldState: "SIMULATION_ACTIVE",
		}

		json.NewEncoder(w).Encode(data)
	})

	// 3. Endpoint Sinkronisasi Throttling dari Frontend
	http.HandleFunc("/api/sync-throttle", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		var metrics any
		if err := json.NewDecoder(r.Body).Decode(&metrics); err != nil {
			http.Error(w, "Bad request", http.StatusBadRequest)
			return
		}

		log.Printf("[Sync] Received Throttling Metrics from Frontend: %v\n", metrics)
		w.WriteHeader(http.StatusOK)
		fmt.Fprintf(w, "Sync Received")
	})

	fmt.Println("-------------------------------------------")
	fmt.Println("PRESIDENT SIMULATOR: HEART ORCHESTRATOR")
	fmt.Printf("Running on http://localhost:8081\n")
	fmt.Println("Bridging: CPP, GO, JAVA, PYTHON, RUST")
	fmt.Println("-------------------------------------------")

	if err := http.ListenAndServe(":8081", nil); err != nil {
		log.Fatal(err)
	}
}
