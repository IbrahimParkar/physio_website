import { AppShell, StatusBadge } from "../../components/AppShell";
import { appointments } from "../../data/mock-practice";

export default function PatientAppointments() {
  return (
    <AppShell title="Appointments" eyebrow="My Schedule" mode="patient">
      <section className="app-panel"><div className="compact-list">{appointments.slice(0, 2).map((a) => <div key={a.id}><strong>{a.type}</strong><span>{a.date}, {a.time}</span><StatusBadge status={a.status} /></div>)}</div></section>
    </AppShell>
  );
}

