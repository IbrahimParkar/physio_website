

export default function BookingSection() {
  return (
    <section id="book" className="booking-split compact-section">
          <article id="request-assessment"><p className="eyebrow">New Patients</p><h2>Request an Assessment</h2><form><label>Full Name<input placeholder="Enter your full name" /></label><label>Mobile / WhatsApp<input placeholder="+91 98200 12345" /></label><label>Primary Concern<textarea placeholder="Briefly describe your symptoms or goal" /></label><button className="button primary" type="button">Submit Request</button></form></article>
          <article><p className="eyebrow">Existing Patients</p><h2>Book a Follow-up</h2><p>Log in to review your plan, see prescribed exercises and schedule the next session.</p><a className="button secondary" href="/patient-login">Patient Login then Book Follow-up</a></article>
        </section>
  );
}
