package main

import (
	"fmt"
	"runtime"

	"github.com/gin-gonic/gin"
)

/**
 * GO Gin Server - Feature Rich
 * Port: 8087
 */

func main() {
	r := gin.Default()
	r.GET("/api/simulation/status", func(c *gin.Context) {
		var m runtime.MemStats
		runtime.ReadMemStats(&m)
		memoryMB := float64(m.Alloc) / 1024 / 1024

		c.JSON(200, gin.H{
			"engine":    "Go",
			"framework": "Gin",
			"status":    "Ready",
			"memory_mb": memoryMB,
		})
	})
	fmt.Println("Starting Gin Go Server on port 8087...")
	r.Run(":8087")
}
