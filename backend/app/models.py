"""Compatibility exports for domain models."""

from app.cases.models import Case, CaseStatus
from app.patients.models import Patient

__all__ = ["Case", "CaseStatus", "Patient"]
