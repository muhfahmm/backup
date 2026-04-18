from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "President Simulator Python API Initialized"}

@app.get("/health")
def health_check():
    return {"status": "OK"}
