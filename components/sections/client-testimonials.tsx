"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

// Technical datasets for Card Profiles with local portfolio asset mapping
const industrialTestimonials = [
  {
    name: "Dr. Sarah Bethany",
    role: "Founder & Lead Dentist @ Bethany Dental Care",
    sector: "HEALTHCARE WEB PLATFORMS",
    content: "As a healthcare professional, I was looking for someone who understood that a clinic’s website needs to be warm, empathetic, and exceptionally efficient. VenzorX delivered exactly that. They transformed our online presence into a beautiful, lightning-fast space that our patients genuinely trust and love. From the seamless automated booking to the intuitive patient flow, their work has set a new benchmark for medical platforms. If you want a website that truly understands healthcare and converts visitors into patients before a single blink, there is absolutely nobody better than VenzorX.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "https://bethany-dental-care.vercel.app/",
    targets: [
      "/images/projects/bethany-1.png",
      "/images/projects/bethany-2.png",
      "/images/projects/bethany-3.png",
      "/images/projects/bethany-4.png"
    ]
  },
  {
    name: "Dilip Sharma",
    role: "Managing Director @ Dilip Furniture & Wholesalers",
    sector: "B2B & RETAIL E-COMMERCE",
    content: "We wanted to shift our traditional furniture business online, but VenzorX took it to a level we couldn’t even imagine. They eliminated our competition completely by transforming our store into a premium, lightning-fast digital showroom that feels exactly like shopping on Amazon. The way they map bulk wholesale ordering alongside an elegant retail experience is pure genius. Our daily operations shifted gears, and our online reach expanded across the country almost overnight. If you are a big wholesaler or retailer looking to dominate the digital market and completely scale your business, VenzorX is the only choice.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "https://dilip-elegance.vercel.app/",
    targets: [
      "/images/projects/dilip-1.png",
      "/images/projects/dilip-2.png",
      "/images/projects/dilip-3.png",
      "/images/projects/dilip-4.png"
    ]
  },
  {
    name: "Anuradha Kadel",
    role: "Founder & Managing Director @ Doctor Career Consultancy",
    sector: "IT RECRUITMENT & BESPOKE CONSULTING INFRASTRUCTURE",
    content: "VenzorX completely transformed our platform operations. They replaced our outdated web system with a fast, modern digital engine tailored perfectly to our consulting pipelines. The new application runs with zero lag, handles complex user workflows effortlessly, and has set a new standard for our business scaling. If you are looking for absolute technical excellence and a web system that dominates your market baseline, their engineering is completely unmatched.",
    avatar: "https://raw.githubusercontent.com/dalim-in/dalim/refs/heads/main/apps/www/public/ali.jpg",
    rating: 5,
    demoLink: "https://www.doctorcareerconsultancy.in/",
    targets: [
      "/images/projects/doctor-1.png",
      "/images/projects/doctor-2.png",
      "/images/projects/doctor-3.png",
      "/images/projects/doctor-4.png"
    ]
  }
];

// Automated Live-URL Carousel Slideshow Engine Component (with text labels removed)
function UrlSlideshow({ targets }: { targets: string[] }) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Slides array with the first element duplicated at the end for infinite marquee effect
  const slides = [...targets, targets[0]];

  useEffect(() => {
    const runCarousel = () => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    };

    const interval = setInterval(runCarousel, 2000); // 2.0s Transition Interval
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (index === slides.length - 1) {
      // Loop Flow: reset to 0 seamlessly after the transition finishes
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 700); // transition speed
    }
  }, [index, slides.length]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-zinc-950/40 transform-gpu">
      <div
        className="flex h-full"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translate3d(-${index * (100 / slides.length)}%, 0, 0)`,
          transition: isTransitioning ? 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
          willChange: "transform",
        }}
      >
        {slides.map((slideUrl, idx) => {
          return (
            <div
              key={idx}
              style={{ width: `${100 / slides.length}%` }}
              className="h-full relative flex-shrink-0"
            >
              <img
                src={slideUrl}
                alt="Project Showcase Slide"
                className="w-full h-full object-cover opacity-80"
                loading="eager" // Strict static loading optimization
                style={{ willChange: "transform, filter" }}
              />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none z-10" />
    </div>
  );
}

export default function ClientTestimonialsMarqueeSection() {
  return (
    <section className="w-full relative py-32 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-transparent antialiased">
      
      {/* Styles Injection for Hover matrix and Glowing effects */}
      <style jsx global>{`
        @keyframes electric-sweep {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
        .electric-glow-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05) !important;
          backdrop-filter: blur(28px) !important;
          -webkit-backdrop-filter: blur(28px) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          will-change: transform, filter, border-color;
          transform: translate3d(0, 0, 0);
        }
        .electric-glow-card:hover {
          transform: translateY(-8px) translate3d(0, 0, 0) !important;
          border-color: transparent !important;
          box-shadow: 0 20px 40px -15px rgba(0, 240, 255, 0.3), 0 0 30px rgba(208, 0, 255, 0.2);
        }
        .electric-glow-card::before {
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
        .electric-glow-card:hover::before {
          opacity: 1;
          animation: electric-sweep 1.2s linear infinite;
        }
      `}</style>

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

      {/* 3 High-Fidelity Mirror-Glass Display Showcases */}
      <div className="w-[92vw] max-w-6xl mx-auto flex flex-col gap-16 relative z-30">
        {industrialTestimonials.map((testimonial, index) => {
          const isEven = index % 2 === 1; // Card 1 (Left), Card 2 (Right), Card 3 (Left)
          
          return (
            <motion.div
              key={index}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: index * 0.4 // Staggers the levitation pattern across the cards
              }}
              className="w-full flex justify-center transform-gpu"
            >
              <div
                className="electric-glow-card w-[94vw] lg:w-[96vw] lg:max-w-[1400px] h-auto lg:h-[70vh] min-h-[52vh] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,15,40,0.3)] transform-gpu"
              >
                <div 
                  className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch w-full h-full`}
                >
                  {/* Horizontal Preview Slideshow Panel */}
                  <div 
                    className="w-full lg:w-1/2 relative min-h-[320px] lg:min-h-full overflow-hidden bg-zinc-950/40"
                  >
                    <UrlSlideshow targets={testimonial.targets} />
                  </div>

                  {/* Testimonial Text Content Panel */}
                  <div 
                    className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between"
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
                    <p className="text-zinc-200 text-sm md:text-base leading-relaxed font-normal tracking-wide my-6 select-text">
                      "{testimonial.content}"
                    </p>

                    {/* Action Bar (Rating & View Demo Button) */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-6">
                      <div className="flex space-x-1 items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star className="h-4 w-4 fill-cyan-400 text-cyan-400" key={i} />
                        ))}
                      </div>
                      
                      <a
                        href={testimonial.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center justify-center font-mono text-xs font-black tracking-widest border border-white/10 px-6 py-3.5 rounded-xl bg-zinc-950/60 transition-all duration-200 ease-in-out hover:scale-105 hover:border-cyan-400/50 shadow-lg cursor-pointer text-white"
                      >
                        <span className="group-hover/btn:bg-gradient-to-r group-hover/btn:from-[#00F0FF] group-hover/btn:to-[#D000FF] group-hover/btn:bg-clip-text group-hover/btn:text-transparent transition-all duration-200">
                          View Demo
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
