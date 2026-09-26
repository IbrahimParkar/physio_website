from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, EmailStr

from app.models import CaseStatus


class CaseBase(BaseModel):
    title: str
    status: CaseStatus = CaseStatus.new
    source: str = "whatsapp"
    clinical_notes: str | None = None
    recommended_plan: str | None = None


class CaseCreate(CaseBase):
    patient_id: int


class CaseRead(CaseBase):
    id: int
    patient_id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class PatientBase(BaseModel):
    full_name: str
    phone: str
    email: EmailStr | None = None
    date_of_birth: date | None = None
    city: str | None = None
    primary_goal: str | None = None


class PatientCreate(PatientBase):
    pass


class PatientRead(PatientBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class PatientWithCases(PatientRead):
    cases: list[CaseRead] = []

