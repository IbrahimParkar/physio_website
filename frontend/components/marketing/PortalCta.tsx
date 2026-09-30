import { UserRound } from "lucide-react";


export default function PortalCta() {
  return (
    <section className="portal-cta">
          <div><p className="eyebrow">Patient Portal</p><h2>Your rehabilitation does not end when the session ends.</h2><p>View your treatment plan, prescribed exercises, appointments, documents and recovery journey from one calm portal.</p></div>
          <a className="button primary large" href="/patient-login"><UserRound size={20} /> Patient Login</a>
        </section>
  );
}
