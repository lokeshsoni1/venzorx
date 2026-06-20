// @/app/services/page.tsx
"use client";

import React from "react";
import { MessageSquare, Globe, GitBranch } from "lucide-react";
import dynamic from "next/dynamic";

const GlobalSystemShaderBackdrop = dynamic(
  () => import("@/components/ui/global-system-shader-backdrop").then((mod) => mod.GlobalSystemShaderBackdrop),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#030712] pointer-events-none" />
  }
);

export default function StandaloneServicesPage() {
  return (
    <main className="w-full min-h-screen relative py-32 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#030712] antialiased select-none">
      {/* Neon Spectrum Shader */}
      <div className="absolute bg-emerald-500/5 blur-[160px] h-[600px] w-[600px] pointer-events-none top-1/4 z-0" />

      {/* Global Shader Backdrop Canvas */}
      <GlobalSystemShaderBackdrop />

      {/* TYPOGRAPHIC INTRO BLOCK */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-24 flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-black text-white text-center tracking-tight leading-none mb-6 font-sans uppercase z-10">
          OUR ENGINEERING DEPLOYMENTS.
        </h1>
        <p className="text-sm md:text-lg font-mono text-zinc-400 text-center tracking-widest uppercase z-10">
          Active High-Performance Deliverables and Upcoming Automation Roadmap.
        </p>
      </div>

      {/* 3-CARD ASYMMETRIC HIERARCHY GRID (CENTER-FOCUS MATRICES) */}
      <div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full mx-auto items-center relative z-30"
      >
        
        {/* CARD 01 // LEFT PANEL: AUTOMATED AI VOICE AGENTS */}
        <div className="bg-zinc-950/30 backdrop-blur-2xl border border-red-500/20 rounded-3xl p-8 flex flex-col justify-between text-left relative overflow-hidden shadow-[0_15px_40px_rgba(239,68,68,0.05)] opacity-60 lg:scale-95 lg:h-[350px] transition-all duration-300 hover:opacity-80 transform-gpu backface-hidden will-change-transform translate-z-0 preserve-3d">
          <div>
            <div className="flex items-center justify-between w-full mb-6">
              <span className="font-mono text-[9px] bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-full tracking-wider uppercase animate-pulse">
                COMING SOON
              </span>
              <MessageSquare className="text-red-400/40 h-4 w-4" />
            </div>
            <h2 className="text-xl font-bold text-zinc-400 mb-3 uppercase tracking-tight font-sans">
              AI Voice Agents
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Currently in our stabilization pipeline. Highly-customized conversational vocal synthesis engines getting configured for business operations soon.
            </p>
          </div>
        </div>

        {/* CARD 02 // CENTER PANEL: HIGH-CONVERTING WEBSITES */}
        <div className="bg-zinc-950/70 backdrop-blur-3xl border border-emerald-500/30 rounded-3xl p-10 flex flex-col justify-between text-left relative overflow-hidden z-20 shadow-[0_25px_60px_rgba(4,120,87,0.25)] lg:h-[420px] transition-all duration-300 transform-gpu hover:border-emerald-400/60 hover:scale-[1.02] backface-hidden will-change-transform translate-z-0 preserve-3d">
          <div>
            <div className="flex items-center justify-between w-full mb-6">
              <span className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full tracking-widest uppercase font-bold">
                SYSTEM_ACTIVE
              </span>
              <Globe className="text-emerald-400 h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight font-sans">
              High-Converting Websites
            </h2>
            <p className="text-zinc-200 text-base leading-relaxed">
              Handcrafted, clean Next.js/TypeScript code platforms engineered directly to remove performance bottlenecks, capture user visual attention, and systematically lock high web conversions for your business.
            </p>
          </div>
        </div>

        {/* CARD 03 // RIGHT PANEL: AUTOMATION WORKFLOWS */}
        <div className="bg-zinc-950/30 backdrop-blur-2xl border border-red-500/20 rounded-3xl p-8 flex flex-col justify-between text-left relative overflow-hidden shadow-[0_15px_40px_rgba(239,68,68,0.05)] opacity-60 lg:scale-95 lg:h-[350px] transition-all duration-300 hover:opacity-80 transform-gpu backface-hidden will-change-transform translate-z-0 preserve-3d">
          <div>
            <div className="flex items-center justify-between w-full mb-6">
              <span className="font-mono text-[9px] bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-full tracking-wider uppercase animate-pulse">
                COMING SOON
              </span>
              <GitBranch className="text-red-400/40 h-4 w-4" />
            </div>
            <h2 className="text-xl font-bold text-zinc-400 mb-3 uppercase tracking-tight font-sans">
              Automation Workflows
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              End-to-end multi-agent workflow systems built to wipe out routine overhead friction. Core schema integration and custom validation tests in progress.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
