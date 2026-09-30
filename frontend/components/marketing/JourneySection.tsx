import { Activity, ClipboardCheck, Dumbbell, HeartHandshake, House, ScanLine, SlidersHorizontal, Target, TrendingUp, UserRound } from "lucide-react";
import { teleSteps } from "@/data/marketing/journey";

const teleStepIcons = [ClipboardCheck, ScanLine, Target, Dumbbell, TrendingUp, SlidersHorizontal, HeartHandshake];
const personalizedStepIcons = [ClipboardCheck, Target, SlidersHorizontal, Dumbbell, TrendingUp, Activity];


export default function JourneySection() {
  return (
    <section id="tele-rehab" className="section journey-section">
          <header className="journey-heading">
            <p className="eyebrow">PATIENT&apos;S JOURNEY</p>
            <h2>Your Journey to Recovery</h2>
            <p>Structured. Personalized. Supported at every step.</p>
            <blockquote className="journey-heading-quote">“Same care.<br />Different ways.<br />A healthier you.”</blockquote>
          </header>

          <article className="journey-path journey-path-tele">
            <div className="journey-feature journey-feature-tele">
              <div className="journey-copy">
                <p className="eyebrow">HOME-BASED REHABILITATION</p>
                <h3>Expert care,<br />right where you are.</h3>
                <p>Personalized physiotherapy at home, with a structured plan,<br className="desktop-break" /> daily guidance and ongoing support toward meaningful<br className="desktop-break" /> recovery.</p>
                <div className="journey-benefits" aria-label="Home-based rehabilitation benefits">
                  <span><House size={18} /><small>Convenient<br />and comfortable</small></span>
                  <span><UserRound size={18} /><small>One-to-one<br />attention</small></span>
                  <span><HeartHandshake size={18} /><small>Real-life,<br />functional progress</small></span>
                </div>
              </div>
              <figure className="journey-image"><img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/cards/home-based-rehabilitation.png`} alt="Home-based physiotherapy rehabilitation" loading="lazy" /><blockquote className="journey-image-quote">“Rehabilitation<br />that fits into your<br />life, at home.”</blockquote></figure>
            </div>
            <div className="journey-steps journey-steps-seven" aria-label="Home-based rehabilitation process">
              {teleSteps.map(([number, title, text], index) => { const Icon = teleStepIcons[index]; return <article key={title}><div className="journey-step-marker"><span>{number}</span><Icon size={18} /></div><h4>{title}</h4><p>{text}</p></article>; })}
            </div>
          </article>
          <article className="journey-path journey-path-personalized">
            <div className="journey-feature journey-feature-personalized">
              <figure className="journey-image"><img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/cards/home-based-rehabilitation.png`} alt="Personalized rehabilitation guidance" loading="lazy" /></figure>
              <div className="journey-copy">
                <p className="eyebrow">PERSONALIZED REHABILITATION</p>
                <h3>Your plan adapts as your function improves.</h3>
                <p>Assessment becomes individualized goals, guided exercise, progress monitoring, plan adjustment and functional improvement.</p>
                <div className="journey-benefits" aria-label="Personalized rehabilitation principles">
                  <span><ClipboardCheck size={18} /> Assessment-led</span>
                  <span><HeartHandshake size={18} /> Individualized goals</span>
                  <span><TrendingUp size={18} /> Progress-focused</span>
                </div>
              </div>
            </div>
            <div className="journey-steps journey-steps-six" aria-label="Personalized rehabilitation process">
              {["Assessment", "Individualized Goals", "Personalized Plan", "Guided Exercises", "Progress Monitoring", "Functional Improvement"].map((step, index) => { const Icon = personalizedStepIcons[index]; return <article key={step}><div className="journey-step-marker"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={18} /></div><h4>{step}</h4></article>; })}
            </div>
          </article>
        </section>
  );
}
