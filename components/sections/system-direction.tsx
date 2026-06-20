"use client";

import CloudinarySystemBackground from "@/components/ui/cloudinary-background";

export default function SystemDirection() {
  return (
    <section className="w-full relative py-44 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#030712] antialiased tracking-tight">
      {/* Cloudinary System Background Video Layer */}
      <CloudinarySystemBackground />

      {/* Seamless Inter-Section Pastel Blend Mask */}
      <div className="bg-gradient-to-b from-[#030712] via-[#030712]/90 to-transparent absolute top-0 left-0 w-full h-[260px] pointer-events-none z-20 backdrop-blur-[1px]" />

      {/* Typographic Text Stack Layer */}
      <div className="relative z-30 flex flex-col items-center justify-center max-w-6xl mx-auto w-full text-center">
        {/* Primary Enterprise Heading Word-Gap Repair */}
        <h2 className="text-5xl md:text-8xl font-black text-white text-center mb-14 max-w-6xl relative z-30 tracking-normal mx-auto leading-tight uppercase select-none">
          WE BUILD HIGH-TECH ENGINEERING SYSTEMS.
        </h2>

        {/* Forced Glassmorphism Visibility Sheet */}
        <div className="max-w-4xl w-full mx-auto bg-[#121316]/85 backdrop-blur-3xl border border-zinc-800/50 p-12 md:p-16 rounded-3xl text-center relative z-30 shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
          <p className="text-zinc-100 text-lg md:text-2xl font-normal leading-relaxed">
            When you deploy digital architecture engineered by VenzorX, you completely eliminate the concept of competition from your operating model. Our bespoke, visually arresting, and ruthlessly conversion-optimized systems position your enterprise lightyears ahead of the market baseline.
          </p>
        </div>
      </div>
    </section>
  );
}
