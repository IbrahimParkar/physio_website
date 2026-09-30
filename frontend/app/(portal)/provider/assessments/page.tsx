import { AppShell } from "@/components/layout/AppShell";

export default function AssessmentsPage() {
  return (
    <AppShell title="Assessments" eyebrow="Initial and Reassessment Forms">
      <section className="app-grid two">
        <article className="app-panel clinical-form"><h2>Initial Assessment Template</h2><label>Subjective History<textarea /></label><label>Objective Findings<textarea /></label><label>Outcome Measures<textarea /></label><button className="button primary" type="button">Save Assessment</button></article>
        <article className="app-panel"><h2>Assessment Queue</h2><div className="compact-list"><div><strong>Aarav Sharma</strong><span>Knee reassessment due tomorrow</span></div><div><strong>Meera Iyer</strong><span>Cervical reassessment in progress</span></div></div></article>
      </section>
    </AppShell>
  );
}
