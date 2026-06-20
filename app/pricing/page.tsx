"use client";

import React from "react";
import { ShieldCheck, Target, Terminal, Cpu, MessageSquareText } from "lucide-react";
import { SinglePricingCard } from "@/components/ui/single-pricing-card";
import dynamic from "next/dynamic";

const GlobalSystemShaderBackdrop = dynamic(
  () => import("@/components/ui/global-system-shader-backdrop").then((mod) => mod.GlobalSystemShaderBackdrop),
  { ssr: false }
);

export default function StandalonePricingPage() {
  const customTechnicalFeatures = [
    "Custom Decoupled Architecture Blueprinting",
    "Bespoke High-Velocity React/TypeScript Frontends",
    "DBMS Configuration Tuning & Optimization",
    "Sub-100ms Edge Server Latency Guarantees",
    "SOC2-Ready Isolated Security Encryption Layers",
    "Multi-Node Fault Tolerance System Protocols",
    "Headless CMS Framework Core Integrations",
    "Distributed Global Edge CDN Deployment Operations",
    "Cognitive Behavioral Traffic Conversion Analysis",
    "Full Enterprise Root-Access Repository Delivery"
  ].map((text) => ({ text }));

  const highTicketTestimonials = [
    {
      id: 1,
      name: "Alex Vance",
      role: "Chief Technology Officer",
      company: "NeuroPulse Systems",
      content: "Bypassing generic templates saved us months of dev debt. VenzorX's custom data architecture delivers sub-100ms latency across our complete production network.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sienna Kael",
      role: "Founder & Creative Executive",
      company: "MonoForm Lounge",
      content: "Our conversion metrics jumped straight to the ceiling. The dynamic spotlight interaction modules completely eliminated our platform's layout friction.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    <main className="w-full min-h-screen relative py-28 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#030712] antialiased select-none">
      {/* Background Lighting System */}
      <div className="absolute bg-cyan-500/5 blur-[160px] h-[600px] w-[600px] pointer-events-none top-1/4 z-0" />

      {/* Global Shader Backdrop Canvas */}
      <GlobalSystemShaderBackdrop />

      {/* Corporate High-Contrast Top Typographic Stack */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-14 flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-black text-white text-center tracking-normal leading-none mb-6 uppercase font-sans">
          ENTERPRISE INFRASTRUCTURE.
        </h1>
        <p className="text-base md:text-xl font-mono text-cyan-400 text-center tracking-widest uppercase">
          Zero Shorthand Subscriptions. Bespoke Production Systems Only.
        </p>
      </div>

      <SinglePricingCard
        badge={{ icon: ShieldCheck, text: "Bespoke System Infrastructure Package" }}
        title="Custom Enterprise Tier"
        subtitle="Complete technical execution architecture engineered specifically to wipe out your bottlenecks, eliminate tech-debt, and achieve ruthless conversion optimization."
        price={{ current: "Bespoke Valuation", subtext: "Engineered on structural scope parameters" }}
        benefits={[
          { text: "Bespoke engineering layout mapping", icon: Target },
          { text: "Dedicated core system code ownership", icon: Terminal },
          { text: "End-to-end multi-layer data protection", icon: Cpu }
        ]}
        features={customTechnicalFeatures}
        featuresIcon={ShieldCheck}
        featuresTitle="ENGINEERING SPECS VALIDATION MATRIX"
        primaryButton={{
          text: "Book an Architecture Briefing Call",
          icon: MessageSquareText,
          href: "https://calendly.com/venzorx-co/30min"
        }}
        testimonials={highTicketTestimonials}
        className="bg-zinc-950/50 backdrop-blur-3xl transform-gpu backface-hidden will-change-transform translate-z-0 preserve-3d"
      />
    </main>
  );
}
