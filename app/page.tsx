import HeroSection from "@/components/sections/hero-section";
import SystemDirection from "@/components/sections/system-direction";
import WhyChooseUs from "@/components/sections/why-choose-us";
import CoreEngineeringPillars from "@/components/sections/core-engineering-pillars";
import EngineeringMethodology from "@/components/sections/engineering-methodology";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SystemDirection />
      <WhyChooseUs />
      <CoreEngineeringPillars />
      <EngineeringMethodology />
    </main>
  );
}
