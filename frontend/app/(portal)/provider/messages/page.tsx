import { AppShell, StatusBadge } from "@/components/layout/AppShell";

export default function MessagesPage() {
  return (
    <AppShell title="Messages / Notifications" eyebrow="Patient Communication">
      <section className="app-grid two"><article className="app-panel"><h2>Inbox</h2><div className="compact-list"><div><strong>Aarav Sharma</strong><span>Can I do stairs today?</span><StatusBadge status="Unread" /></div><div><strong>System</strong><span>Meera completed 4 of 5 assigned exercises.</span></div></div></article><article className="app-panel clinical-form"><h2>Send Message</h2><label>Patient<input placeholder="Select patient" /></label><label>Message<textarea /></label><button className="button primary" type="button">Send</button></article></section>
    </AppShell>
  );
}
