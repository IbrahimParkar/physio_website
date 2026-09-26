<<<<<<< HEAD
# DrTAPhysio Website

Modern frontend and backend scaffold for Dr. Talha Parkar / DrTAPhysio.

## Structure

- `frontend/`
  - Next.js website with Home, About, Specializations, Services, Tele-Rehabilitation, Case Studies, Resources, Contact, Request Assessment, Book Consultation, and Patient Login
  - reserved `app/portal/patient` route for future patient portal development
- `backend/`
  - FastAPI API service
  - PostgreSQL schema and seed data
  - SQLAlchemy models for patient and case data

## Database Choice

Use PostgreSQL for production. It is free, open source, reliable, and supports strong access controls, encryption in managed hosting, backups, and audit-friendly relational data.

Good free/low-cost hosting options include Supabase, Neon, and Railway. For local development, install PostgreSQL locally and create a database named `telerehab`.

## Run The Frontend

```powershell
cd frontend
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Run The Backend

Install Python 3.11+ and PostgreSQL, then:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
```

Update `.env` with your PostgreSQL URL, then:

```powershell
psql -d telerehab -f database/schema.sql
psql -d telerehab -f database/seed.sql
uvicorn app.main:app --reload
```

API docs will be available at `http://127.0.0.1:8000/docs`.
=======
# physio_website
>>>>>>> d2e7dccf69dfe65a6da7f7d17ef042f30cd92ead
