# Backend Guide

The backend is a FastAPI application using SQLAlchemy and PostgreSQL.

## Structure

- `app/main.py` creates the FastAPI application and registers the API router.
- `app/config.py` loads environment configuration; `app/database.py` owns the SQLAlchemy engine, sessions, and declarative base.
- `app/models.py` and `app/schemas.py` contain shared persistence models and API schemas.
- `app/api/` aggregates HTTP routes; `app/patients/` and `app/cases/` own their domain models, schemas, and routers.
- `database/schema.sql` defines the PostgreSQL schema and `database/seed.sql` provides development seed data.
- `.env.example` documents required backend settings; `SECURITY.md` records security guidance.

## Backend Conventions

- Keep routers focused on HTTP concerns.
- Put domain behavior in domain modules and database access behind clear boundaries as the API grows.
- Validate request and response data with Pydantic schemas.
- Keep SQLAlchemy models separate from API schemas.
- Preserve existing endpoint paths and response contracts when restructuring.
- Never commit secrets; use `.env` locally and `.env.example` for documented settings.
