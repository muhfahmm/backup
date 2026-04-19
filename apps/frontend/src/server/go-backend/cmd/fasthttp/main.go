package main

import (
	"fmt"
	"log"
	"runtime"

	"github.com/valyala/fasthttp"
)

/**
 * GO FastHttp Server - Ultra Performance
 * Port: 8086
 */

func requestHandler(ctx *fasthttp.RequestCtx) {
	var m runtime.MemStats
	runtime.ReadMemStats(&m)
	memoryMB := float64(m.Alloc) / 1024 / 1024
	
	ctx.SetContentType("application/json")
	fmt.Fprintf(ctx, "{\"engine\": \"Go\", \"framework\": \"Fasthttp\", \"status\": \"Active\", \"memory_mb\": %.2f}", memoryMB)
}

func main() {
	fmt.Println("Starting Fasthttp Go Server on port 8086...")
	if err := fasthttp.ListenAndServe(":8086", requestHandler); err != nil {
		log.Fatalf("Error in ListenAndServe: %v", err)
	}
}
