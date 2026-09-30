import HeaderScrollState from "@/components/marketing/HeaderScrollState";
import MarketingHeader from "@/components/marketing/MarketingHeader";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import HeroSection from "@/components/marketing/HeroSection";
import TrustSection from "@/components/marketing/TrustSection";
import AboutSection from "@/components/marketing/AboutSection";
import SpecializationsSection from "@/components/marketing/SpecializationsSection";
import JourneySection from "@/components/marketing/JourneySection";
import CaseStudiesSection from "@/components/marketing/CaseStudiesSection";
import PortalCta from "@/components/marketing/PortalCta";
import BookingSection from "@/components/marketing/BookingSection";
import { specializationGroups } from "@/data/marketing/specializations";

export default function HomePage() {
  return (
    <>
      <HeaderScrollState />
      <MarketingHeader />
      <main id="home">
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <SpecializationsSection groups={specializationGroups} />
        <JourneySection />
        <CaseStudiesSection />
        <PortalCta />
        <BookingSection />
      </main>
      <MarketingFooter />
    </>
  );
}
