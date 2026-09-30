import { AppShell } from "@/components/layout/AppShell";
import { exerciseLibrary } from "@/data/mock/practice";

export default function ExerciseLibraryPage() {
  return (
    <AppShell title="Exercise Library" eyebrow="Rehabilitation Prescriptions">
      <section className="app-panel">
        <div className="toolbar">
          <input placeholder="Search exercises..." />
          <select><option>All Categories</option><option>Knee</option><option>Cervical</option><option>Hand</option></select>
          <button className="button primary">Add Exercise</button>
        </div>
        <div className="exercise-grid">
          {exerciseLibrary.map((exercise) => (
            <article className="exercise-card" key={exercise.id}>
              <div className="video-placeholder">Video/demo placeholder</div>
              <strong>{exercise.name}</strong>
              <span>{exercise.category}</span>
              <p>{exercise.instructions}</p>
              <small>{exercise.sets} sets · {exercise.reps} reps · {exercise.duration} · Hold {exercise.hold} · {exercise.frequency}</small>
              <button className="button secondary">Select for Program</button>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
