import { AppShell, ProgressBar, StatCard, StatusBadge } from "@/components/layout/AppShell";
import { appointments, cases, sessions } from "@/data/mock/practice";

export default function ProviderDashboard() {
  const attention = [
    ["New assessment request", "Riya S. submitted knee pain intake", "Review"],
    ["Reassessment due", "Meera Iyer needs cervical plan update", "Today"],
    ["Low adherence", "Kabir Khan completed 2 of 5 sessions", "Follow-up"],
  ];

  return (
    <AppShell title="Good morning, Dr. Talha" eyebrow="Clinical day view">
      <section className="provider-command">
        <div><p className="app-eyebrow">Today at a glance</p><h2>Prioritize care, not admin.</h2><p>Appointments, open cases and follow-ups are organized around clinical decisions for the day.</p></div>
        <div className="stat-grid compact"><StatCard label="Appointments" value="7" detail="5 online, 2 in-clinic" /><StatCard label="Active Cases" value="31" detail="6 need review" /><StatCard label="New Assessments" value="4" detail="2 high priority" /><StatCard label="Follow-ups Due" value="9" detail="Before Friday" /></div>
      </section>

      <section className="app-grid cockpit-grid">
        <article className="app-panel schedule-panel"><div className="panel-head"><h2>Today's Schedule</h2><a href="/provider/appointments">Calendar</a></div><div className="schedule-timeline">{appointments.map((item, index) => <div key={item.id}><time>{index === 0 ? "09:00" : index === 1 ? "10:30" : "18:30"}</time><span /><div><strong>{item.patient}</strong><p>{item.type}</p><StatusBadge status={item.status} /></div></div>)}</div></article>
        <article className="app-panel attention-panel"><div className="panel-head"><h2>Attention Required</h2><StatusBadge status="Live" /></div><div className="attention-list">{attention.map(([title, text, tag]) => <div key={title}><strong>{title}</strong><p>{text}</p><StatusBadge status={tag} /></div>)}</div></article>
      </section>

      <section className="app-grid two">
        <article className="app-panel"><div className="panel-head"><h2>Active Case Progress</h2><a href="/provider/cases">Manage cases</a></div><div className="case-list">{cases.filter((item) => item.status !== "Discharged").map((item) => <a href={`/provider/cases/${item.id}`} key={item.id} className="case-row"><div><strong>{item.complaint}</strong><span>{item.patientName} - {item.id}</span></div><ProgressBar value={item.progress} /><StatusBadge status={item.status} /></a>)}</div></article>
        <article className="app-panel"><div className="panel-head"><h2>Recent Clinical Notes</h2><a href="/provider/sessions">Open sessions</a></div><div className="compact-list">{sessions.map((session) => <div key={session.id}><strong>{session.patient}</strong><span>{session.notes}</span><small>Pain: {session.pain}</small></div>)}</div></article>
      </section>
    </AppShell>
  );
}

