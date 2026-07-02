from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class ContentGenerate(BaseModel):
    prompt: str
    content_type: str = "blog"  # blog, caption, email

class ContentResponse(BaseModel):
    id: int
    user_id: int
    title: Optional[str] = None
    prompt: str
    result: str
    content_type: str
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True