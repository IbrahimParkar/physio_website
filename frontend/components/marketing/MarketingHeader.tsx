export default function MarketingHeader() {
  return (
    <header className="site-header glass">
      <a className="brand" href="#home" aria-label="DrTAPhysio home">
        <img className="logo-horizontal" src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/brand/logo-horizontal.png`} alt="Dr. Talha Parkar Physiotherapy and Rehabilitation" />
        <img className="logo-square" src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/brand/logo-square.jpg`} alt="" aria-hidden="true" />
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
  );
}
