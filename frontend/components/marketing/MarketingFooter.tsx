import { Mail, MapPin, Phone } from "lucide-react";

export default function MarketingFooter() {
  return (
    <footer id="contact" className="site-footer minimal">
      <div><img className="logo-horizontal footer-logo" src="/assets/brand/logo-horizontal.png" alt="DrTAPhysio" /><p>B.P.T., M.P.T. Sports Physiotherapy | Reg. No: MSPT/2018/88492</p></div>
      <div className="footer-grid"><a href="#specializations">Services</a><a href="/patient-login">Patient Portal</a><a href="/provider">Provider Portal</a><a href="#">Privacy</a><a href="#">Terms</a><p><MapPin size={17} /> Fort, Mumbai</p><p><Phone size={17} /> +91 98200 12345</p><p><Mail size={17} /> contact@drtalphaparkar.com</p></div>
    </footer>
  );
}
