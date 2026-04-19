from blacksheep import Application, get, json
import uvicorn

app = Application()

@get("/api/simulation/status")
def get_status():
    return json({
        "engine": "Python",
        "framework": "BlackSheep",
        "status": "Running",
        "features": ["Ultra-fast", "Dependency Injection"]
    })

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8090)
