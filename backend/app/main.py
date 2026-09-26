from fastapi import Depends, FastAPI, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.config import settings
from app.database import Base, engine, get_db
from app.models import Case, Patient
from app.schemas import CaseCreate, CaseRead, PatientCreate, PatientRead, PatientWithCases

app = FastAPI(title=settings.app_name)


@app.on_event("startup")
def create_tables() -> None:
    Base.metadata.create_all(bind=engine)


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok", "environment": settings.environment}


@app.post("/patients", response_model=PatientRead, status_code=status.HTTP_201_CREATED)
def create_patient(payload: PatientCreate, db: Session = Depends(get_db)) -> Patient:
    patient = Patient(**payload.model_dump())
    db.add(patient)
    db.commit()
    db.refresh(patient)
    return patient


@app.get("/patients", response_model=list[PatientWithCases])
def list_patients(db: Session = Depends(get_db)) -> list[Patient]:
    statement = select(Patient).options(selectinload(Patient.cases)).order_by(Patient.created_at.desc())
    return list(db.scalars(statement))


@app.get("/patients/{patient_id}", response_model=PatientWithCases)
def get_patient(patient_id: int, db: Session = Depends(get_db)) -> Patient:
    statement = select(Patient).options(selectinload(Patient.cases)).where(Patient.id == patient_id)
    patient = db.scalar(statement)
    if patient is None:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient


@app.post("/cases", response_model=CaseRead, status_code=status.HTTP_201_CREATED)
def create_case(payload: CaseCreate, db: Session = Depends(get_db)) -> Case:
    patient = db.get(Patient, payload.patient_id)
    if patient is None:
        raise HTTPException(status_code=404, detail="Patient not found")

    case = Case(**payload.model_dump())
    db.add(case)
    db.commit()
    db.refresh(case)
    return case


@app.get("/cases", response_model=list[CaseRead])
def list_cases(db: Session = Depends(get_db)) -> list[Case]:
    statement = select(Case).order_by(Case.created_at.desc())
    return list(db.scalars(statement))

