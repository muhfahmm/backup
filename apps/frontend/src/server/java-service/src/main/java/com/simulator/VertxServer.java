package com.simulator;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class VertxServer {
    public static void main(String[] args) throws IOException {
        int port = 8092;
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/api/simulation/status", t -> {
            String response = "{\"engine\":\"Java\",\"framework\":\"Vert.x-Mock-Native\",\"status\":\"Ready\"}";
            t.getResponseHeaders().set("Content-Type", "application/json");
            t.sendResponseHeaders(200, response.length());
            try (OutputStream os = t.getResponseBody()) {
                os.write(response.getBytes());
            }
        });
        server.setExecutor(null);
        server.start();
        System.out.println("Java Vert.x Mock running on port " + port);
    }
}
