# Repository Guide

This repository contains a Next.js frontend and a FastAPI backend for the DrTAPhysio rehabilitation platform.

## Structure

- `frontend/` — public marketing site and patient/provider portal.
- `backend/` — FastAPI application, domain modules, database access, and SQL schema.

Keep frontend presentation and route concerns in `frontend/`. Keep API, persistence, and clinical domain behavior in `backend/`. Preserve existing URLs and API contracts when restructuring code.
