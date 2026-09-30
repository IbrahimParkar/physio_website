import { ArrowRight } from "lucide-react";
import ClinicalRehabilitationMarquee from "@/components/marketing/ClinicalRehabilitationMarquee";

type SpecializationGroup = readonly { title: string; cards: readonly (readonly [string, string])[] }[];

export default function SpecializationsSection({ groups }: { groups: SpecializationGroup }) {
  return (
    <section id="specializations" className="section compact-section specialties-section">
      <div className="specialties-intro">
        <p className="eyebrow">SPECIALIZATIONS</p>
        <h2>Whatever brings you here, explore the specialized rehabilitation approaches designed around your condition, needs and recovery goals.</h2>
        <p>Rehabilitation pathways shaped around different clinical and functional needs.</p>
      </div>
      <div className="specialty-groups">
        {groups.map((group, groupIndex) => (
          <div className={`specialty-group specialty-group-${groupIndex + 1}`} key={group.title}>
            <div className="specialty-group-heading"><p>{group.title}</p><span>{String(groupIndex + 1).padStart(2, '0')}</span></div>
            {groupIndex <= 1 ? <ClinicalRehabilitationMarquee cards={group.cards} /> : <div className="specialty-card-grid">
              {group.cards.map(([title, image], index) => <article className="specialty-image-card" key={title}>
                <img src={image} alt="" loading="lazy" />
                <div className="specialty-image-card-content"><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><a href="#request-assessment">Explore <ArrowRight size={16} /></a></div>
              </article>)}
            </div>}
          </div>
        ))}
      </div>
    </section>
  );
}
