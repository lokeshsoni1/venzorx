"use client";

import React from 'react';
import { Zap, ShieldCheck, Activity, Globe } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';
import dynamic from 'next/dynamic';

const GlobalSystemShaderBackdrop = dynamic(
  () => import('@/components/ui/global-system-shader-backdrop').then((mod) => mod.GlobalSystemShaderBackdrop),
  { ssr: false }
);

export default function WhyChooseUs() {
  return (
    <section className="w-full relative bg-[#030712] overflow-hidden antialiased">
      {/* Global System Shader Backdrop (Locks fixed behind all sections) */}
      <GlobalSystemShaderBackdrop />

      {/* Oil-Pastel Gradient Seamless Blend Correction */}
      <div className="bg-gradient-to-b from-[#030712] via-[#030712]/95 to-transparent absolute top-0 left-0 w-full h-[250px] pointer-events-none z-20 backdrop-blur-[1px]" />

      {/* Spotlight Glow Cards Array Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-36 relative z-30 flex flex-col items-center">
        
        {/* Why Choose Us Heading */}
        <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16 tracking-tight uppercase select-none">
          Why Choose Us
        </h2>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          
          {/* Spotlight Block 01 */}
          <GlowCard glowColor="blue" customSize={true} className="w-full min-h-[340px] bg-zinc-900/40 border border-white/10 transform-gpu backface-hidden will-change-transform translate-z-0">
            <div className="flex flex-col justify-start h-full">
              <Zap className="text-cyan-400 h-6 w-6 mb-6" />
              <h3 className="text-xl font-black text-white tracking-tight mb-4 uppercase font-sans select-none">
                Built for Speed
              </h3>
              <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed tracking-wide">
                Delivery in weeks, not fiscal quarters. Rapid system deployment engineered via our custom battle-tested component production blueprints.
              </p>
            </div>
          </GlowCard>

          {/* Spotlight Block 02 */}
          <GlowCard glowColor="blue" customSize={true} className="w-full min-h-[340px] bg-zinc-900/40 border border-white/10 transform-gpu backface-hidden will-change-transform translate-z-0">
            <div className="flex flex-col justify-start h-full">
              <ShieldCheck className="text-cyan-400 h-6 w-6 mb-6" />
              <h3 className="text-xl font-black text-white tracking-tight mb-4 uppercase font-sans select-none">
                Enterprise Security
              </h3>
              <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed tracking-wide">
                SOC2-ready isolated custom codebase built with premium multi-layer encryption layers and absolute zero vulnerability vectors.
              </p>
            </div>
          </GlowCard>

          {/* Spotlight Block 03 */}
          <GlowCard glowColor="blue" customSize={true} className="w-full min-h-[340px] bg-zinc-900/40 border border-white/10 transform-gpu backface-hidden will-change-transform translate-z-0">
            <div className="flex flex-col justify-start h-full">
              <Activity className="text-cyan-400 h-6 w-6 mb-6" />
              <h3 className="text-xl font-black text-white tracking-tight mb-4 uppercase font-sans select-none">
                99.98% Fault Tolerance
              </h3>
              <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed tracking-wide">
                Systems engineered with multi-node edge computing models to withstand massive traffic spikes without dropping system frame metrics.
              </p>
            </div>
          </GlowCard>

          {/* Spotlight Block 04 */}
          <GlowCard glowColor="blue" customSize={true} className="w-full min-h-[340px] bg-zinc-900/40 border border-white/10 transform-gpu backface-hidden will-change-transform translate-z-0">
            <div className="flex flex-col justify-start h-full">
              <Globe className="text-cyan-400 h-6 w-6 mb-6" />
              <h3 className="text-xl font-black text-white tracking-tight mb-4 uppercase font-sans select-none">
                Global Scale Deployment
              </h3>
              <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed tracking-wide">
                Headless content structures optimized dynamically via distributed global CDNs for absolute maximum core web page-speed telemetry scores.
              </p>
            </div>
          </GlowCard>

        </div>
      </div>
    </section>
  );
}
