"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// ============================================================================
// 1. DYNAMIC SYSTEM COMPONENT DATA MATRIX (5 HIGH-TICKET GLOBAL REVIEWS)
// ============================================================================
const internationalReviews = [
  {
    quote: "VenzorX completely transformed our clinic's online presence into a beautifully efficient, lightning-fast space that our patients genuinely trust. From automated booking to smooth user loops, their engineering sets a flawless standard for medical platforms.",
    author: "Dr. Sarah Bethany",
    role: "Founder & Lead Dentist",
    company: "Bethany Dental Care",
    initials: "DR",
  },
  {
    quote: "They eliminated our digital competition by turning our enterprise storefront into a high-octane showroom that feels exactly like navigating Amazon. Seamlessly scaling bulk wholesale operations alongside consumer retail is pure genius.",
    author: "Dilip Sharma",
    role: "Managing Director",
    company: "Dilip Furniture & Wholesalers",
    initials: "DS",
  },
  {
    quote: "Our platform operations were entirely elevated by VenzorX. They replaced laggy legacy systems with a sub-second consulting pipeline engine that handles complex data matrices effortlessly. Their technical excellence is unmatched.",
    author: "Anuradha Kadel",
    role: "Founder & Managing Director",
    company: "Doctor Career Consultancy",
    initials: "AK",
  },
  {
    quote: "The visual system engineering provided by VenzorX is entirely unmatched. Every interaction ripple feels intentional, eliminating our production bottlenecks within days.",
    author: "Elena Rostova",
    role: "VP of Digital Infrastructure",
    company: "AlphaTech Europe",
    initials: "ER",
  },
  {
    quote: "Finally, an engineering collective that understands that extreme system simplicity is the ultimate form of corporate sophistication. Our application performance metrics skyrocketed.",
    author: "Kenji Sato",
    role: "Lead Platform Architect",
    company: "Nexus Core Systems",
    initials: "KS",
  }
];

// ============================================================================
// 2. HARDWARE-ACCELERATED SPLIT TEXT CORE
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
// 3. MAIN INTERACTIVE REVIEWS SECTOR PANEL
// ============================================================================
export default function SystemIntegrationValidationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

      {/* Typography Header Stack */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mb-16 max-w-5xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-normal uppercase font-sans mb-4">
          SYSTEM INTEGRATION VALIDATION
        </h2>
        <p className="text-sm md:text-lg font-mono text-cyan-400 tracking-widest uppercase">
          ZERO FAULT VECTORS. FULL OPERATIONAL AUTONOMY.
        </p>
      </div>

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
              className={`w-6 h-6 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center transition-all duration-300 ${
                i === activeIndex ? "ring-1 ring-cyan-400 ring-offset-1 ring-offset-zinc-950 scale-110 opacity-100" : "opacity-40"
              }`}
              whileHover={{ scale: 1.2, opacity: 1 }}
            >
              <span className="text-[8px] font-mono font-bold text-zinc-300">{r.initials}</span>
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
                <motion.div
                  key={i}
                  className="absolute inset-0 w-14 h-14 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center"
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    scale: i === activeIndex ? 1 : 0.9,
                    zIndex: i === activeIndex ? 5 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <span className="text-sm font-mono font-bold text-cyan-400">{r.initials}</span>
                </motion.div>
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
