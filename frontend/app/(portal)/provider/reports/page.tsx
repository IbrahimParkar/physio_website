import { AppShell } from "@/components/layout/AppShell";
import { cases } from "@/data/mock/practice";

export default function ReportsPage() {
  return (
    <AppShell title="Reports" eyebrow="Clinical Documentation">
      <section className="app-panel">
        <div className="toolbar"><input placeholder="Search reports..." /><button className="button primary">Generate Patient Report</button></div>
        <div className="compact-list">{cases.map((c) => <div key={c.id}><strong>{c.patientName}</strong><span>{c.id} progress report · {c.nextStep}</span><button className="button secondary">Preview</button></div>)}</div>
      </section>
    </AppShell>
  );
}
