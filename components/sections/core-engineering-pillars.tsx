"use client";

import React from 'react';
import { Layers, Cpu } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';

export default function CoreEngineeringPillars() {
  return (
    <section className="bg-transparent relative w-full overflow-hidden pt-28 pb-16 px-6 md:px-12 flex flex-col items-center justify-center antialiased">
      {/* Radial Backdrop Highlight */}
      <div className="absolute bg-zinc-700/5 blur-[140px] h-[600px] w-[600px] pointer-events-none top-0" />

      {/* Intro Header */}
      <div className="relative z-30 flex flex-col items-center justify-center max-w-5xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-7xl font-black text-white text-center tracking-normal leading-none mb-6 font-sans uppercase">
          OUR CORE ENGINEERING SYSTEMS.
        </h2>
        <span className="text-base md:text-xl font-medium tracking-widest text-cyan-400 text-center uppercase font-mono">
          Two Pillars. One Overriding Objective: Absolute Market Dominance.
        </span>
      </div>

      {/* 2-Column Balanced Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full mx-auto mt-20 relative z-30">
        
        {/* Column Pillar 01 */}
        <GlowCard glowColor="blue" customSize={true} className="w-full min-h-[580px] p-10 md:p-14 flex flex-col justify-between text-left shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col justify-start h-full">
            <Layers className="text-cyan-400 h-8 w-8 mb-6" />
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase font-sans select-none">
              Bespoke Corporate Architectures
            </h3>
            <p className="text-zinc-300 text-base md:text-lg font-normal leading-relaxed mb-8">
              Ultra-luxury, visually arresting digital frontends explicitly engineered to lock user cognitive attention, eradicate technical friction, and ruthlessly convert enterprise-scale data traffic into predictable revenue assets.
            </p>
          </div>
          
          {/* Detailed Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5 w-full">
            <div>
              <span className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Telemetry Metrics</span>
              <p className="text-sm font-semibold text-zinc-200">100% Google Core Web Vitals Lock</p>
            </div>
            <div>
              <span className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Visual Architecture</span>
              <p className="text-sm font-semibold text-zinc-200">Custom Canvas 2D/3D & Fluid Physics</p>
            </div>
            <div>
              <span className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Conversion Layer</span>
              <p className="text-sm font-semibold text-zinc-200">Cognitive Behavioral Funnel Mapping</p>
            </div>
            <div>
              <span className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">System Pipeline</span>
              <p className="text-sm font-semibold text-zinc-200">Headless CMS & Decoupled Nodes</p>
            </div>
          </div>
        </GlowCard>

        {/* Column Pillar 02 */}
        <GlowCard glowColor="blue" customSize={true} className="w-full min-h-[580px] p-10 md:p-14 flex flex-col justify-between text-left shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col justify-start h-full">
            <Cpu className="text-cyan-400 h-8 w-8 mb-6" />
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase font-sans select-none">
              High-Tech MVPs & Micro-SaaS
            </h3>
            <p className="text-zinc-300 text-base md:text-lg font-normal leading-relaxed mb-8">
              Hardcore, production-grade micro-software systems built with hyper-scalable decoupled backend structures. Engineered to validate market mechanics, achieve high-velocity data processing, and scale ruthlessly before you commit capital.
            </p>
          </div>
          
          {/* Detailed Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5 w-full">
            <div>
              <span className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Backend Operations</span>
              <p className="text-sm font-semibold text-zinc-200">Scalable Microservices Architecture</p>
            </div>
            <div>
              <span className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Database Layer</span>
              <p className="text-sm font-semibold text-zinc-200">Highly-Optimized Relational DBMS Schema</p>
            </div>
            <div>
              <span className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Security Protocols</span>
              <p className="text-sm font-semibold text-zinc-200">End-to-End Auth & Encryption Layers</p>
            </div>
            <div>
              <span className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Data Pipeline</span>
              <p className="text-sm font-semibold text-zinc-200">Real-Time WebSockets & API Systems</p>
            </div>
          </div>
        </GlowCard>

      </div>
    </section>
  );
}
