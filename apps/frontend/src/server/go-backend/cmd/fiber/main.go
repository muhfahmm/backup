package main

import (
	"github.com/gofiber/fiber/v2"
)

/**
 * GO Fiber Server - Express-inspired & Ultra-fast
 * Port: 8088
 */

func main() {
	app := fiber.New()

	app.Get("/api/simulation/status", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"engine":    "Go",
			"framework": "Fiber",
			"status":    "Optimal",
		})
	})

	app.Listen(":8088")
}
