package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/presiden-simulator/backend/go-backend/shared/models"
)

func main() {
	http.HandleFunc("/api/territory", func(w http.ResponseWriter, r *http.Request) {
		id := r.URL.Query().Get("id")
		
		// Logic bridged from functional folders
		data := models.Territory{
			ID:        id,
			Name:      "Indonesia",
			Continent: "Asia",
			GDP:       1100000,
			Pop:       270000000,
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(data)
	})

	fmt.Println("President Simulator Go Backend running on :8080")
	http.ListenAndServe(":8080", nil)
}
