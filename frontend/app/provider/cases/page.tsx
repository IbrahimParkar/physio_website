import { AppShell, ProgressBar, StatusBadge } from "../../components/AppShell";
import { cases } from "../../data/mock-practice";

export default function CasesPage() {
  return (
    <AppShell title="Cases" eyebrow="Case Management">
      <section className="app-panel">
        <div className="toolbar">
          <input placeholder="Search case ID, patient, complaint..." />
          <select><option>All Statuses</option><option>Active</option><option>Reassessment</option><option>Discharged</option></select>
          <a className="button primary" href="/provider/cases/new">Create New Case</a>
        </div>
        <div className="case-list">
          {cases.map((item) => (
            <a href={`/provider/cases/${item.id}`} className="case-row wide" key={item.id}>
              <div><strong>{item.id}</strong><span>{item.patientName} · {item.complaint}</span></div>
              <ProgressBar value={item.progress} />
              <StatusBadge status={item.status} />
            </a>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
