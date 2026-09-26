import { AppShell } from "../../../components/AppShell";
import { patients, workflowSteps } from "../../../data/mock-practice";

export default function NewCasePage() {
  return (
    <AppShell title="Create New Case" eyebrow="Assess → Create Case">
      <section className="app-grid form-layout">
        <form className="app-panel clinical-form">
          <h2>Patient & Complaint</h2>
          <label>Patient<select>{patients.map((patient) => <option key={patient.id}>{patient.name}</option>)}</select></label>
          <label>Primary Complaint<input placeholder="Knee pain, shoulder injury, back pain..." /></label>
          <label>Clinical History<textarea placeholder="Onset, aggravating/easing factors, past treatment, precautions..." /></label>
          <label>Assessment<textarea placeholder="Movement screen, pain behavior, mobility, strength, functional tests..." /></label>
          <label>Clinical Findings<textarea placeholder="Objective findings, outcome measures, relevant observations..." /></label>
          <label>Diagnosis / Clinical Impression<textarea placeholder="Working clinical impression and contributing factors..." /></label>
          <label>Goals<textarea placeholder="Short-term and long-term patient-centered goals..." /></label>
          <label>Treatment Plan<textarea placeholder="Frequency, session type, education, manual therapy, exercise plan..." /></label>
          <label>Outcome Measures<input placeholder="NRS, LEFS, DASH, NDI, PSFS..." /></label>
          <button className="button primary" type="button">Save Case Draft</button>
        </form>
        <aside className="app-panel">
          <h2>Case Workflow</h2>
          <div className="vertical-steps">
            {workflowSteps.map((step, index) => <span key={step} className={index < 2 ? "done" : ""}>{index + 1}. {step}</span>)}
          </div>
        </aside>
      </section>
    </AppShell>
  );
}
