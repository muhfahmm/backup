package main

import (
	"fmt"
	"log"
	"runtime"

	"github.com/gofiber/fiber/v2"
)

/**
 * GO Fiber Server - Modern & Fast
 * Port: 8088
 */

func main() {
	app := fiber.New()
	app.Get("/api/simulation/status", func(c *fiber.Ctx) error {
		var m runtime.MemStats
		runtime.ReadMemStats(&m)
		memoryMB := float64(m.Alloc) / 1024 / 1024

		return c.JSON(fiber.Map{
			"engine":    "Go",
			"framework": "Fiber",
			"status":    "Ready",
			"memory_mb": memoryMB,
		})
	})
	fmt.Println("Starting Fiber Go Server on port 8088...")
	log.Fatal(app.Listen(":8088"))
}
