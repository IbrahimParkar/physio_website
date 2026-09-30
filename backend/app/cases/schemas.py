from datetime import datetime

from pydantic import BaseModel, ConfigDict

from app.cases.models import CaseStatus


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
