"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// ============================================================================
// 1. DYNAMIC SYSTEM COMPONENT DATA MATRIX (10 HIGH-TICKET GLOBAL REVIEWS)
// ============================================================================
const internationalReviews = [
  {
    quote: "The visual system engineering provided by VenzorX is entirely unmatched. Every interaction ripple feels intentional, eliminating our production bottlenecks within days.",
    author: "Elena Rostova",
    role: "VP of Digital Infrastructure",
    company: "AlphaTech Europe (Germany)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
  },
  {
    quote: "Finally, an engineering collective that understands that extreme system simplicity is the ultimate form of corporate sophistication. Our application performance metrics skyrocketed.",
    author: "Kenji Sato",
    role: "Lead Platform Architect",
    company: "Nexus Core Systems (Japan)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
  },
  {
    quote: "Deploying VenzorX's custom component blueprint completely redefined our approach to real-time client traffic conversions. Absolute engineering dominance.",
    author: "Sarah Jenkins",
    role: "Chief Design Director",
    company: "Linear Matrix (USA)",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&auto=format&fit=crop",
  },
  {
    quote: "Their headless architecture stack wiped out our legacy tech-debt instantly. The data pipeline execution feels crisp, lag-free, and incredibly production-grade.",
    author: "Liam O'Connor",
    role: "Director of Product Engineering",
    company: "Stripe Scaling Labs (Ireland)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
  },
  {
    quote: "They don't just build layout interfaces; they engineer conversion assets. The subpixel rendering optimizations alone transformed our premium retail checkout funnels.",
    author: "Amina Al-Mansoor",
    role: "Managing Director",
    company: "Vanguard Retail Core (UAE)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
  },
  {
    quote: "VenzorX delivered a high-velocity system architecture that effortlessly maps real-time data flows. Visually arresting frontends built for absolute enterprise scale.",
    author: "Matteo Ricci",
    role: "Principal Operations Lead",
    company: "Atelier Automotive (Italy)",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=250&auto=format&fit=crop",
  },
  {
    quote: "The framework stability combined with fluid physics interactions locked our user attention metrics down completely. Predictable revenue growth followed.",
    author: "Chloë Dubois",
    role: "Head of Digital Experience",
    company: "Elysian Global (France)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop",
  },
  {
    quote: "Our relational system schemas were dragging during apex loads. Their decoupled backend deployment has made our entire data platform ruthlessly efficient.",
    author: "Devendra Nair",
    role: "Chief Technology Officer",
    company: "Quantum Analytics (India)",
    avatar: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=250&auto=format&fit=crop",
  },
  {
    quote: "They bypassed all standard generic design practices and engineered a bespoke, secure microservice layer that validated our market mechanics perfectly.",
    author: "Sven Lindstrom",
    role: "VP of Architecture Planning",
    company: "Nordic Tech Fund (Sweden)",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop",
  },
  {
    quote: "The frame-stability diagnostic score on VenzorX's Vercel deployment edge is 100 out of 100. They have built an absolute software titan.",
    author: "Carlos Mendez",
    role: "Founder & Creative Lead",
    company: "Prism Dev Studios (Brazil)",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=250&auto=format&fit=crop",
  }
];

// ============================================================================
// 2. IMAGE PRELOAD HOOK DEFINITION
// ============================================================================
function usePreloadImages(images: string[]) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);
}

// ============================================================================
// 3. HARDWARE-ACCELERATED SPLIT TEXT CORE
// ============================================================================
function SplitText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <span className="inline transform-gpu backface-hidden">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.35,
            delay: i * 0.02,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.25em] will-change-transform transform-gpu backface-hidden"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// ============================================================================
// 4. MAIN INTERACTIVE REVIEWS SECTOR PANEL
// ============================================================================
export default function SystemIntegrationValidationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  usePreloadImages(internationalReviews.map((r) => r.avatar));

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 160 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % internationalReviews.length);
  };

  const currentReview = internationalReviews[activeIndex];

  return (
    <section className="w-full relative py-36 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-transparent antialiased select-none">
      
      {/* Background Aura Vector */}
      <div className="absolute bg-zinc-800/10 blur-[130px] h-[500px] w-[500px] pointer-events-none top-10 z-0" />

      {/* Main Interactive Stage Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-3xl mx-auto py-24 px-10 md:px-16 border border-white/5 bg-zinc-950/40 backdrop-blur-3xl rounded-3xl cursor-none z-10 shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300 hover:border-white/10"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleNext}
      >
        {/* Kinetic Fluid Magnetic Tracking Circle */}
        <motion.div
          className="pointer-events-none absolute z-50 mix-blend-difference hidden md:block"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.div
            className="rounded-full bg-white flex items-center justify-center"
            animate={{
              width: isHovered ? 84 : 0,
              height: isHovered ? 84 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ type: "spring", damping: 22, stiffness: 220 }}
          >
            <motion.span
              className="text-black text-xs font-black tracking-widest uppercase font-mono"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.05 }}
            >
              NEXT
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Dynamic Static Counter Grid */}
        <motion.div
          className="absolute top-10 right-10 flex items-baseline gap-1 font-mono text-xs z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="text-2xl font-black text-white"
            key={activeIndex}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </motion.span>
          <span className="text-zinc-500 font-bold">/</span>
          <span className="text-zinc-500 font-bold">{String(internationalReviews.length).padStart(2, "0")}</span>
        </motion.div>

        {/* Micro Multi-Avatar Micro-Stack */}
        <motion.div
          className="absolute top-10 left-10 flex -space-x-2.5 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.3 }}
        >
          {internationalReviews.map((r, i) => (
            <motion.div
              key={i}
              className={`w-6 h-6 rounded-full border border-zinc-950 overflow-hidden transition-all duration-300 ${
                i === activeIndex ? "ring-1 ring-cyan-400 ring-offset-1 ring-offset-zinc-950 scale-110 opacity-100" : "grayscale opacity-40"
              }`}
              whileHover={{ scale: 1.2, opacity: 1 }}
            >
              <img src={r.avatar} alt={r.author} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>

        {/* Review Quote Stage Layer */}
        <div className="relative mt-8 z-10 min-h-[140px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="text-lg md:text-2xl font-normal leading-relaxed tracking-tight text-zinc-100 font-sans text-left"
            >
              <SplitText text={currentReview.quote} />
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Interactive Identity Row */}
        <motion.div className="mt-12 relative z-10" layout>
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 shrink-0">
              <motion.div
                className="absolute -inset-1 rounded-full border border-cyan-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              {internationalReviews.map((r, i) => (
                <motion.img
                  key={r.avatar}
                  src={r.avatar}
                  alt={r.author}
                  className="absolute inset-0 w-14 h-14 rounded-full object-cover border border-white/10"
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    scale: i === activeIndex ? 1 : 0.9,
                    zIndex: i === activeIndex ? 5 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* Author Identity & Localization Block */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative pl-4 flex flex-col text-left"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.25 }}
              >
                {/* Accent Vertical Pipeline */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  style={{ originY: 0 }}
                />
                <span className="block text-base font-black text-white tracking-wide uppercase font-sans">
                  {currentReview.author}
                </span>
                <span className="block text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1">
                  {currentReview.role} — <span className="text-zinc-400">{currentReview.company}</span>
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* System Linear Tracking Progress Strip */}
        <div className="mt-14 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-cyan-400"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeIndex + 1) / internationalReviews.length) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Action Trigger Hint Footer */}
        <div className="mt-8 flex items-center justify-between opacity-40 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
          <span>Click anywhere within box to advance matrix</span>
          <span className="hidden sm:inline">GPU ACCELERATED // 120 FPS LOCK</span>
        </div>
      </div>
    </section>
  );
}
