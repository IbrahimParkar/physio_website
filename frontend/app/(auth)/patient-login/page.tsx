import { LockKeyhole } from "lucide-react";
import Link from "next/link";

export default function PatientLoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <Link className="brand" href="/">
          <img className="logo-horizontal" src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/brand/logo-horizontal.png`} alt="Dr. Talha Parkar Physiotherapy and Rehabilitation" />
        </Link>
        <div className="auth-icon"><LockKeyhole size={26} /></div>
        <h1>Patient<br />portal<br />access</h1>
        <p>This login area is ready for future authentication, patient records, exercise plans, and progress tracking.</p>
        <form>
          <label>Email or mobile number<input placeholder="name@example.com" /></label>
          <label>Password<input placeholder="Password" type="password" /></label>
          <Link className="button primary" href="/patient">Continue</Link>
        </form>
        <Link className="back-link" href="/">Back to website</Link>
      </section>
    </main>
  );
}


