"use client";

import React from 'react';
import { Zap, ShieldCheck, Activity, Globe } from 'lucide-react';
import { GlowCard } from '@/components/ui/glow-card';
import { GlobalSystemShaderBackdrop } from '@/components/ui/global-system-shader-backdrop';

export default function WhyChooseUs() {
  return (
    <section className="w-full relative bg-[#030712] overflow-hidden">
      {/* Global System Shader Backdrop (Locks fixed behind all sections) */}
      <GlobalSystemShaderBackdrop />

      {/* Oil-Pastel Gradient Seamless Blend Correction */}
      <div className="bg-gradient-to-b from-[#030712] via-[#030712]/95 to-transparent absolute top-0 left-0 w-full h-[250px] pointer-events-none z-20 backdrop-blur-[1px]" />

      {/* Spotlight Glow Cards Array Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-40 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          {/* Spotlight Block 01 */}
          <GlowCard glowColor="blue" className="w-full min-h-[350px] bg-zinc-900/60 border border-white/10">
            <Zap className="text-cyan-400 h-6 w-6 mb-6" />
            <h3 className="text-xl font-extrabold text-white tracking-tight font-sans mb-4 uppercase select-none">
              Built for Speed
            </h3>
            <p className="text-zinc-200 text-sm md:text-base font-normal leading-relaxed tracking-wide">
              Delivery in weeks, not fiscal quarters. Rapid system deployment engineered via our custom battle-tested component production blueprints.
            </p>
          </GlowCard>

          {/* Spotlight Block 02 */}
          <GlowCard glowColor="blue" className="w-full min-h-[350px] bg-zinc-900/60 border border-white/10">
            <ShieldCheck className="text-cyan-400 h-6 w-6 mb-6" />
            <h3 className="text-xl font-extrabold text-white tracking-tight font-sans mb-4 uppercase select-none">
              Enterprise Security
            </h3>
            <p className="text-zinc-200 text-sm md:text-base font-normal leading-relaxed tracking-wide">
              SOC2-ready isolated custom codebase built with premium multi-layer encryption layers and absolute zero vulnerability vectors.
            </p>
          </GlowCard>

          {/* Spotlight Block 03 */}
          <GlowCard glowColor="blue" className="w-full min-h-[350px] bg-zinc-900/60 border border-white/10">
            <Activity className="text-cyan-400 h-6 w-6 mb-6" />
            <h3 className="text-xl font-extrabold text-white tracking-tight font-sans mb-4 uppercase select-none">
              99.98% Fault Tolerance
            </h3>
            <p className="text-zinc-200 text-sm md:text-base font-normal leading-relaxed tracking-wide">
              Systems engineered with multi-node edge computing models to withstand massive traffic spikes without dropping system frame metrics.
            </p>
          </GlowCard>

          {/* Spotlight Block 04 */}
          <GlowCard glowColor="blue" className="w-full min-h-[350px] bg-zinc-900/60 border border-white/10">
            <Globe className="text-cyan-400 h-6 w-6 mb-6" />
            <h3 className="text-xl font-extrabold text-white tracking-tight font-sans mb-4 uppercase select-none">
              Global Scale Deployment
            </h3>
            <p className="text-zinc-200 text-sm md:text-base font-normal leading-relaxed tracking-wide">
              Headless content structures optimized dynamically via distributed global CDNs for absolute maximum core web page-speed telemetry scores.
            </p>
          </GlowCard>

        </div>
      </div>
    </section>
  );
}
