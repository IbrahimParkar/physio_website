import { AppShell, ProgressBar, StatusBadge } from "@/components/layout/AppShell";
import { appointments, cases, exerciseLibrary, sessions } from "@/data/mock/practice";

export default function PatientDashboard() {
  const currentCase = cases[0];
  const journey = ["Assessment", "Plan", "Phase 1", "Phase 2", "Phase 3", "Discharge"];
  return (
    <AppShell title="Good morning, Aarav" eyebrow="Your recovery" mode="patient">
      <section className="patient-recovery-hero">
        <div><p className="app-eyebrow">Current recovery</p><h2>Knee Rehabilitation</h2><p>Phase 2 of 4</p><ProgressBar value={72} /><strong>You're making steady progress.</strong></div>
        <article className="next-session-card"><span>Next Session</span><strong>18 Aug</strong><p>7:00 PM - Physiotherapy Follow-up</p><button className="button primary">Join Session</button></article>
      </section>

      <section className="app-grid two patient-focus-grid">
        <article className="app-panel today-rehab"><div className="panel-head"><h2>Today's Rehabilitation</h2><StatusBadge status="3 exercises" /></div><div className="exercise-grid patient-exercises">{exerciseLibrary.slice(0, 3).map((exercise) => <div key={exercise.id} className="exercise-card"><div className="video-placeholder">Demo</div><strong>{exercise.name}</strong><span>{exercise.sets} sets - {exercise.reps} reps - {exercise.duration}</span><button className="button primary">Start Exercise</button></div>)}</div></article>
        <article className="app-panel"><h2>Rehabilitation Journey</h2><div className="journey-line">{journey.map((step, index) => <span key={step} className={index < 3 ? "done" : index === 3 ? "current" : ""}>{step}</span>)}</div></article>
      </section>

      <section className="app-grid three-metrics">
        {[ ["Pain", "3/10", 62], ["Mobility", "Improving", 76], ["Strength", "Building", 68], ["Adherence", "86%", 86] ].map(([label, value, progress]) => <article className="app-panel metric-tile" key={label as string}><span>{label}</span><strong>{value}</strong><ProgressBar value={progress as number} /></article>)}
      </section>

      <section className="app-grid two"><article className="app-panel"><h2>Treatment Plan</h2><p>{currentCase.plan}</p></article><article className="app-panel"><h2>Recent Sessions</h2><div className="compact-list">{sessions.filter((s) => s.patient === "Aarav Sharma").map((s) => <div key={s.id}><strong>{s.date}</strong><span>{s.notes}</span></div>)}</div></article></section>
    </AppShell>
  );
}

