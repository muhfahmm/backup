import os
import psutil
from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/api/simulation/status")
async def get_status():
    process = psutil.Process(os.getpid())
    memory_mb = process.memory_info().rss / (1024 * 1024)
    return {
        "engine": "Python",
        "framework": "FastAPI",
        "status": "Active",
        "memory_mb": round(memory_mb, 2),
        "features": ["Asyncio", "Pydantic"]
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8089)
