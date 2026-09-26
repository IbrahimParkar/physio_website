import { AppShell, ProgressBar } from "../../components/AppShell";
import { cases, programs } from "../../data/mock-practice";

export default function ProgressPage() {
  return (
    <AppShell title="Progress Tracking" eyebrow="Clinical Outcomes and Adherence">
      <section className="app-grid two">
        <article className="app-panel"><h2>Case Progress</h2><div className="compact-list">{cases.map((c) => <div key={c.id}><strong>{c.patientName} · {c.complaint}</strong><ProgressBar value={c.progress} /><span>{c.progress}% current goal progress</span></div>)}</div></article>
        <article className="app-panel"><h2>Program Adherence</h2><div className="compact-list">{programs.map((p) => <div key={p.id}><strong>{p.patient}</strong><ProgressBar value={p.adherence} /><span>{p.name} · {p.adherence}%</span></div>)}</div></article>
      </section>
    </AppShell>
  );
}
