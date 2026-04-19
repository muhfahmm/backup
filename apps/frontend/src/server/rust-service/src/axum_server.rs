use axum::{
    routing::get,
    response::IntoResponse,
    http::StatusCode,
    Json,
    Router,
};
use serde::Serialize;

#[derive(Serialize)]
struct Status {
    engine: String,
    framework: String,
    status: String,
    memory_mb: f64,
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/api/simulation/status", get(get_status));
    let listener = tokio::net::TcpListener::bind("0.0.0.0:8085").await.unwrap();
    println!("Starting Axum Rust Server on port 8085...");
    axum::serve(listener, app).await.unwrap();
}

async fn get_status() -> impl IntoResponse {
    let status = Status {
        engine: "Rust".to_string(),
        framework: "Axum".to_string(),
        status: "Active".to_string(),
        memory_mb: 45.20,
    };
    (StatusCode::OK, Json(status))
}
