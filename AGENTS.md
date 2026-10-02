# Repository Guide

This repository contains a Next.js frontend and a FastAPI backend for the DrTAPhysio rehabilitation platform.

## Structure

- `frontend/` — Next.js static site, public marketing pages, authentication entry screen, and mock patient/provider portal.
- `backend/` — FastAPI service with API routers, clinical domain modules, database access, and PostgreSQL schema/seed files.
- `.github/workflows/` — GitHub Actions workflow that builds and deploys the static frontend.
- `README.md` — local development, deployment, and project overview documentation.

Keep frontend presentation and route concerns in `frontend/`. Keep API, persistence, and clinical domain behavior in `backend/`. Preserve existing URLs and API contracts when restructuring code.

## Codebase Map

### Frontend

- `frontend/app/` contains the App Router: `layout.tsx` defines the HTML shell and metadata, while route groups organize marketing, auth, patient, and provider pages.
- `frontend/components/` contains reusable UI, split into public marketing sections and shared portal layout/components.
- `frontend/data/` contains typed marketing content and mock portal records; mock data is not connected to the backend.
- `frontend/lib/` contains shared frontend helpers such as root-relative site paths.
- `frontend/styles/` and `frontend/app/globals.css` contain design tokens and global styles.
- `frontend/public/assets/` contains browser-served images and brand assets.
- `frontend/next.config.mjs` configures the static export with root-relative URLs for `https://drtalhaparkar.in/`.

### Backend

- `backend/app/main.py` creates the FastAPI application and registers the central API router.
- `backend/app/config.py` loads environment settings, while `backend/app/database.py` owns the SQLAlchemy engine and sessions.
- `backend/app/models.py` and `backend/app/schemas.py` contain shared persistence and API types.
- `backend/app/api/` aggregates HTTP routes; `patients/` and `cases/` contain domain models, schemas, and routers.
- `backend/database/schema.sql` defines the PostgreSQL schema and `seed.sql` provides development data.
- `backend/.env.example` documents required settings. Never commit populated environment files or real clinical data.

### Deployment and boundaries

- GitHub Pages hosts only the statically exported frontend. It cannot run FastAPI, PostgreSQL, authentication, messaging, or other server-side behavior.
- The portal screens currently use mock data and should be treated as UI prototypes until connected to an authenticated backend.
- Backend changes must preserve API paths and response contracts used by the frontend or future integrations.
