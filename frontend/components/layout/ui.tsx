export function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return <article className="stat-card"><span>{label}</span><strong>{value}</strong><small>{detail}</small></article>;
}

export function StatusBadge({ status }: { status: string }) {
  return <span className={`app-badge ${status.toLowerCase().replaceAll(" ", "-")}`}>{status}</span>;
}

export function ProgressBar({ value }: { value: number }) {
  return <div className="progress-track" aria-label={`Progress ${value}%`}><span style={{ width: `${value}%` }} /></div>;
}
