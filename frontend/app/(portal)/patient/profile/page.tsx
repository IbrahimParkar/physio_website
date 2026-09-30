import { AppShell, ProgressBar, StatusBadge } from "@/components/layout/AppShell";
import { patients } from "@/data/mock/practice";

export default function PatientProfile() {
  const patient = patients[0];
  return (
    <AppShell title="Profile & Settings" eyebrow="My Account" mode="patient">
      <section className="profile-header app-panel"><div><h2>{patient.name}</h2><p>{patient.age} years · {patient.city}</p><p>{patient.phone} · {patient.email}</p></div><div><StatusBadge status={patient.status} /><ProgressBar value={patient.adherence} /></div></section>
    </AppShell>
  );
}
