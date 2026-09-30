from fastapi import APIRouter

from app.patients.router import router as patients_router
from app.cases.router import router as cases_router

router = APIRouter()
router.include_router(patients_router)
router.include_router(cases_router)
