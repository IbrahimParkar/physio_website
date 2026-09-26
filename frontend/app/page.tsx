import { Activity, ArrowRight, CalendarCheck, CheckCircle2, ClipboardCheck, ClipboardPlus, Dumbbell, HeartHandshake, House, Laptop, Mail, MapPin, Phone, ScanLine, SlidersHorizontal, Target, TrendingUp, UserRound, UsersRound } from "lucide-react";
import HeaderScrollState from './components/HeaderScrollState';
import ClinicalRehabilitationMarquee from './components/ClinicalRehabilitationMarquee';

const specializationGroups = [
  {
    title: "Clinical Rehabilitation",
    cards: [
      ["Neuro Rehabilitation", "/Cards/Neuro-Rehabilitation.png"],
      ["Orthopaedic Rehabilitation", "/Cards/Orthopaedic-Rehabilitation.png"],
      ["Sports Rehabilitation", "/Cards/Sports-Rehabilitation.png"],
      ["Post-Operative Rehabilitation", "/Cards/Post-Operative-Rehabilitation.png"],
      ["Pain & Functional Rehabilitation", "/Cards/Pain-Functional-Rehabilitation.png"],
      ["Paediatric Rehabilitation", "/Cards/Paediatric-Rehabilitation.png"],
      ["Geriatric Rehabilitation", "/Cards/Geriatric-Rehabilitation.png"],
    ],
  },
  {
    title: "Exercise / Treatment Approaches",
    cards: [
      ["Fitness Training", "/Cards/Fitness-Training.png"],
      ["Manual Therapy", "/Cards/Manual-Therapy.png"],
      ["Kinesiology Taping", "/Cards/Kinesiology-Taping.png"],
      ["Dry Needling", "/Cards/Dry-Needling.png"],
      ["Instrument-Assisted Soft Tissue Manipulation", "/Cards/Instrument-Assisted-Soft-Tissue-Manipulation.png"],
      ["Cupping Therapy", "/Cards/Cupping-Therapy.png"],
      ["Spinal Manipulation", "/Cards/Spinal-Manipulation.png"],
    ],
  },
  {
    title: "Care Delivery",
    cards: [
      ["Home-Based Rehabilitation", "/Cards/Home-Based-Rehabilitation.png"],
      ["Tele-Rehabilitation", "/Cards/Tele-Rehabilitation.png"],
    ],
  },
];

const caseStudies = [
  ["Knee Rehabilitation", "Stair pain and reduced walking tolerance.", "Progressive strengthening, walking tolerance and stair-control work.", "Pain reduced, confidence improved and activity restored."],
  ["Shoulder Recovery", "Night pain and limited overhead movement.", "Mobility restoration, rotator cuff loading and overhead control.", "Better range, less night pain and clearer home plan."],
  ["Spine Rehabilitation", "Recurrent low back pain affecting daily routines.", "Movement education, graded exposure and functional strengthening.", "Improved daily tolerance and reduced flare-up frequency."],
  ["Sports Injury Rehabilitation", "Field-sport ankle sprain with instability.", "Balance retraining, loading progression and return-to-play preparation.", "Improved confidence, control and sport-specific readiness."],
  ["Post-operative Rehabilitation", "Early recovery after knee procedure.", "Swelling control, range restoration and staged strengthening.", "Functional milestones progressed with safer load management."],
  ["Neurological Rehabilitation", "Balance and gait changes after neurological illness.", "Task-specific practice, strength work and home safety training.", "Improved walking confidence and day-to-day independence."],
  ["Balance & Gait Rehabilitation", "Fear of falling during community walking.", "Progressive balance exposure, gait drills and caregiver education.", "Improved steadiness and safer outdoor mobility."],
  ["Chronic Pain Rehabilitation", "Persistent pain with reduced activity confidence.", "Education, pacing, graded movement and strength rebuilding.", "Better self-management and improved functional participation."],
];

const teleStepIcons = [ClipboardCheck, ScanLine, Target, Dumbbell, TrendingUp, SlidersHorizontal, HeartHandshake];
const personalizedStepIcons = [ClipboardCheck, Target, SlidersHorizontal, Dumbbell, TrendingUp, Activity];

const teleSteps = [
  ["01", "Initial Session", "Meet, discuss your concerns and understand your goals."],
  ["02", "Initial Assessment", "Detailed assessment of symptoms, medical history, movement and functional needs."],
  ["03", "Clinical Evaluation", "Assess strength, mobility, function and factors affecting your recovery."],
  ["04", "Rehabilitation Plan", "Set clear goals and design a personalized plan tailored to your routine and home environment."],
  ["05", "Guided Rehabilitation", "Hands-on treatment and exercise guidance delivered at home, usually on a daily basis."],
  ["06", "Progress & Independence", "Track improvements and adjust the plan to help you regain function and confidence."],
  ["07", "Follow-Up", "Ongoing support to maintain progress, prevent setbacks and work toward long-term independence."],
];

export default function Home() {
  return (
    <>
      <HeaderScrollState />
      <header className="site-header glass">
        <a className="brand" href="#home" aria-label="DrTAPhysio home">
          <img className="logo-horizontal" src="/LOGO HORIZONTAL.png" alt="Dr. Talha Parkar Physiotherapy and Rehabilitation" />
          <img className="logo-square" src="/LOGO SQUARE.jpg" alt="" aria-hidden="true" />
        </a>
        <div className="header-links">
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#specializations">Specializations</a>
            <a href="#tele-rehab">Tele-Rehab</a>
            <a href="#case-studies">Case Studies</a>
          </nav>
          <div className="header-actions">
            <a className="button primary patient-cta" href="/patient-login"><span className="medical-plus" aria-hidden="true" /> <span className="patient-cta-label">I am a patient</span></a>
          </div>
        </div>
      </header>

      <main id="home">
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
            <img src="/Professional Photo.png" alt="Dr. Talha Parkar - physiotherapy and rehabilitation specialist" />
          </div>
        </section>

        <section className="trust-section">
          {["BACHELORS OF PHYSICAL THERAPY - B.P.Th\n(MIAP · MHOT-PT)\nCOMT · CDNT · CIASTMT · CKT · CCT · CHT", "4+ YEARS OF CLINICAL PRACTICE", "ORTHO · NEURO · SPORTS · GERIATRIC REHABILITATION", "GOAL-ORIENTED RECOVERY PLANNING"].map((item) => <div key={item}><CheckCircle2 size={18} /><span>{item}</span></div>)}
        </section>

        <section id="about" className="section about-practice">
          <div className="about-intro">
            <p className="eyebrow">ABOUT DRTAPHYSIO</p>
            <h2>Rehabilitation built from clinical experience.</h2>
          </div>
          <div className="about-narrative">
            <article className="about-panel about-panel-featured">
              <p>DrTAPhysio is a physiotherapy and rehabilitation practice shaped by clinical experience across orthopaedic, neurological, geriatric, post-operative and functional rehabilitation. From hospitals and rehabilitation centres to independent home-based practice, this experience has provided exposure to patients with different conditions, functional limitations and recovery needs.</p>
            </article>
            <article className="about-panel">
              <p>Our approach begins with understanding the individual problem, assessing what is limiting movement and function, and then building rehabilitation around a meaningful goal. Treatment may include exercise-based rehabilitation, progressive exercise, patient education, manual therapy where appropriate, and other clinically appropriate rehabilitation techniques.</p>
            </article>
          </div>
          <div className="about-foundation">
            <p>The focus is not simply on providing treatment. It is on creating a clear, structured and goal-oriented path toward meaningful functional progress, with the patient actively involved throughout the process.</p>
            <p>Today, DrTAPhysio provides consultations, home-based rehabilitation and tele-rehabilitation, adapting the delivery of care to the patient's needs, condition and circumstances.</p>
          </div>
          <blockquote className="about-closing">Recovery begins where you feel most comfortable.</blockquote>
        </section>

        <section id="specializations" className="section compact-section specialties-section">
          <div className="specialties-intro">
            <p className="eyebrow">SPECIALIZATIONS</p>
            <h2>Whatever brings you here, explore the specialized rehabilitation approaches designed around your condition, needs and recovery goals.</h2>
            <p>Rehabilitation pathways shaped around different clinical and functional needs.</p>
          </div>
          <div className="specialty-groups">
            {specializationGroups.map((group, groupIndex) => (
              <div className={`specialty-group specialty-group-${groupIndex + 1}`} key={group.title}>
                <div className="specialty-group-heading"><p>{group.title}</p><span>{String(groupIndex + 1).padStart(2, '0')}</span></div>
                {groupIndex <= 1 ? (
                  <ClinicalRehabilitationMarquee cards={group.cards} />
                ) : (
                  <div className="specialty-card-grid">
                    {group.cards.map(([title, image], index) => (
                      <article className="specialty-image-card" key={title}>
                        <img src={image} alt="" loading="lazy" />
                        <div className="specialty-image-card-content">
                          <span>{String(index + 1).padStart(2, '0')}</span>
                          <h3>{title}</h3>
                          <a href="#request-assessment">Explore <ArrowRight size={16} /></a>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

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
              <figure className="journey-image"><img src="/Cards/Home-Based-Rehabilitation.png" alt="Home-based physiotherapy rehabilitation" loading="lazy" /><blockquote className="journey-image-quote">“Rehabilitation<br />that fits into your<br />life, at home.”</blockquote></figure>
            </div>
            <div className="journey-steps journey-steps-seven" aria-label="Home-based rehabilitation process">
              {teleSteps.map(([number, title, text], index) => { const Icon = teleStepIcons[index]; return <article key={title}><div className="journey-step-marker"><span>{number}</span><Icon size={18} /></div><h4>{title}</h4><p>{text}</p></article>; })}
            </div>
          </article>
          <article className="journey-path journey-path-personalized">
            <div className="journey-feature journey-feature-personalized">
              <figure className="journey-image"><img src="/Cards/Home-Based-Rehabilitation.png" alt="Personalized rehabilitation guidance" loading="lazy" /></figure>
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
        <section id="case-studies" className="section compact-section case-gallery-section">
          <div className="section-heading case-heading"><p className="eyebrow">Case Studies</p><h2>Anonymized rehabilitation journeys, designed around outcomes.</h2></div>
          <div className="case-scroll" aria-label="Case study gallery">
            {caseStudies.map(([condition, context, approach, outcome]) => <article key={condition}><span>Condition</span><h3>{condition}</h3><p>{context}</p><p><strong>Approach:</strong> {approach}</p><p><strong>Outcome:</strong> {outcome}</p></article>)}
          </div>
        </section>

        <section className="portal-cta">
          <div><p className="eyebrow">Patient Portal</p><h2>Your rehabilitation does not end when the session ends.</h2><p>View your treatment plan, prescribed exercises, appointments, documents and recovery journey from one calm portal.</p></div>
          <a className="button primary large" href="/patient-login"><UserRound size={20} /> Patient Login</a>
        </section>

        <section id="book" className="booking-split compact-section">
          <article id="request-assessment"><p className="eyebrow">New Patients</p><h2>Request an Assessment</h2><form><label>Full Name<input placeholder="Enter your full name" /></label><label>Mobile / WhatsApp<input placeholder="+91 98200 12345" /></label><label>Primary Concern<textarea placeholder="Briefly describe your symptoms or goal" /></label><button className="button primary" type="button">Submit Request</button></form></article>
          <article><p className="eyebrow">Existing Patients</p><h2>Book a Follow-up</h2><p>Log in to review your plan, see prescribed exercises and schedule the next session.</p><a className="button secondary" href="/patient-login">Patient Login then Book Follow-up</a></article>
        </section>
      </main>

      <footer id="contact" className="site-footer minimal">
        <div><img className="logo-horizontal footer-logo" src="/LOGO HORIZONTAL.png" alt="DrTAPhysio" /><p>B.P.T., M.P.T. Sports Physiotherapy | Reg. No: MSPT/2018/88492</p></div>
        <div className="footer-grid"><a href="#specializations">Services</a><a href="/patient-login">Patient Portal</a><a href="/provider">Provider Portal</a><a href="#">Privacy</a><a href="#">Terms</a><p><MapPin size={17} /> Fort, Mumbai</p><p><Phone size={17} /> +91 98200 12345</p><p><Mail size={17} /> contact@drtalphaparkar.com</p></div>
      </footer>
    </>
  );
}
