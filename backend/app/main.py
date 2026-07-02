from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.routers import auth, content
from app.models.user import User
from app.models.content import Content
# Buat semua tabel di database
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Lumio API", version="0.2.0")

allow_origins=[
    "http://localhost:5173",
    "https://lumio-six-topaz.vercel.app",           # domain utama
    "https://lumio-ky9eamvxv-brandonjb-projects.vercel.app",  # domain preview
    "https://*.vercel.app"                          # semua subdomain vercel (wildcard)
],

# Register router
app.include_router(auth.router)
app.include_router(content.router)

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Lumio API is running"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}