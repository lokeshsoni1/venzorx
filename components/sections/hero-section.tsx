"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import MistBackground from "@/components/ui/mist-background";
import Lenis from "lenis";

const useMorphingText = (texts: string[], scrollProgress: number) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      const wrapper = wrapperRef.current;
      if (!current1 || !current2 || !wrapper || !texts || texts.length === 0) return;

      current1.textContent = texts[0];
      current2.textContent = texts[1];

      if (fraction <= 0) {
        wrapper.style.filter = "none";
        current1.style.filter = "none";
        current1.style.opacity = "100%";
        current2.style.filter = "none";
        current2.style.opacity = "0%";
        return;
      }

      if (fraction >= 1) {
        wrapper.style.filter = "none";
        current1.style.filter = "none";
        current1.style.opacity = "0%";
        current2.style.filter = "none";
        current2.style.opacity = "100%";
        return;
      }

      wrapper.style.filter = "url(#threshold)";
      current2.style.filter = `blur(${Math.min(4 / fraction - 4, 8)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(4 / invertedFraction - 4, 8)}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;
    },
    [texts],
  );

  useEffect(() => {
    setStyles(scrollProgress);
  }, [scrollProgress, setStyles]);

  return { wrapperRef, text1Ref, text2Ref };
};

interface ScrollMorphingTextProps {
  texts: string[];
  scrollProgress: number;
}

const ScrollMorphingText: React.FC<ScrollMorphingTextProps> = ({ texts, scrollProgress }) => {
  const { wrapperRef, text1Ref, text2Ref } = useMorphingText(texts, scrollProgress);

  return (
    <div
      ref={wrapperRef}
      className="relative z-30 transform-gpu isolate mx-auto w-full max-w-5xl h-24 md:h-36 lg:h-44 text-center"
    >
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full max-w-[288px] sm:max-w-[408px] md:max-w-[504px] lg:max-w-[576px] text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.35em] text-white uppercase text-center select-none pointer-events-none transform-gpu antialiased"
        ref={text1Ref}
        style={{ fontFamily: "var(--font-stencil)" }}
      >
        {texts[0]}
      </span>
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-center text-white tracking-tight leading-tight max-w-4xl md:max-w-5xl mx-auto px-6 mt-8 select-none pointer-events-none transform-gpu antialiased"
        ref={text2Ref}
        style={{ opacity: 0 }}
      >
        {texts[1]}
      </span>

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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    const updateScrollProgress = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollable = container.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const raw = scrollTop / scrollable;
      const progress = Math.min(raw / 0.7, 1);
      setScrollProgress(progress);
    };

    lenis.on("scroll", updateScrollProgress);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    updateScrollProgress();

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[180vh] bg-transparent z-10">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">

        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl bg-zinc-900/40 backdrop-blur-md border border-white/5 px-8 py-3.5 rounded-full flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
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

        <MistBackground />

        <div className="relative z-10 w-full h-full max-w-5xl flex items-center justify-center select-none">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[288px] sm:max-w-[408px] md:max-w-[504px] lg:max-w-[576px] aspect-[3000/1403] flex items-center justify-center group z-20">
            <div className="absolute w-[80%] h-[120%] rounded-full bg-[radial-gradient(circle,_rgba(0,245,255,0.18)_0%,_rgba(0,245,255,0)_70%)] filter blur-3xl pointer-events-none z-0 mix-blend-screen group-hover:scale-105 transition-transform duration-1000 ease-out" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.06,
                filter: "drop-shadow(0 0 25px rgba(0, 245, 255, 0.6))",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full flex items-center justify-center z-20 relative cursor-pointer"
            >
              <img
                src="/images/3d_wolf_logo.png"
                alt="Venzorx Wolf Logo"
                className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                style={{ imageRendering: "crisp-edges" }}
              />
            </motion.div>
          </div>

          <div className="absolute top-[calc(50%+108px)] sm:top-[calc(50%+144px)] md:top-[calc(50%+180px)] lg:top-[calc(50%+216px)] left-1/2 -translate-x-1/2 w-full z-30">
            <ScrollMorphingText
              scrollProgress={scrollProgress}
              texts={[
                "VENZORX",
                "WE BUILD HIGH-TECH SYSTEMS FOR BUSINESSES.",
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
