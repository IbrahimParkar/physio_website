from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, EmailStr


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
