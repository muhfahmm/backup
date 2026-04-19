package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"runtime"
	"time"
)

/**
 * MAP SERVER RENDERING - THE HEART OF THE APP (V5 - Memory Metrics)
 * Port: 8081
 */

type ServiceStatus struct {
	Name     string  `json:"name"`
	Status   string  `json:"status"`
	URL      string  `json:"url"`
	MemoryMB float64 `json:"memory_mb"`
}

type HeartbeatData struct {
	Timestamp     time.Time        `json:"timestamp"`
	Services      []ServiceStatus  `json:"services"`
	WorldState    string           `json:"world_state"`
	SystemMemory  SystemMem        `json:"system_memory"`
}

type SystemMem struct {
	UsedGB  float64 `json:"used_gb"`
	TotalGB float64 `json:"total_gb"`
}

func main() {
	services := []ServiceStatus{
		{Name: "CPP (Drogon)", Status: "Checking...", URL: "http://localhost:8082"},
		{Name: "CPP (uWebSockets)", Status: "Checking...", URL: "http://localhost:8083"},
		{Name: "Rust (Actix)", Status: "Checking...", URL: "http://localhost:8084"},
		{Name: "Rust (Axum)", Status: "Checking...", URL: "http://localhost:8085"},
		{Name: "Go (FastHttp)", Status: "Checking...", URL: "http://localhost:8086"},
		{Name: "Go (Gin)", Status: "Checking...", URL: "http://localhost:8087"},
		{Name: "Go (Fiber)", Status: "Checking...", URL: "http://localhost:8088"},
		{Name: "Python (FastAPI)", Status: "Checking...", URL: "http://localhost:8089"},
		{Name: "Python (BlackSheep)", Status: "Checking...", URL: "http://localhost:8090"},
		{Name: "Python (Sanic)", Status: "Checking...", URL: "http://localhost:8091"},
		{Name: "Java (Vert.x)", Status: "Checking...", URL: "http://localhost:8092"},
		{Name: "Java (Netty)", Status: "Checking...", URL: "http://localhost:8093"},
		{Name: "Java (Quarkus)", Status: "Checking...", URL: "http://localhost:8094"},
	}

	go func() {
		client := http.Client{Timeout: 800 * time.Millisecond}
		for {
			for i := range services {
				resp, err := client.Get(services[i].URL + "/api/simulation/status")
				if err == nil && resp.StatusCode == http.StatusOK {
					var statusData struct {
						MemoryMB float64 `json:"memory_mb"`
					}
					if err := json.NewDecoder(resp.Body).Decode(&statusData); err == nil {
						services[i].MemoryMB = statusData.MemoryMB
					}
					services[i].Status = "Ready"
					resp.Body.Close()
				} else {
					services[i].Status = "Offline"
					services[i].MemoryMB = 0
				}
			}
			time.Sleep(2 * time.Second)
		}
	}()

	http.HandleFunc("/api/map/heartbeat", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")
		
		var m runtime.MemStats
		runtime.ReadMemStats(&m)
		
		// Mock System Memory for simulation feel or use limited real stats
		// Total GB is fixed for "Server Capacity" feel (e.g., 32GB)
		data := HeartbeatData{
			Timestamp:  time.Now(),
			Services:   services,
			WorldState: "SIMULATION_ACTIVE",
			SystemMemory: SystemMem{
				UsedGB:  float64(m.Sys) / (1024 * 1024 * 1024),
				TotalGB: 32.0, 
			},
		}
		json.NewEncoder(w).Encode(data)
	})

	fmt.Println("-------------------------------------------")
	fmt.Println("HEART ORCHESTRATOR V5: MEMORY METRICS ACTIVE")
	fmt.Printf("Running on http://localhost:8081\n")
	fmt.Println("-------------------------------------------")

	if err := http.ListenAndServe(":8081", nil); err != nil {
		log.Fatal(err)
	}
}
