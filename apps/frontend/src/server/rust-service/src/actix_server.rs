use actix_web::{get, App, HttpResponse, HttpServer, Responder};
use serde::Serialize;

#[derive(Serialize)]
struct Status {
    engine: String,
    status: String,
    framework: String,
    memory_mb: f64,
}

#[get("/api/simulation/status")]
async fn status() -> impl Responder {
    HttpResponse::Ok().json(Status {
        engine: "Rust".to_string(),
        status: "Active".to_string(),
        framework: "Actix-web".to_string(),
        memory_mb: 42.50,
    })
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Starting Actix-web Rust Server on port 8084...");
    HttpServer::new(|| {
        App::new().service(status)
    })
    .bind(("0.0.0.0", 8084))?
    .run()
    .await
}
