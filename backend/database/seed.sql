INSERT INTO patients (full_name, phone, email, date_of_birth, city, primary_goal)
VALUES
  ('Aarav Sharma', '+919876543210', 'aarav@example.com', '1984-02-18', 'Mumbai', 'Return to pain-free walking and office work'),
  ('Meera Iyer', '+919123456780', 'meera@example.com', '1991-08-05', 'Pune', 'Reduce neck pain during desk work')
ON CONFLICT (phone) DO NOTHING;

INSERT INTO cases (patient_id, title, status, source, clinical_notes, recommended_plan)
SELECT id, 'Hand Fracture Rehabilitation', 'active', 'whatsapp', 'Post-cast stiffness with reduced grip strength.', 'Mobility drills, swelling control, grip strengthening, weekly video review.'
FROM patients
WHERE phone = '+919876543210'
ON CONFLICT DO NOTHING;

INSERT INTO cases (patient_id, title, status, source, clinical_notes, recommended_plan)
SELECT id, 'Knee Arthritis', 'follow_up', 'whatsapp', 'Pain during stairs and longer walks.', 'Quadriceps strengthening, walking tolerance plan, pain pacing.'
FROM patients
WHERE phone = '+919876543210'
ON CONFLICT DO NOTHING;

