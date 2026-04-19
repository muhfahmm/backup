package com.simulator;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class UnifiedJavaServer {
    public static void main(String[] args) throws Exception {
        startServer(8092, "Vert.x-Mock-Native");
        startServer(8093, "Netty-Mock-Native");
        startServer(8094, "Quarkus-Mock-Native");
        
        System.out.println("🚀 Unified Java Polyglot Servers running on ports 8092, 8093, 8094");
    }

    private static void startServer(int port, String framework) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/api/simulation/status", new HttpHandler() {
            @Override
            public void handle(HttpExchange t) throws IOException {
                String response = "{\"engine\":\"Java\",\"framework\":\"" + framework + "\",\"status\":\"Ready\"}";
                t.getResponseHeaders().set("Content-Type", "application/json");
                t.sendResponseHeaders(200, response.length());
                OutputStream os = t.getResponseBody();
                os.write(response.getBytes());
                os.close();
            }
        });
        server.setExecutor(null); // default executor
        server.start();
        System.out.println("Started " + framework + " on port " + port);
    }
}
