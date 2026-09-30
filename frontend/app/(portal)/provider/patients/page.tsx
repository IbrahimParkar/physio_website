import { AppShell, ProgressBar, StatusBadge } from "@/components/layout/AppShell";
import { patients } from "@/data/mock/practice";

export default function PatientsPage() {
  return (
    <AppShell title="Patients" eyebrow="Patient Management">
      <section className="app-panel">
        <div className="toolbar">
          <input aria-label="Search patients" placeholder="Search by name, phone, city, status..." />
          <select aria-label="Filter patients">
            <option>All Patients</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button className="button primary">Add Patient</button>
        </div>
        <table className="data-table">
          <thead>
            <tr><th>Patient</th><th>Contact</th><th>Status</th><th>Adherence</th><th>Last Visit</th><th></th></tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td><strong>{patient.name}</strong><span>{patient.age} yrs · {patient.city}</span></td>
                <td>{patient.phone}<span>{patient.email}</span></td>
                <td><StatusBadge status={patient.status} /></td>
                <td><ProgressBar value={patient.adherence} /><span>{patient.adherence}%</span></td>
                <td>{patient.lastVisit}</td>
                <td><a href={`/provider/patients/${patient.id}`}>Open profile</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppShell>
  );
}
