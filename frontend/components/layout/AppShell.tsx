import Link from "next/link";
import { patientNav, providerNav } from "./navigation";

export { ProgressBar, StatCard, StatusBadge } from "./ui";

export function AppShell({ children, title, eyebrow, mode = "provider" }: { children: React.ReactNode; title: string; eyebrow: string; mode?: "provider" | "patient" }) {
  const nav = mode === "provider" ? providerNav : patientNav;
  const isPatient = mode === "patient";

  return (
    <div className={`app-shell ${isPatient ? "patient-experience" : "provider-experience"}`}>
      <aside className="app-sidebar">
        <Link className="app-brand" href="/">
          <img src="/assets/brand/logo-square.jpg" alt="" />
          <span><strong>DrTAPhysio</strong><small>{isPatient ? "Recovery Portal" : "Clinical Workspace"}</small></span>
        </Link>
        <nav aria-label={`${mode} navigation`}>{nav.map(([label, href, Icon]) => <Link key={href} href={href}><Icon size={18} />{label}</Link>)}</nav>
      </aside>
      <div className="app-main">
        <header className="app-topbar">
          <div><p className="app-eyebrow">{eyebrow}</p><h1>{title}</h1>{isPatient ? <p>Simple guidance for today, your next session and your recovery journey.</p> : <p>Here's what needs your attention today.</p>}</div>
          <div className="app-top-actions"><Link className="button secondary" href="/">Public Site</Link><Link className="button primary" href={isPatient ? "/patient/exercises" : "/provider/cases/new"}>{isPatient ? "Start Today's Rehab" : "Create Case"}</Link></div>
        </header>
        {children}
      </div>
      {isPatient ? <nav className="patient-bottom-nav" aria-label="Patient quick navigation">{patientNav.slice(0, 5).map(([label, href, Icon]) => <Link key={href} href={href}><Icon size={18} /><span>{label}</span></Link>)}</nav> : null}
    </div>
  );
}
