"use client";

import React from 'react';
import { Layers, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

// Graphic Asset Wrapper with Pulse, Blink, and Metallic Shine animations
function GraphicAssetWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.03, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      }}
      className="relative inline-flex items-center justify-center p-4 rounded-2xl bg-zinc-900/60 border border-white/10 overflow-hidden w-16 h-16 mb-6 transform-gpu"
      style={{ willChange: "transform, opacity, filter" }}
    >
      {/* Metallic shine surface sweep */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full pointer-events-none z-20"
        style={{
          animation: "metallic-shine 3s infinite",
          willChange: "transform"
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default function CoreEngineeringPillars() {
  return (
    <section className="bg-transparent relative w-full overflow-hidden pt-28 pb-16 px-6 md:px-12 flex flex-col items-center justify-center antialiased">
      
      {/* CSS Styles Injection for High-Voltage sweep and Metallic Shine */}
      <style jsx global>{`
        @keyframes high-voltage-sweep {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
        @keyframes metallic-shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          30%, 100% {
            transform: translateX(100%) skewX(-15deg);
          }
        }
        .engineering-system-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03) !important;
          backdrop-filter: blur(28px) !important;
          -webkit-backdrop-filter: blur(28px) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          will-change: transform, filter, border-color, opacity;
          transform: translate3d(0, 0, 0);
        }
        .engineering-system-card:hover {
          transform: translateY(-8px) translate3d(0, 0, 0) !important;
          border-color: transparent !important;
          box-shadow: 0 25px 60px rgba(0, 240, 255, 0.25);
        }
        .engineering-system-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1.5px;
          background: linear-gradient(135deg, #00F0FF, #D000FF, #00F0FF);
          background-size: 200% auto;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 10;
          will-change: opacity, background-position;
        }
        .engineering-system-card:hover::before {
          opacity: 1;
          animation: high-voltage-sweep 0.8s linear infinite; /* Ultra-fast sweep */
        }
      `}</style>

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
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{
            repeat: Infinity,
            duration: 4.5,
            ease: "easeInOut",
            delay: 0
          }}
          className="w-full flex transform-gpu"
        >
          <div className="engineering-system-card w-full min-h-[580px] p-10 md:p-14 flex flex-col justify-between text-left rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
            <div className="flex flex-col justify-start h-full">
              <GraphicAssetWrapper>
                <Layers className="text-cyan-400 h-8 w-8" />
              </GraphicAssetWrapper>
              
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
          </div>
        </motion.div>

        {/* Column Pillar 02 */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{
            repeat: Infinity,
            duration: 4.5,
            ease: "easeInOut",
            delay: 2.25 // Asynchronous Offset
          }}
          className="w-full flex transform-gpu"
        >
          <div className="engineering-system-card w-full min-h-[580px] p-10 md:p-14 flex flex-col justify-between text-left rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
            <div className="flex flex-col justify-start h-full">
              <GraphicAssetWrapper>
                <Cpu className="text-cyan-400 h-8 w-8" />
              </GraphicAssetWrapper>
              
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
          </div>
        </motion.div>

      </div>
    </section>
  );
}
