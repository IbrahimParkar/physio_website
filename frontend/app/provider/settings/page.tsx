import { AppShell } from "../../components/AppShell";

export default function SettingsPage() {
  return (
    <AppShell title="Settings" eyebrow="Practice Configuration">
      <section className="app-grid two"><article className="app-panel clinical-form"><h2>Clinic Profile</h2><label>Practice Name<input defaultValue="DrTAPhysio" /></label><label>Consultation Modes<input defaultValue="In-clinic, Tele-rehab" /></label><label>Default Currency<input defaultValue="INR" /></label></article><article className="app-panel"><h2>Future Integrations</h2><ul className="app-list"><li>Authentication and roles</li><li>Payments</li><li>Video consultations</li><li>Notifications</li><li>File storage</li><li>Analytics and AI clinical assistance</li></ul></article></section>
    </AppShell>
  );
}
