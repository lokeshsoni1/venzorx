"use client";

import CloudinarySystemBackground from "@/components/ui/cloudinary-background";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { GlowCard } from "@/components/ui/spotlight-card";

export default function SystemDirection() {
  return (
    <section className="bg-transparent relative w-full overflow-hidden py-44 px-6 md:px-12 flex flex-col items-center justify-center antialiased tracking-tight">
      {/* Cloudinary System Background Video Layer */}
      <CloudinarySystemBackground />

      {/* Typographic Text Stack Layer */}
      <div className="relative z-30 flex flex-col items-center justify-center max-w-6xl mx-auto w-full text-center">
        {/* Primary Enterprise Heading Word-Gap Repair */}
        <TextRevealByWord text="WE BUILD HIGH-TECH ENGINEERING SYSTEMS" />

        {/* Forced Glassmorphism Visibility Sheet */}
        <GlowCard 
          glowColor="blue"
          customSize={true}
          className="max-w-4xl w-full mx-auto bg-[#121316]/85 backdrop-blur-3xl border border-zinc-800/50 p-12 md:p-16 rounded-3xl text-center relative z-30 shadow-[0_30px_70px_rgba(0,0,0,0.95)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu hover:scale-[1.035] hover:shadow-[0_25px_50px_rgba(6,182,212,0.12)]"
        >
          <p className="text-zinc-100 text-lg md:text-2xl font-normal leading-relaxed">
            When you deploy digital architecture engineered by VenzorX, you completely eliminate the concept of competition from your operating model. Our bespoke, visually arresting, and ruthlessly conversion-optimized systems position your enterprise lightyears ahead of the market baseline.
          </p>
        </GlowCard>
      </div>
    </section>
  );
}
