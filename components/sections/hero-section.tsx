"use client";

import React, { useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MistBackground from "@/components/ui/mist-background";

interface ScrollMorphingTextProps {
  texts: string[];
}

const ScrollMorphingText: React.FC<ScrollMorphingTextProps> = ({ texts }) => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  
  // Track window scroll progress
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress (0 to 0.7) to the morph fraction (0 to 1) so it finishes morphing before the absolute bottom
    const fraction = Math.min(latest / 0.7, 1);
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (!current1 || !current2) return;

    current1.textContent = texts[0];
    current2.textContent = texts[1];

    if (fraction <= 0) {
      current1.style.filter = "none";
      current1.style.opacity = "100%";
      current2.style.filter = "none";
      current2.style.opacity = "0%";
      return;
    }
    if (fraction >= 1) {
      current1.style.filter = "none";
      current1.style.opacity = "0%";
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      return;
    }

    current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    const invertedFraction = 1 - fraction;
    current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
    current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;
  });

  return (
    <div className="relative mx-auto w-full max-w-5xl h-24 md:h-36 lg:h-44 text-center [filter:url(#threshold)_blur(0.6px)] mt-12 md:mt-16 z-30">
      <span 
        className="absolute inset-x-0 top-0 m-auto inline-block w-full text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-[0.5em] text-white uppercase text-center select-none pointer-events-none" 
        ref={text1Ref}
      >
        {texts[0]}
      </span>
      <span 
        className="absolute inset-x-0 top-0 m-auto inline-block w-full text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wide text-center text-white max-w-4xl md:max-w-5xl mx-auto font-medium px-4 leading-relaxed select-none pointer-events-none" 
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
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

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
   
        {/* Main Hero Container */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl w-full text-center select-none pt-24 md:pt-28">
          
          {/* Wolf Logo Wrapper - Aspect ratio matches 3000x1403 image, height restricted to prevent overflow */}
          <div className="relative w-full max-w-[260px] sm:max-w-[360px] md:max-w-[480px] lg:max-w-[550px] aspect-[3000/1403] mb-4 md:mb-6 flex items-center justify-center group z-20">
            
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

          {/* Morphing Text Component */}
          <ScrollMorphingText 
            texts={[
              "VENZORX",
              "We build high-tech systems for businesses."
            ]}
          />
   
        </div>
      </div>
    </section>
  );
}
