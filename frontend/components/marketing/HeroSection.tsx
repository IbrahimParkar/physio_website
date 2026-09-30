import { CalendarCheck, ClipboardPlus } from "lucide-react";


export default function HeroSection() {
  return (
    <section className="premium-hero">
          <div className="hero-editorial">
            <p className="eyebrow">CONSULTATIONS · HOME BASED RECOVERY · DIGITAL REHAB · ACTIVE AGING</p>
            <h1>Recovery Begins Where You’re Most Comfortable.</h1>
            <div className="hero-copy"><p className="hero-copy-lead">Your goals set the direction. Your active involvement helps turn the plan into progress.</p><p className="hero-copy-support">We combine evidence-informed, goal-oriented rehabilitation with practical, structured programs designed to make each step clear, achievable and focused on meaningful results.</p></div>
            <div className="hero-actions">
              <a className="button primary large" href="#request-assessment"><ClipboardPlus size={20} /> Request an Assessment</a>
              <a className="button secondary large" href="#book"><CalendarCheck size={20} /> Book a Consultation</a>
            </div>
          </div>
          <div className="hero-composition">
            <img src="/assets/photos/professional-photo.png" alt="Dr. Talha Parkar - physiotherapy and rehabilitation specialist" />
          </div>
        </section>
  );
}
