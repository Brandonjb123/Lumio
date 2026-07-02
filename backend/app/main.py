from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.routers import auth, content
from app.models.user import User
from app.models.content import Content

# Buat semua tabel di database
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Lumio API", version="0.2.0")

# Izinkan semua origin (sementara agar Vercel bisa akses)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register router
app.include_router(auth.router)
app.include_router(content.router)

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Lumio API is running"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}