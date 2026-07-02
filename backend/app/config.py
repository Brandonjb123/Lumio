from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "Lumio"
    database_url: str = "sqlite:///./lumio.db"
    secret_key: str = "change-this-in-env-file"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    groq_api_key: str = ""

    class Config:
        env_file = ".env"

settings = Settings()