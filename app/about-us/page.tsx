// @/app/about-us/page.tsx
"use client";

import React from "react";
import { Clock, Slash, Terminal } from "lucide-react";
import dynamic from "next/dynamic";

const GlobalSystemShaderBackdrop = dynamic(
  () => import("@/components/ui/global-system-shader-backdrop").then((mod) => mod.GlobalSystemShaderBackdrop),
  { ssr: false }
);

export default function StandaloneAboutUsPage() {
  return (
    <main className="w-full min-h-screen relative py-28 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#030712] antialiased select-none">
      {/* Radial Dissolve Background Shader */}
      <div className="absolute bg-zinc-800/10 blur-[150px] h-[600px] w-[600px] pointer-events-none top-1/4 z-0" />

      {/* Global Shader Backdrop Canvas */}
      <GlobalSystemShaderBackdrop />

      {/* TYPOGRAPHY MIXTURE INTRO HEADER BLOCK */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-black text-white text-center tracking-normal leading-none mb-6 font-sans uppercase z-10">
          HOW WE EXECUTE.
        </h1>
        <p className="text-zinc-300 text-base md:text-xl font-normal leading-relaxed text-center max-w-4xl z-10">
          We refuse to deploy generic shorthand architectures or depend on bloated template builders like WordPress or Elementor. Our baseline standard is simple: handcrafted, high-velocity source code written completely from scratch to ensure maximum execution speeds. We fulfill commitments strictly on time, and if a system fault occurs, our engineers track and fix the root cause immediately without delay vectors.
        </p>
      </div>

      {/* 3-COLUMN STRUCTURED PERFORMANCE CARDS GRID */}
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full mx-auto relative z-30"
      >
        {/* CARD 01 */}
        <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl flex flex-col justify-between text-left shadow-[0_20px_50px_rgba(0,0,0,0.6)] min-h-[280px] transform-gpu backface-hidden will-change-transform translate-z-0 preserve-3d">
          <div>
            <Clock className="text-cyan-400 h-6 w-6 mb-5" />
            <h2 className="text-xl font-black text-white uppercase tracking-tight mb-3 font-sans">
              To-The-Point Delivery
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              No arbitrary delays or missed scope milestones. We respect pre-planned technical roadmaps, locking down stable functional modules on target timelines.
            </p>
          </div>
        </div>

        {/* CARD 02 */}
        <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl flex flex-col justify-between text-left shadow-[0_20px_50px_rgba(0,0,0,0.6)] min-h-[280px] transform-gpu backface-hidden will-change-transform translate-z-0 preserve-3d">
          <div>
            <Slash className="text-cyan-400 h-6 w-6 mb-5" />
            <h2 className="text-xl font-black text-white uppercase tracking-tight mb-3 font-sans">
              Zero Bulky Templates
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We do not leverage clunky drag-and-drop builders or performance-choking plugins. Every interactive component is hardcoded via clean TypeScript layout loops.
            </p>
          </div>
        </div>

        {/* CARD 03 */}
        <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl flex flex-col justify-between text-left shadow-[0_20px_50px_rgba(0,0,0,0.6)] min-h-[280px] transform-gpu backface-hidden will-change-transform translate-z-0 preserve-3d">
          <div>
            <Terminal className="text-cyan-400 h-6 w-6 mb-5" />
            <h2 className="text-xl font-black text-white uppercase tracking-tight mb-3 font-sans">
              Immediate Bug Fixes
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Should any runtime exception error or platform defect materialize post-deployment, our team initializes crash-repair frameworks to optimize the stack immediately.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
