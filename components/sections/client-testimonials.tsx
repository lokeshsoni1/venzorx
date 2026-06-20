"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { Star } from "lucide-react";

// ==========================================
// 1. REUSEABLE LIQUID GLASS CARD ARCHITECTURE
// ==========================================
function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter id="marquee-container-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.02" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="120" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

interface LiquidCardProps extends React.ComponentProps<"div"> {}

function LiquidCard({ className, children, ...props }: LiquidCardProps) {
  return (
    <div className="relative group/liquid select-none">
      <div
        data-slot="card"
        style={{ backdropFilter: 'url("#marquee-container-glass")' }}
        className={`text-card-foreground bg-transparent flex flex-col gap-6 rounded-3xl border border-white/10 py-6 transition-all duration-300 dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] ${className}`}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

// ==========================================
// 2. ULTRA-SMOOTH HARDWARE ACCELERATED MARQUEE
// ==========================================
interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  repeat?: number;
  speed?: "slow" | "normal" | "fast";
}

function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  repeat = 4,
  speed = "normal",
  ...props
}: MarqueeProps) {
  const speedVariants = {
    slow: "[--duration:120s]",
    normal: "[--duration:35s]",
    fast: "[--duration:15s]",
  };

  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--gap:24px] [gap:var(--gap)] select-none ${speedVariants[speed]} ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] will-change-transform translate-z-0 transform-gpu animate-marquee flex-row group-hover:[animation-play-state:paused] ${
              reverse ? "[animation-direction:reverse]" : ""
            }`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// ==========================================
// 3. TARGET DATA ARCHITECTURE (6 INDUSTRY SECTORS)
// ==========================================
const industrialTestimonials = [
  {
    name: "Dr. Aris Vance",
    role: "Chief Medical Director @ NeuroPulse",
    sector: "HEALTHCARE UTILITIES",
    content: "VenzorX completely rebuilt our clinical patient booking dashboard framework. They wiped out our persistent system lags and legacy tech-debt, accelerating operational conversions by a clean 42%.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "/demo/healthcare"
  },
  {
    name: "Marcus Thorn",
    role: "Founder @ Elysian Grooming Lounge",
    sector: "LUXURY SALONS & BARBERS",
    content: "Our premium schedule rendering system was failing during high-volume periods. VenzorX deployed an isolated headless microservice layer that effortlessly processes real-time appointment metrics.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "/demo/salons"
  },
  {
    name: "Elena Rossi",
    role: "Operations Executive @ Atelier Group",
    sector: "HAUTE RESTAURANTS & HOTELS",
    content: "The visual presentation of our online booking engine is elite. Visually arresting digital frontends that completely eliminated our dependency on standard generic templates.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "/demo/hospitality"
  },
  {
    name: "Julian Blake",
    role: "Managing Partner @ Prime Horizon",
    sector: "ENTERPRISE REAL ESTATE",
    content: "Deploying VenzorX’s custom component architecture allowed us to display high-fidelity map interactions cleanly. Complete market dominance achieved across our listing funnels.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "/demo/realestate"
  },
  {
    name: "Sienna Kael",
    role: "Design Lead @ MonoForm Studios",
    sector: "ARCHITECTURAL FURNITURE RETAIL",
    content: "The performance scaling on our high-resolution modular catalog layout is unbelievable. Our loading speed scores jumped straight to 100 on global edge delivery channels.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "/demo/furniture"
  },
  {
    name: "Christian Dumont",
    role: "VP of Experience @ Apex Sanctuary",
    sector: "PREMIUM ULTRA-RESORTS",
    content: "Their dynamic canvas animations lock user attention immediately. Technical friction is non-existent. Our high-ticket customer conversion metrics are lightyears ahead of baseline.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "/demo/resorts"
  }
];

// ==========================================
// 4. MAIN MONOLITH INJECTION CORE
// ==========================================
export default function ClientTestimonialsMarqueeSection() {
  return (
    <section className="w-full relative py-32 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-transparent antialiased">
      
      <div className="absolute bg-cyan-500/5 blur-[140px] h-[550px] w-[550px] pointer-events-none top-0 z-0" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto mb-20 flex flex-col items-center">
        <h2 className="text-4xl md:text-7xl font-black text-white text-center tracking-normal leading-none mb-6 uppercase font-sans">
          VALIDATED BY LEADING OPERATIONS.
        </h2>
        <p className="text-base md:text-xl font-mono text-cyan-400 text-center tracking-widest uppercase">
          Bespoke digital engines running globally across high-growth commercial sectors.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-30 overflow-hidden py-4">
        <Marquee speed="normal">
          {industrialTestimonials.map((testimonial, index) => (
            <LiquidCard className="w-[380px] shrink-0 bg-zinc-950/40 backdrop-blur-2xl p-6 flex flex-col justify-between h-[340px]" key={index}>
              <div className="flex flex-col h-full justify-between">
                
                <div className="flex items-center space-x-4 border-b border-white/5 pb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 object-cover rounded-full border border-white/10"
                  />
                  <div>
                    <span className="block text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-0.5">
                      {testimonial.sector}
                    </span>
                    <h4 className="font-black text-white text-base tracking-tight leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-zinc-400 font-medium tracking-normal mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-zinc-200 text-sm md:text-base leading-relaxed tracking-normal my-4 flex-grow flex items-center">
                  "{testimonial.content}"
                </p>

                {/* Performance Analytics Vector Elements */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex space-x-1 items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star className="h-4 w-4 fill-cyan-400 text-cyan-400" key={i}/>
                    ))}
                  </div>
                  
                  <a
                    href={testimonial.demoLink}
                    className="text-xs font-bold text-white uppercase tracking-widest bg-zinc-900/60 border border-white/10 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-cyan-50 hover:text-white hover:border-cyan-400 z-50 cursor-pointer shadow-lg"
                  >
                    View Live Demo
                  </a>
                </div>
              </div>
            </LiquidCard>
          ))}
        </Marquee>
      </div>

      <GlassFilter/>
    </section>
  );
}
