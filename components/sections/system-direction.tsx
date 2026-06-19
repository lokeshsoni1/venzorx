"use client";

import React from 'react';
import SectionTwoWaveBackground from '@/components/ui/section-two-wave-background';

export default function SystemDirection() {
  return (
    <section className="w-full relative py-36 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#030712]">
      {/* Dynamic Wave Shader Background */}
      <SectionTwoWaveBackground />

      {/* Oil-Pastel Seamless Blend Overlay */}
      <div className="bg-gradient-to-b from-transparent via-[#030712]/70 to-[#030712] absolute top-0 left-0 w-full h-[220px] pointer-events-none z-20 backdrop-blur-[1px]" />

      {/* Typographic Text Stack Layer */}
      <div className="relative z-30 flex flex-col items-center justify-center max-w-5xl mx-auto w-full text-center">
        {/* Section Marker */}
        <span className="font-mono tracking-[0.45em] text-cyan-400 text-xs uppercase mb-6 block select-none">
          02 // SYSTEM DIRECTION
        </span>

        {/* Enterprise Heading */}
        <h2 className="font-sans font-extrabold tracking-tighter text-4xl md:text-7xl text-white mb-8 max-w-5xl leading-tight">
          WE BUILD HIGH-TECH ENGINEERING SYSTEMS.
        </h2>

        {/* The Ruthless Competitor Copy Hook */}
        <p className="max-w-4xl text-zinc-300 text-base md:text-xl font-medium leading-relaxed">
          When you deploy digital architecture engineered by VenzorX, you completely eliminate the concept of competition from your operating model. Our bespoke, visually arresting, and ruthlessly conversion-optimized systems position your enterprise lightyears ahead of the market baseline.
        </p>
      </div>
    </section>
  );
}
