"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MistBackground from "@/components/ui/mist-background";
import Lenis from "lenis";

const useMorphingText = (texts: string[], scrollProgress: number) => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2 || !texts || texts.length === 0) return;

      // FIX: Keep blur amounts dynamically sharp and optimized to prevent fuzzy text artifacts
      current2.style.filter = `blur(${Math.min(4 / fraction - 4, 12)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(4 / invertedFraction - 4, 12)}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      current1.textContent = texts[0];
      current2.textContent = texts[1];
    },
    [texts],
  );

  useEffect(() => {
    setStyles(scrollProgress);
  }, [scrollProgress, setStyles]);

  return { text1Ref, text2Ref };
};

interface ScrollMorphingTextProps {
  texts: string[];
  scrollProgress: number;
}

const ScrollMorphingText: React.FC<ScrollMorphingTextProps> = ({ texts, scrollProgress }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts, scrollProgress);

  return (
    <div className="relative mx-auto w-full max-w-5xl h-24 md:h-36 lg:h-44 text-center [filter:url(#threshold)_blur(0.4px)] transform-gpu z-30">
      <span 
        className="absolute inset-x-0 top-0 m-auto inline-block w-full text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-[0.5em] text-white uppercase text-center select-none pointer-events-none transform-gpu antialiased subpixel-antialiased" 
        ref={text1Ref}
      >
        {texts[0]}
      </span>
      <span 
        className="absolute inset-x-0 top-0 m-auto inline-block w-full text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wide text-center text-white max-w-4xl md:max-w-5xl mx-auto font-medium px-4 leading-relaxed select-none pointer-events-none transform-gpu antialiased subpixel-antialiased" 
        ref={text2Ref}
        style={{ 
          opacity: 0,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic"
        }}
      >
        {texts[1]}
      </span>
      
      {/* SVG filter required for threshold gooey morph effect */}
      <svg id="filters" className="hidden" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -120"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Track window scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Morph spans from 0% to 70% scroll progress
    const progress = Math.min(latest / 0.7, 1);
    setScrollProgress(progress);
  });

  return (
    <section ref={containerRef} className="relative w-full h-[180vh] bg-transparent z-10">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
        
        {/* Top-Center Glassmorphism Navbar Layout */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-slate-900/40 backdrop-blur-md border border-slate-500/15 px-6 md:px-8 py-3.5 rounded-full flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,245,255,0.03)]">
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold text-white/70 tracking-widest">
            <a href="#" className="hover:text-white transition-colors">HOME</a>
            <a href="#" className="hover:text-white transition-colors">ABOUT US</a>
            <a href="#" className="hover:text-white transition-colors">PRICING</a>
            <a href="#" className="hover:text-white transition-colors">SERVICES</a>
            <a href="#" className="hover:text-white transition-colors">CONTACT</a>
          </div>
          <button className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-full border border-white/10 transition-all cursor-pointer">
            CONNECT
          </button>
        </nav>

        {/* WebGL Mist Background */}
        <MistBackground />
   
        {/* Main Hero Container - Centered layout */}
        <div className="relative z-10 w-full h-full max-w-5xl flex items-center justify-center select-none">
          
          {/* Wolf Logo Wrapper - Centered mathematically in the direct center of the screen */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[240px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] aspect-[3000/1403] flex items-center justify-center group z-20 mt-[-4vh]">
            
            {/* Glowing blue/cyan shining ambient aura behind the wolf */}
            <div className="absolute w-[80%] h-[120%] rounded-full bg-[radial-gradient(circle,_rgba(0,245,255,0.18)_0%,_rgba(0,245,255,0)_70%)] filter blur-3xl pointer-events-none z-0 mix-blend-screen group-hover:scale-105 transition-transform duration-1000 ease-out" />
            
            {/* Main Wolf Logo: rendered directly with transparent background to bring it cleanly to the front */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full flex items-center justify-center z-20 relative"
            >
              <img
                src="/images/3d_wolf_logo.png"
                alt="Venzorx Wolf Logo"
                className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                style={{
                  imageRendering: "crisp-edges"
                }}
              />
            </motion.div>
          </div>

          {/* Morphing Text Component - Positioned cleanly below the centered logo */}
          <div className="absolute top-[calc(50%+90px)] sm:top-[calc(50%+120px)] md:top-[calc(50%+150px)] lg:top-[calc(50%+180px)] left-1/2 -translate-x-1/2 w-full z-30">
            <ScrollMorphingText 
              scrollProgress={scrollProgress}
              texts={[
                "VENZORX",
                "We Build High-Tech Systems for Businesses."
              ]}
            />
          </div>
   
        </div>
      </div>
    </section>
  );
}
