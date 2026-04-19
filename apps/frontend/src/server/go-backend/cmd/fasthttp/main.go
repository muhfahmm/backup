package main

import (
	"fmt"
	"log"

	"github.com/valyala/fasthttp"
)

/**
 * GO FastHttp Server - Ultra Performance
 * Port: 8086
 */

func requestHandler(ctx *fasthttp.RequestCtx) {
	fmt.Fprintf(ctx, "{\"engine\": \"Go\", \"framework\": \"Fasthttp\", \"status\": \"Active\"}")
	ctx.SetContentType("application/json")
}

func main() {
	fmt.Println("Starting Fasthttp Go Server on port 8086...")
	if err := fasthttp.ListenAndServe(":8086", requestHandler); err != nil {
		log.Fatalf("Error in ListenAndServe: %v", err)
	}
}
