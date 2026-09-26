import { AppShell, ProgressBar } from "../../components/AppShell";
import { cases, programs } from "../../data/mock-practice";

export default function PatientProgress() {
  return (
    <AppShell title="Progress" eyebrow="My Outcomes" mode="patient">
      <section className="app-grid two">
        <article className="app-panel"><h2>Case Goal Progress</h2><ProgressBar value={cases[0].progress} /><p>{cases[0].progress}% toward current goals</p></article>
        <article className="app-panel"><h2>Exercise Adherence</h2><ProgressBar value={programs[0].adherence} /><p>{programs[0].adherence}% completed this week</p></article>
      </section>
    </AppShell>
  );
}

