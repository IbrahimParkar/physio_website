import { AppShell, ProgressBar, StatusBadge } from "@/components/layout/AppShell";
import { cases, exerciseLibrary, sessions, workflowSteps } from "@/data/mock/practice";

export function generateStaticParams() {
  return cases.map((clinicalCase) => ({ id: clinicalCase.id }));
}

export default function CaseDetail({ params }: { params: { id: string } }) {
  const clinicalCase = cases.find((item) => item.id === params.id) ?? cases[0];

  return (
    <AppShell title={clinicalCase.id} eyebrow={`${clinicalCase.patientName} · Case Detail`}>
      <section className="profile-header app-panel">
        <div>
          <h2>{clinicalCase.complaint}</h2>
          <p>{clinicalCase.patientName}</p>
          <StatusBadge status={clinicalCase.status} />
        </div>
        <div>
          <ProgressBar value={clinicalCase.progress} />
          <small>{clinicalCase.progress}% toward current case goals</small>
        </div>
      </section>
      <section className="tab-strip">{["Summary", "Assessment", "Goals", "Treatment Plan", "Sessions", "Exercises", "Progress", "Documents", "Discharge"].map((tab) => <span key={tab}>{tab}</span>)}</section>
      <section className="app-grid two">
        <article className="app-panel">
          <h2>Clinical Summary</h2>
          <dl className="clinical-list">
            <div><dt>History</dt><dd>{clinicalCase.history}</dd></div>
            <div><dt>Assessment</dt><dd>{clinicalCase.assessment}</dd></div>
            <div><dt>Findings</dt><dd>{clinicalCase.findings}</dd></div>
            <div><dt>Clinical impression</dt><dd>{clinicalCase.impression}</dd></div>
            <div><dt>Treatment plan</dt><dd>{clinicalCase.plan}</dd></div>
          </dl>
        </article>
        <article className="app-panel">
          <h2>Goals & Outcomes</h2>
          <ul className="app-list">{clinicalCase.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
          <h3>Outcome Measures</h3>
          <ul className="app-list">{clinicalCase.outcomeMeasures.map((measure) => <li key={measure}>{measure}</li>)}</ul>
        </article>
      </section>
      <section className="app-grid two">
        <article className="app-panel">
          <h2>Session Notes</h2>
          <div className="compact-list">{sessions.filter((s) => s.caseId === clinicalCase.id).map((s) => <div key={s.id}><strong>{s.date}</strong><span>{s.notes}</span><small>Pain {s.pain}</small></div>)}</div>
        </article>
        <article className="app-panel">
          <h2>Exercise Program</h2>
          <div className="exercise-grid">{exerciseLibrary.slice(0, 3).map((ex) => <div key={ex.id} className="exercise-card"><strong>{ex.name}</strong><span>{ex.sets} sets · {ex.reps} reps · {ex.frequency}</span><div className="video-placeholder">Demo</div></div>)}</div>
        </article>
      </section>
      <section className="app-panel">
        <h2>Workflow Position</h2>
        <div className="workflow-strip">{workflowSteps.map((step, index) => <span key={step} className={index < 9 ? "done" : ""}>{step}</span>)}</div>
      </section>
    </AppShell>
  );
}
