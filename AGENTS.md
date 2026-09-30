# Repository Guide

This repository contains a Next.js frontend and a FastAPI backend for the DrTAPhysio rehabilitation platform.

## Structure

- `frontend/` — public marketing site and patient/provider portal.
- `backend/` — FastAPI application, domain modules, database access, and SQL schema.

Keep frontend presentation and route concerns in `frontend/`. Keep API, persistence, and clinical domain behavior in `backend/`. Preserve existing URLs and API contracts when restructuring code.

## Codebase Map

### Frontend

- `frontend/app/layout.tsx` is the global HTML shell and metadata entry point.
- `frontend/app/(marketing)/page.tsx` renders the public landing page through `components/marketing/HomePage.tsx`.
- `frontend/app/(auth)/patient-login/` contains the patient login/demo entry screen.
- `frontend/app/(portal)/patient/` contains patient-facing dashboard, appointments, current case, exercises, documents, messages, profile, and progress routes.
- `frontend/app/(portal)/provider/` contains provider dashboard, cases, patients, appointments, assessments, documents, exercises, messages, programs, progress, reports, sessions, settings, billing, and dynamic detail routes.
- Parentheses in route folders are Next.js route groups and do not appear in public URLs. `[id]` folders are dynamic routes generated from mock records.
- `frontend/components/marketing/` contains reusable public-site sections such as the header, hero, services, case studies, booking, and footer.
- `frontend/components/layout/` contains the shared portal shell, navigation, badges, progress bars, and application UI.
- `frontend/data/marketing/` contains public marketing content. `frontend/data/mock/` contains demo patients, cases, sessions, exercises, appointments, programs, and documents; it is not connected to the backend.
- `frontend/public/assets/` contains static images and brand assets served by the browser.
- `frontend/next.config.mjs` configures the static GitHub Pages export. The Pages workflow builds from `frontend/` and uses `/physio_website` as the project-site base path.

### Backend

- `backend/app/main.py` creates the FastAPI application and registers the API router.
- `backend/app/config.py` loads environment configuration; `database.py` creates the database connection/session layer.
- `backend/app/models.py` and `schemas.py` contain shared persistence and API types.
- `backend/app/api/router.py` is the central API route aggregator.
- `backend/app/patients/` and `backend/app/cases/` contain domain-specific models, request/response schemas, and routers.
- `backend/database/schema.sql` defines the PostgreSQL schema and `seed.sql` provides development seed data.
- `backend/.env.example` documents required backend environment variables. Never commit a populated `.env` file or real clinical data.

### Deployment and boundaries

- GitHub Pages hosts only the statically exported frontend. It cannot run FastAPI, PostgreSQL, authentication, messaging, or other server-side behavior.
- The portal screens currently use mock data and should be treated as UI prototypes until connected to an authenticated backend.
- Backend changes must preserve API paths and response contracts used by the frontend or future integrations.
