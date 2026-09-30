import { CheckCircle2 } from "lucide-react";


export default function TrustSection() {
  return (
    <section className="trust-section">
          {["BACHELORS OF PHYSICAL THERAPY - B.P.Th\n(MIAP · MHOT-PT)\nCOMT · CDNT · CIASTMT · CKT · CCT · CHT", "4+ YEARS OF CLINICAL PRACTICE", "ORTHO · NEURO · SPORTS · GERIATRIC REHABILITATION", "GOAL-ORIENTED RECOVERY PLANNING"].map((item) => <div key={item}><CheckCircle2 size={18} /><span>{item}</span></div>)}
        </section>
  );
}
