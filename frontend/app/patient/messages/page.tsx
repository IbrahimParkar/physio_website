import { AppShell, StatusBadge } from "../../components/AppShell";

export default function PatientMessages() {
  return (
    <AppShell title="Messages" eyebrow="Care Team Communication" mode="patient">
      <section className="app-grid two"><article className="app-panel"><h2>Messages</h2><div className="compact-list"><div><strong>DrTAPhysio</strong><span>Please continue wall sits only within comfortable pain limits.</span><StatusBadge status="Unread" /></div></div></article><article className="app-panel clinical-form"><h2>Ask a Question</h2><label>Message<textarea /></label><button className="button primary" type="button">Send</button></article></section>
    </AppShell>
  );
}

