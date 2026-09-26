import { AppShell, ProgressBar, StatusBadge } from "../../../components/AppShell";
import { cases, documents, patients, sessions } from "../../../data/mock-practice";

export default function PatientProfile({ params }: { params: { id: string } }) {
  const patient = patients.find((item) => item.id === params.id) ?? patients[0];
  const patientCases = cases.filter((item) => item.patientId === patient.id);

  return (
    <AppShell title={patient.name} eyebrow="Patient Profile">
      <section className="profile-header app-panel">
        <div>
          <h2>{patient.name}</h2>
          <p>{patient.age} years · {patient.city} · {patient.phone}</p>
          <p>{patient.primaryGoal}</p>
        </div>
        <div>
          <StatusBadge status={patient.status} />
          <ProgressBar value={patient.adherence} />
          <small>{patient.adherence}% program adherence</small>
        </div>
      </section>

      <section className="tab-strip">
        {["Profile", "Cases", "Clinical Info", "Appointments", "Sessions", "Exercises", "Progress", "Documents", "Reports"].map((tab) => <span key={tab}>{tab}</span>)}
      </section>

      <section className="app-grid two">
        <article className="app-panel">
          <div className="panel-head"><h2>Cases</h2><a href="/provider/cases/new">Create case</a></div>
          <div className="case-list">
            {patientCases.map((item) => (
              <a className="case-row" href={`/provider/cases/${item.id}`} key={item.id}>
                <div><strong>{item.id}</strong><span>{item.complaint}</span></div>
                <StatusBadge status={item.status} />
              </a>
            ))}
          </div>
        </article>
        <article className="app-panel">
          <h2>Clinical Information</h2>
          <dl className="clinical-list">
            <div><dt>Primary goal</dt><dd>{patient.primaryGoal}</dd></div>
            <div><dt>Risk flags</dt><dd>No red flags recorded in mock profile</dd></div>
            <div><dt>Communication</dt><dd>WhatsApp preferred, evenings after 6 PM</dd></div>
          </dl>
        </article>
      </section>

      <section className="app-grid two">
        <article className="app-panel">
          <h2>Session History</h2>
          <div className="compact-list">{sessions.filter((s) => s.patient === patient.name).map((s) => <div key={s.id}><strong>{s.date}</strong><span>{s.notes}</span></div>)}</div>
        </article>
        <article className="app-panel">
          <h2>Documents & Reports</h2>
          <div className="compact-list">{documents.filter((doc) => doc.patient === patient.name).map((doc) => <div key={doc.id}><strong>{doc.title}</strong><span>{doc.type} · {doc.date}</span></div>)}</div>
        </article>
      </section>
    </AppShell>
  );
}
