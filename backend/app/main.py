from fastapi import FastAPI

from app.config import settings
from app.database import Base, engine
from app.api.router import router as api_router

app = FastAPI(title=settings.app_name)
app.include_router(api_router)


@app.on_event("startup")
def create_tables() -> None:
    Base.metadata.create_all(bind=engine)


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok", "environment": settings.environment}



