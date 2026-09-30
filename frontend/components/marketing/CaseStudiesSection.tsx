import { caseStudies } from "@/data/marketing/case-studies";


export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section compact-section case-gallery-section">
          <div className="section-heading case-heading"><p className="eyebrow">Case Studies</p><h2>Anonymized rehabilitation journeys, designed around outcomes.</h2></div>
          <div className="case-scroll" aria-label="Case study gallery">
            {caseStudies.map(([condition, context, approach, outcome]) => <article key={condition}><span>Condition</span><h3>{condition}</h3><p>{context}</p><p><strong>Approach:</strong> {approach}</p><p><strong>Outcome:</strong> {outcome}</p></article>)}
          </div>
        </section>
  );
}
