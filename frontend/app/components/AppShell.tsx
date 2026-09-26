import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Activity, Bell, CalendarDays, ClipboardList, CreditCard, FileText, Home, Library, LineChart, MessageSquare, NotebookTabs, Settings, UserRoundPlus, UsersRound, Video } from "lucide-react";

type NavItem = [label: string, href: string, Icon: LucideIcon];

const providerNav: NavItem[] = [
  ["Today", "/provider", Home],
  ["Patients", "/provider/patients", UsersRound],
  ["Cases", "/provider/cases", ClipboardList],
  ["New Case", "/provider/cases/new", UserRoundPlus],
  ["Appointments", "/provider/appointments", CalendarDays],
  ["Sessions", "/provider/sessions", Video],
  ["Assessments", "/provider/assessments", NotebookTabs],
  ["Exercise Library", "/provider/exercises", Library],
  ["Programs", "/provider/programs", Activity],
  ["Progress", "/provider/progress", LineChart],
  ["Reports", "/provider/reports", FileText],
  ["Billing", "/provider/billing", CreditCard],
  ["Documents", "/provider/documents", FileText],
  ["Messages", "/provider/messages", MessageSquare],
  ["Settings", "/provider/settings", Settings],
];

const patientNav: NavItem[] = [
  ["Home", "/patient", Home],
  ["My Recovery", "/patient/current-case", ClipboardList],
  ["Exercises", "/patient/exercises", Activity],
  ["Appointments", "/patient/appointments", CalendarDays],
  ["Progress", "/patient/progress", LineChart],
  ["Messages", "/patient/messages", Bell],
  ["Documents", "/patient/documents", FileText],
  ["Profile", "/patient/profile", Settings],
];

export function AppShell({ children, title, eyebrow, mode = "provider" }: { children: React.ReactNode; title: string; eyebrow: string; mode?: "provider" | "patient" }) {
  const nav = mode === "provider" ? providerNav : patientNav;
  const isPatient = mode === "patient";

  return (
    <div className={`app-shell ${isPatient ? "patient-experience" : "provider-experience"}`}>
      <aside className="app-sidebar">
        <Link className="app-brand" href="/">
          <img src="/LOGO SQUARE.jpg" alt="" />
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

export function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return <article className="stat-card"><span>{label}</span><strong>{value}</strong><small>{detail}</small></article>;
}

export function StatusBadge({ status }: { status: string }) {
  return <span className={`app-badge ${status.toLowerCase().replaceAll(" ", "-")}`}>{status}</span>;
}

export function ProgressBar({ value }: { value: number }) {
  return <div className="progress-track" aria-label={`Progress ${value}%`}><span style={{ width: `${value}%` }} /></div>;
}


