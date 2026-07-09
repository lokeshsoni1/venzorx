"use client";

import React from "react";
import { Star } from "lucide-react";

// Testimonial Data structure (exactly 5 industry sectors)
const industrialTestimonials = [
  {
    name: "Dr. Aris Vance",
    role: "Chief Medical Director @ NeuroPulse",
    sector: "HEALTHCARE UTILITIES",
    content: "VenzorX completely rebuilt our clinical patient booking dashboard framework. They wiped out our persistent system lags and legacy tech-debt, accelerating operational conversions by a clean 42%.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "/demo/healthcare",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Marcus Thorn",
    role: "Founder @ Elysian Grooming Lounge",
    sector: "LUXURY SALONS & BARBERS",
    content: "Our premium schedule rendering system was failing during high-volume periods. VenzorX deployed an isolated headless microservice layer that effortlessly processes real-time appointment metrics.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "/demo/salons",
    previewImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Elena Rossi",
    role: "Operations Executive @ Atelier Group",
    sector: "HAUTE RESTAURANTS & HOTELS",
    content: "The visual presentation of our online booking engine is elite. Visually arresting digital frontends that completely eliminated our dependency on standard generic templates.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "/demo/hospitality",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Julian Blake",
    role: "Managing Partner @ Prime Horizon",
    sector: "ENTERPRISE REAL ESTATE",
    content: "Deploying VenzorX’s custom component architecture allowed us to display high-fidelity map interactions cleanly. Complete market dominance achieved across our listing funnels.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "/demo/realestate",
    previewImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sienna Kael",
    role: "Design Lead @ MonoForm Studios",
    sector: "ARCHITECTURAL FURNITURE RETAIL",
    content: "The performance scaling on our high-resolution modular catalog layout is unbelievable. Our loading speed scores jumped straight to 100 on global edge delivery channels.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "/demo/furniture",
    previewImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ClientTestimonialsMarqueeSection() {
  return (
    <section className="w-full relative py-32 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-transparent antialiased">
      
      {/* Glow Highlight */}
      <div className="absolute bg-cyan-500/5 blur-[140px] h-[550px] w-[550px] pointer-events-none top-0 z-0" />
      
      {/* Unaltered Section Header */}
      <div className="relative z-10 text-center max-w-5xl mx-auto mb-20 flex flex-col items-center select-none">
        <h2 className="text-4xl md:text-7xl font-black text-white text-center tracking-normal leading-none mb-6 uppercase font-sans">
          VALIDATED BY LEADING OPERATIONS.
        </h2>
        <p className="text-base md:text-xl font-mono text-cyan-400 text-center tracking-widest uppercase">
          Bespoke digital engines running globally across high-growth commercial sectors.
        </p>
      </div>

      {/* 5 High-Fidelity Mirror-Glass Display Showcases */}
      <div className="w-[92vw] max-w-6xl mx-auto flex flex-col gap-16 relative z-30">
        {industrialTestimonials.map((testimonial, index) => {
          const isEven = index % 2 === 1; // Alternating grid (0: left/right, 1: right/left)
          
          return (
            <div
              key={index}
              style={{
                background: "rgba(245, 250, 255, 0.08)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                transform: "translate3d(0, 0, 0)",
                willChange: "transform, opacity, backdrop-filter",
              }}
              className="w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,15,40,0.3)] transition-all duration-300"
            >
              <div 
                className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch w-full min-h-[400px]`}
                style={{ transform: "translate3d(0, 0, 0)" }}
              >
                {/* Horizontal Preview Image Panel */}
                <div 
                  className="w-full lg:w-1/2 relative min-h-[250px] lg:min-h-auto overflow-hidden bg-zinc-950/40"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                >
                  <img
                    src={testimonial.previewImage}
                    alt={`${testimonial.name} Live Environment`}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Testimonial Text Content Panel */}
                <div 
                  className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                >
                  {/* Identity Header */}
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
                      <h4 className="font-black text-white text-lg tracking-tight leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-zinc-400 font-medium tracking-normal mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Core Testimonial Quote */}
                  <p className="text-zinc-200 text-base md:text-lg leading-relaxed font-normal tracking-wide my-8">
                    "{testimonial.content}"
                  </p>

                  {/* Action Bar (Rating & View Demo Button) */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex space-x-1 items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star className="h-4 w-4 fill-cyan-400 text-cyan-400" key={i} />
                      ))}
                    </div>
                    
                    {/* Premium view demo button with text-gradient hover mask */}
                    <a
                      href={testimonial.demoLink}
                      className="group/btn inline-flex items-center justify-center font-mono text-xs font-black tracking-widest border border-white/10 px-6 py-3.5 rounded-xl bg-zinc-950/60 transition-all duration-200 ease-in-out hover:scale-105 hover:border-cyan-400/50 shadow-lg cursor-pointer text-white"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                    >
                      <span className="group-hover/btn:bg-gradient-to-r group-hover/btn:from-[#00F0FF] group-hover/btn:to-[#D000FF] group-hover/btn:bg-clip-text group-hover/btn:text-transparent transition-all duration-200">
                        View Demo
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
