"use client";

import React from 'react';
import { Search, GitBranch, Terminal, Rocket } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';

export default function EngineeringMethodology() {
  return (
    <section className="w-full relative pt-32 pb-16 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-transparent antialiased">
      {/* Radial Mesh Shader Glow */}
      <div className="absolute bg-cyan-500/5 blur-[150px] h-[600px] w-[600px] pointer-events-none top-0" />

      {/* Intro Header */}
      <div className="relative z-30 flex flex-col items-center justify-center max-w-5xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-7xl font-black text-white text-center tracking-tight leading-none mb-6 font-sans uppercase">
          THE PRODUCTION PIPELINE CORE.
        </h2>
        <p className="text-base md:text-xl font-medium tracking-wide text-zinc-400 text-center max-w-3xl leading-relaxed">
          De-risked execution. Precision engineering from architecture layout blueprints to active market deployment.
        </p>
      </div>

      {/* 4-Stage Interactive Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mx-auto mt-20 relative z-30">
        
        {/* Stage 01 */}
        <GlowCard glowColor="blue" customSize={true} className="w-full min-h-[380px] bg-zinc-900/50 backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-between text-left rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col justify-start h-full">
            <div className="flex items-center justify-between w-full mb-6">
              <Search className="text-cyan-400 h-6 w-6" />
              <span className="font-mono text-xs text-cyan-400/50 uppercase tracking-widest">PHASE_01</span>
            </div>
            <h3 className="text-xl font-black text-white mb-3 tracking-tight uppercase font-sans select-none">
              Deep Discovery Matrix
            </h3>
            <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
              We ruthlessly audit your current system inefficiencies, evaluate your market competitor operating structures, and map out a bulletproof technical execution layout designed to convert.
            </p>
          </div>
        </GlowCard>

        {/* Stage 02 */}
        <GlowCard glowColor="blue" customSize={true} className="w-full min-h-[380px] bg-zinc-900/50 backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-between text-left rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col justify-start h-full">
            <div className="flex items-center justify-between w-full mb-6">
              <GitBranch className="text-cyan-400 h-6 w-6" />
              <span className="font-mono text-xs text-cyan-400/50 uppercase tracking-widest">PHASE_02</span>
            </div>
            <h3 className="text-xl font-black text-white mb-3 tracking-tight uppercase font-sans select-none">
              Structural Blueprints
            </h3>
            <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
              Before writing a single line of production code, we engineer detailed schematic wireframes, database interaction maps, and system design files to ensure absolute project predictability.
            </p>
          </div>
        </GlowCard>

        {/* Stage 03 */}
        <GlowCard glowColor="blue" customSize={true} className="w-full min-h-[380px] bg-zinc-900/50 backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-between text-left rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col justify-start h-full">
            <div className="flex items-center justify-between w-full mb-6">
              <Terminal className="text-cyan-400 h-6 w-6" />
              <span className="font-mono text-xs text-cyan-400/50 uppercase tracking-widest">PHASE_03</span>
            </div>
            <h3 className="text-xl font-black text-white mb-3 tracking-tight uppercase font-sans select-none">
              High-Velocity Sprints
            </h3>
            <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
              Our engineers compile clean, premium TypeScript codebase layers in accelerated intervals. Zero clutter, multi-layered encryption frameworks, and extreme subpixel rendering adjustments locked by default.
            </p>
          </div>
        </GlowCard>

        {/* Stage 04 */}
        <GlowCard glowColor="blue" customSize={true} className="w-full min-h-[380px] bg-zinc-900/50 backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-between text-left rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col justify-start h-full">
            <div className="flex items-center justify-between w-full mb-6">
              <Rocket className="text-cyan-400 h-6 w-6" />
              <span className="font-mono text-xs text-cyan-400/50 uppercase tracking-widest">PHASE_04</span>
            </div>
            <h3 className="text-xl font-black text-white mb-3 tracking-tight uppercase font-sans select-none">
              Telemetry Scaling
            </h3>
            <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
              We ship your architecture directly onto distributed edge CDN networks, running absolute frame-stability diagnostics and page-speed optimization passes before passing over full root-access control links.
            </p>
          </div>
        </GlowCard>

      </div>
    </section>
  );
}
