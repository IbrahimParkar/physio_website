import { AppShell, ProgressBar } from "../../components/AppShell";
import { exerciseLibrary, programs } from "../../data/mock-practice";

export default function ProgramsPage() {
  return (
    <AppShell title="Exercise Programs" eyebrow="Customized Home Rehab">
      <section className="app-grid two">
        <article className="app-panel">
          <h2>Active Programs</h2>
          <div className="compact-list">
            {programs.map((program) => <div key={program.id}><strong>{program.name}</strong><span>{program.patient} · {program.exercises} exercises · Updated {program.updated}</span><ProgressBar value={program.adherence} /></div>)}
          </div>
        </article>
        <article className="app-panel clinical-form">
          <h2>Create Program</h2>
          <label>Patient<input placeholder="Select patient" /></label>
          <label>Case<input placeholder="Attach to active case" /></label>
          <label>Program Name<input placeholder="Knee Strength Phase 3" /></label>
          <div className="exercise-select-list">{exerciseLibrary.map((exercise) => <label key={exercise.id}><input type="checkbox" /> {exercise.name}</label>)}</div>
          <button className="button primary" type="button">Save Program</button>
        </article>
      </section>
    </AppShell>
  );
}
