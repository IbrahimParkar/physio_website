# Backend Guide

The backend is a FastAPI application using SQLAlchemy and PostgreSQL.

## Structure

- `app/main.py` configures the FastAPI application and registers routers.
- `app/api/` combines domain routers.
- `app/patients/` owns patient models, schemas, and routes.
- `app/cases/` owns case models, schemas, and routes.
- `app/database.py` owns the SQLAlchemy engine, session, and declarative base.
- `database/` contains the SQL schema and seed data.

## Backend Conventions

- Keep routers focused on HTTP concerns.
- Put domain behavior in domain modules and database access behind clear boundaries as the API grows.
- Validate request and response data with Pydantic schemas.
- Keep SQLAlchemy models separate from API schemas.
- Preserve existing endpoint paths and response contracts when restructuring.
- Never commit secrets; use `.env` locally and `.env.example` for documented settings.
