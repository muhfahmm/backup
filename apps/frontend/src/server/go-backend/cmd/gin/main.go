package main

import (
	"github.com/gin-gonic/gin"
)

/**
 * GO Gin Server - Feature Rich & High Performance
 * Port: 8087
 */

func main() {
	r := gin.Default()
	
	r.GET("/api/simulation/status", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"engine":    "Go",
			"framework": "Gin",
			"status":    "Ready",
		})
	})

	r.Run(":8087")
}
