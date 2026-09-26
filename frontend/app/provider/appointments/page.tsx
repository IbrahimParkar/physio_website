import { AppShell, StatusBadge } from "../../components/AppShell";
import { appointments } from "../../data/mock-practice";

export default function AppointmentsPage() {
  return <SimpleTable title="Appointments" eyebrow="Calendar" headers={["Patient", "Type", "Date", "Time", "Status"]} rows={appointments.map((a) => [a.patient, a.type, a.date, a.time, <StatusBadge key={a.id} status={a.status} />])} />;
}

function SimpleTable({ title, eyebrow, headers, rows }: { title: string; eyebrow: string; headers: string[]; rows: React.ReactNode[][] }) {
  return (
    <AppShell title={title} eyebrow={eyebrow}>
      <section className="app-panel">
        <div className="toolbar"><input placeholder={`Search ${title.toLowerCase()}...`} /><button className="button primary">Create</button></div>
        <table className="data-table"><thead><tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table>
      </section>
    </AppShell>
  );
}
