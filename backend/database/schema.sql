CREATE TYPE case_status AS ENUM ('new', 'active', 'follow_up', 'closed');

CREATE TABLE IF NOT EXISTS patients (
  id BIGSERIAL PRIMARY KEY,
  full_name VARCHAR(160) NOT NULL,
  phone VARCHAR(32) NOT NULL UNIQUE,
  email VARCHAR(255) UNIQUE,
  date_of_birth DATE,
  city VARCHAR(120),
  primary_goal TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS cases (
  id BIGSERIAL PRIMARY KEY,
  patient_id BIGINT NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  title VARCHAR(180) NOT NULL,
  status case_status NOT NULL DEFAULT 'new',
  source VARCHAR(80) NOT NULL DEFAULT 'whatsapp',
  clinical_notes TEXT,
  recommended_plan TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_patients_phone ON patients(phone);
CREATE INDEX IF NOT EXISTS idx_cases_patient_id ON cases(patient_id);
CREATE INDEX IF NOT EXISTS idx_cases_status ON cases(status);

