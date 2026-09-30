import { AppShell } from "@/components/layout/AppShell";
import { sessions } from "@/data/mock/practice";

export default function SessionsPage() {
  return (
    <AppShell title="Sessions" eyebrow="Clinical Session Notes">
      <section className="app-panel">
        <div className="toolbar"><input placeholder="Search session notes..." /><button className="button primary">Record Session</button></div>
        <div className="compact-list">{sessions.map((s) => <div key={s.id}><strong>{s.patient} · {s.date}</strong><span>{s.notes}</span><small>Case {s.caseId} · Pain {s.pain}</small></div>)}</div>
      </section>
    </AppShell>
  );
}
