import { AppShell, ProgressBar, StatusBadge } from "@/components/layout/AppShell";
import { cases, workflowSteps } from "@/data/mock/practice";

export default function PatientCurrentCase() {
  const currentCase = cases[0];
  return (
    <AppShell title="Current Case" eyebrow="My Treatment Plan" mode="patient">
      <section className="app-panel">
        <div className="panel-head"><h2>{currentCase.complaint}</h2><StatusBadge status={currentCase.status} /></div>
        <ProgressBar value={currentCase.progress} />
        <dl className="clinical-list">
          <div><dt>Clinical impression</dt><dd>{currentCase.impression}</dd></div>
          <div><dt>Treatment plan</dt><dd>{currentCase.plan}</dd></div>
          <div><dt>Next step</dt><dd>{currentCase.nextStep}</dd></div>
        </dl>
      </section>
      <section className="app-panel"><h2>My Rehab Pathway</h2><div className="workflow-strip">{workflowSteps.map((step, index) => <span key={step} className={index < 8 ? "done" : ""}>{step}</span>)}</div></section>
    </AppShell>
  );
}

