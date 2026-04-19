use axum::{
    routing::get,
    Json, Router,
};
use serde::Serialize;
use std::net::SocketAddr;

#[derive(Serialize)]
struct Status {
    engine: String,
    status: String,
    framework: String,
}

async fn get_status() -> Json<Status> {
    Json(Status {
        engine: "Rust".to_string(),
        status: "Running".to_string(),
        framework: "Axum".to_string(),
    })
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/api/simulation/status", get(get_status));

    let addr = SocketAddr::from(([0, 0, 0, 0], 8085));
    println!("Starting Axum Rust Server on {}...", addr);
    
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
