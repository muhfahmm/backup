import os
import psutil
from sanic import Sanic, response

# PYTHON Sanic Server - Ultra Fast
# Port: 8091

app = Sanic("SimulatorSanic")

@app.get("/api/simulation/status")
async def get_status(request):
    process = psutil.Process(os.getpid())
    memory_mb = process.memory_info().rss / (1024 * 1024)
    return response.json({
        "engine": "Python",
        "framework": "Sanic",
        "status": "Active",
        "memory_mb": round(memory_mb, 2)
    })

if __name__ == "__main__":
    print("Starting Sanic Python Server on port 8091...")
    app.run(host="0.0.0.0", port=8091)
