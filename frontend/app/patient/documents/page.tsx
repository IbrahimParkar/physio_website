import { AppShell } from "../../components/AppShell";
import { documents } from "../../data/mock-practice";

export default function PatientDocuments() {
  return (
    <AppShell title="Documents" eyebrow="My Files" mode="patient">
      <section className="app-panel"><div className="compact-list">{documents.filter((d) => d.patient === "Aarav Sharma").map((d) => <div key={d.id}><strong>{d.title}</strong><span>{d.type} · {d.date}</span><button className="button secondary">View</button></div>)}</div></section>
    </AppShell>
  );
}

