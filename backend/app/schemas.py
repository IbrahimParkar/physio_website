"""Compatibility exports for domain schemas."""

from app.cases.schemas import CaseBase, CaseCreate, CaseRead
from app.patients.schemas import PatientBase, PatientCreate, PatientRead


class PatientWithCases(PatientRead):
    cases: list[CaseRead] = []


__all__ = ["CaseBase", "CaseCreate", "CaseRead", "PatientBase", "PatientCreate", "PatientRead", "PatientWithCases"]
