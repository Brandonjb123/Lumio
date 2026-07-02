from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.content import ContentGenerate, ContentResponse
from app.routers.auth import get_current_user
from app.models.user import User
from app.models.content import Content
from app.services.ai_service import generate_content

router = APIRouter(prefix="/content", tags=["Content"])

@router.post("/generate", response_model=ContentResponse)
def generate_new_content(
    request: ContentGenerate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    result = generate_content(request.prompt, request.content_type)
    new_content = Content(
        user_id=current_user.id,
        prompt=request.prompt,
        result=result,
        content_type=request.content_type
    )
    db.add(new_content)
    db.commit()
    db.refresh(new_content)
    return new_content

@router.get("/history", response_model=list[ContentResponse])
def get_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    contents = (
        db.query(Content)
        .filter(Content.user_id == current_user.id)
        .order_by(Content.created_at.desc())
        .all()
    )
    return contents

@router.delete("/delete/{content_id}")
def delete_content(
    content_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    content = db.query(Content).filter(
        Content.id == content_id,
        Content.user_id == current_user.id
    ).first()
    if not content:
        raise HTTPException(status_code=404, detail="Konten tidak ditemukan")
    db.delete(content)
    db.commit()
    return {"message": "Konten berhasil dihapus"}