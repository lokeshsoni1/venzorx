"use client";

import React from 'react';
import SectionTwoWaveBackground from '@/components/ui/section-two-wave-background';

export default function SystemDirection() {
  return (
    <section className="w-full relative py-40 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#030712] antialiased tracking-tight">
      {/* Dynamic Wave Shader Background */}
      <SectionTwoWaveBackground />

      {/* High-Fidelity Oil-Pastel Visual Blend Smudge */}
      <div className="bg-gradient-to-b from-[#030712] via-[#030712]/80 to-transparent absolute top-0 left-0 w-full h-[240px] pointer-events-none z-20 backdrop-blur-[2px]" />

      {/* Typographic Text Stack Layer */}
      <div className="relative z-30 flex flex-col items-center justify-center max-w-6xl mx-auto w-full text-center">
        {/* Section ID Marker */}
        <span className="font-mono tracking-[0.5em] text-cyan-400 text-xs uppercase mb-6 block select-none">
          02 // SYSTEM DIRECTION
        </span>

        {/* Metallic Enterprise Heading */}
        <h2 className="font-sans font-black tracking-tighter text-5xl md:text-8xl text-white mb-10 max-w-6xl leading-none drop-shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
          WE BUILD HIGH-TECH ENGINEERING SYSTEMS.
        </h2>

        {/* The Glassmorphic Text Sheet Layout */}
        <div className="max-w-4xl w-full mx-auto bg-zinc-950/30 backdrop-blur-xl border border-white/5 p-10 md:p-14 rounded-3xl text-center relative z-30 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          <p className="text-zinc-200 text-lg md:text-2xl font-normal leading-relaxed">
            When you deploy digital architecture engineered by VenzorX, you completely eliminate the concept of competition from your operating model. Our bespoke, visually arresting, and ruthlessly conversion-optimized systems position your enterprise lightyears ahead of the market baseline.
          </p>
        </div>
      </div>
    </section>
  );
}
