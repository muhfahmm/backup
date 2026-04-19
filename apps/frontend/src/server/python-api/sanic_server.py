from sanic import Sanic, json

app = Sanic("PresidentSim")

@app.get("/api/simulation/status")
async def get_status(request):
    return json({
        "engine": "Python",
        "framework": "Sanic",
        "status": "Healthy",
        "features": ["Asyncio", "Fast Request Handling"]
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8091)
