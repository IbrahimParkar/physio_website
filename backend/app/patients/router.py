from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.database import get_db
from app.patients.models import Patient
from app.schemas import PatientCreate, PatientRead, PatientWithCases

router = APIRouter(tags=["patients"])


@router.post("/patients", response_model=PatientRead, status_code=status.HTTP_201_CREATED)
def create_patient(payload: PatientCreate, db: Session = Depends(get_db)) -> Patient:
    patient = Patient(**payload.model_dump())
    db.add(patient)
    db.commit()
    db.refresh(patient)
    return patient


@router.get("/patients", response_model=list[PatientWithCases])
def list_patients(db: Session = Depends(get_db)) -> list[Patient]:
    statement = select(Patient).options(selectinload(Patient.cases)).order_by(Patient.created_at.desc())
    return list(db.scalars(statement))


@router.get("/patients/{patient_id}", response_model=PatientWithCases)
def get_patient(patient_id: int, db: Session = Depends(get_db)) -> Patient:
    statement = select(Patient).options(selectinload(Patient.cases)).where(Patient.id == patient_id)
    patient = db.scalar(statement)
    if patient is None:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient
