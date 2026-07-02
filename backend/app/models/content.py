from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.sql import func
from app.database import Base

class Content(Base):
    __tablename__ = "contents"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    title = Column(String(255), nullable=True)
    prompt = Column(Text, nullable=False)
    result = Column(Text, nullable=False)
    content_type = Column(String(50), nullable=False, default="blog")  # blog, caption, email
    created_at = Column(DateTime(timezone=True), server_default=func.now())