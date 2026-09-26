import { AppShell } from "../../components/AppShell";
import { exerciseLibrary } from "../../data/mock-practice";

export default function PatientExercises() {
  return (
    <AppShell title="Assigned Exercises" eyebrow="Home Program" mode="patient">
      <section className="exercise-grid">
        {exerciseLibrary.slice(0, 3).map((exercise) => (
          <article className="exercise-card app-panel" key={exercise.id}>
            <div className="video-placeholder">Demo video</div>
            <strong>{exercise.name}</strong>
            <p>{exercise.instructions}</p>
            <small>{exercise.sets} sets · {exercise.reps} reps · {exercise.duration} · Hold {exercise.hold} · {exercise.frequency}</small>
            <button className="button primary">Mark Completed</button>
          </article>
        ))}
      </section>
    </AppShell>
  );
}

