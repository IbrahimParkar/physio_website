"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

type ClinicalCard = readonly string[];

type ClinicalRehabilitationMarqueeProps = {
  cards: readonly ClinicalCard[];
};

export default function ClinicalRehabilitationMarquee({ cards }: ClinicalRehabilitationMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTravelDistance = () => {
      const track = trackRef.current;
      const sequence = sequenceRef.current;
      if (!track || !sequence) return;

      const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 0;
      track.style.setProperty("--clinical-marquee-travel", `${-(sequence.getBoundingClientRect().width + gap)}px`);
    };

    updateTravelDistance();
    const observer = new ResizeObserver(updateTravelDistance);
    if (sequenceRef.current) observer.observe(sequenceRef.current);
    window.addEventListener("resize", updateTravelDistance);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateTravelDistance);
    };
  }, []);

  const renderSequence = (isClone: boolean) => (
    <div className="clinical-marquee-set" aria-hidden={isClone || undefined} ref={isClone ? undefined : sequenceRef}>
      {cards.map(([title = "", image = ""], index) => (
        <article className="specialty-image-card" key={`${isClone ? "clone-" : ""}${title}`}>
          <img src={image} alt="" loading={isClone ? "eager" : "lazy"} />
          <div className="specialty-image-card-content">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <a href="#request-assessment" tabIndex={isClone ? -1 : undefined}>Explore <ArrowRight size={16} /></a>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <div className="clinical-marquee-viewport">
      <div className="clinical-marquee-track" ref={trackRef}>
        {renderSequence(false)}
        {renderSequence(true)}
      </div>
    </div>
  );
}