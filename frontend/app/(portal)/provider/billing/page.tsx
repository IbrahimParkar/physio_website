import { AppShell, StatusBadge } from "@/components/layout/AppShell";

export default function BillingPage() {
  const rows = [["INV-1041", "Aarav Sharma", "Tele-Rehab Package", "₹4,500", "Paid"], ["INV-1042", "Meera Iyer", "Reassessment", "₹1,200", "Pending"], ["INV-1038", "Kabir Khan", "Follow-up", "₹900", "Paid"]];
  return (
    <AppShell title="Billing / Payments" eyebrow="Practice Revenue">
      <section className="app-panel"><div className="toolbar"><input placeholder="Search invoices..." /><button className="button primary">Create Invoice</button></div><table className="data-table"><thead><tr><th>Invoice</th><th>Patient</th><th>Service</th><th>Amount</th><th>Status</th></tr></thead><tbody>{rows.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td><StatusBadge status={r[4]} /></td></tr>)}</tbody></table></section>
    </AppShell>
  );
}
