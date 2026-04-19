package com.simulator;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class QuarkusServer {
    public static void main(String[] args) throws IOException {
        int port = 8094;
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/api/simulation/status", t -> {
            Runtime runtime = Runtime.getRuntime();
            long usedMemory = runtime.totalMemory() - runtime.freeMemory();
            double memoryMB = usedMemory / (1024.0 * 1024.0);

            String response = String.format("{\"engine\":\"Java\",\"framework\":\"Quarkus-Mock-Native\",\"status\":\"Ready\",\"memory_mb\":%.2f}", memoryMB);
            t.getResponseHeaders().set("Content-Type", "application/json");
            t.sendResponseHeaders(200, response.length());
            try (OutputStream os = t.getResponseBody()) {
                os.write(response.getBytes());
            }
        });
        server.setExecutor(null);
        server.start();
        System.out.println("Java Quarkus Mock running on port " + port);
    }
}
