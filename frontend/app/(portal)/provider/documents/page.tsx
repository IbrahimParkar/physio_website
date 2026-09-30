import { AppShell } from "@/components/layout/AppShell";
import { documents } from "@/data/mock/practice";

export default function DocumentsPage() {
  return (
    <AppShell title="Documents" eyebrow="Uploads and Clinical Files">
      <section className="app-panel"><div className="toolbar"><input placeholder="Search documents..." /><button className="button primary">Upload Document</button></div><div className="compact-list">{documents.map((doc) => <div key={doc.id}><strong>{doc.title}</strong><span>{doc.patient} · {doc.type} · {doc.date}</span><button className="button secondary">View</button></div>)}</div></section>
    </AppShell>
  );
}
