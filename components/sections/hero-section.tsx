"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import MistBackground from "@/components/ui/mist-background";
import { cn } from "@/lib/utils";

const morphTime = 1.5;
const cooldownTime = 0.5;

const BINARY_STREAM = [
  "01001110", "11010010", "00101101", "10110001",
  "01100110", "10011001", "01010110", "11001010",
  "00110101", "10101001", "01110010", "10001101",
];

const HEX_STREAM = [
  "0x4F2A", "0x8B1C", "0x3E7D", "0xA091",
  "0x5C44", "0xF208", "0x1B6E", "0x9D33",
  "0x7A05", "0xC4F1", "0x2E89", "0x6B70",
];

const useMorphingText = (texts: string[], scrollProgress: number) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      const wrapper = wrapperRef.current;
      if (!current1 || !current2 || !wrapper || !texts?.length) return;

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

      const eased = Math.pow(fraction, 1 / morphTime);
      const inverted = 1 - eased;

      wrapper.style.filter = "url(#threshold)";
      current2.style.filter = `blur(${Math.min(4 / eased - 4, 6)}px)`;
      current2.style.opacity = `${Math.pow(eased, 0.4) * 100}%`;
      current1.style.filter = `blur(${Math.min(4 / Math.max(inverted, 0.001) - 4, 6)}px)`;
      current1.style.opacity = `${Math.pow(inverted, 0.4) * 100}%`;
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

const ScrollMorphingText = ({ texts, scrollProgress }: ScrollMorphingTextProps) => {
  const { wrapperRef, text1Ref, text2Ref } = useMorphingText(texts, scrollProgress);

  return (
    <div
      ref={wrapperRef}
      className="relative z-40 transform-gpu isolate w-full text-center min-h-[3.5rem] sm:min-h-[4.5rem] md:min-h-[5.5rem] lg:min-h-[6.5rem]"
    >
      <span
        ref={text1Ref}
        className="absolute inset-x-0 top-0 mx-auto block w-full text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-[0.6em] text-white transform-gpu antialiased select-none pointer-events-none uppercase"
        style={{ fontFamily: "var(--font-stencil)" }}
      >
        {texts[0]}
      </span>
      <span
        ref={text2Ref}
        className="absolute inset-x-0 top-0 mx-auto block w-full z-40 transform-gpu subpixel-antialiased text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-center max-w-4xl md:max-w-5xl px-6 leading-tight select-none pointer-events-none"
        style={{ fontFamily: "var(--font-calligraphy)", opacity: 0 }}
      >
        {texts[1]}
      </span>

      <svg className="hidden" aria-hidden="true">
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

const CornerReticle = ({
  position,
  label,
}: {
  position: "tl" | "tr" | "bl" | "br";
  label: string;
}) => {
  const posClass = {
    tl: "top-20 left-5 md:left-8",
    tr: "top-20 right-5 md:right-8",
    bl: "bottom-8 left-5 md:left-8",
    br: "bottom-8 right-5 md:right-8",
  }[position];

  const bracketClass = {
    tl: "border-l border-t",
    tr: "border-r border-t",
    bl: "border-l border-b",
    br: "border-r border-b",
  }[position];

  return (
    <div className={cn("fixed z-30 pointer-events-none select-none", posClass)}>
      <div className={cn("w-10 h-10 border-zinc-800/30", bracketClass)} />
      <p className="mt-1.5 text-[9px] font-mono text-zinc-600/40 tracking-wider">{label}</p>
      <p className="text-[9px] font-mono text-zinc-600/30 tracking-widest mt-0.5">◈ 00.00°</p>
    </div>
  );
};

const TelemetrySidebar = ({
  side,
  scrollProgress,
}: {
  side: "left" | "right";
  scrollProgress: number;
}) => {
  const stream = side === "left" ? BINARY_STREAM : HEX_STREAM;

  return (
    <div
      className={cn(
        "fixed top-1/2 -translate-y-1/2 z-20 h-56 md:h-72 w-14 overflow-hidden pointer-events-none select-none opacity-50",
        side === "left" ? "left-2 md:left-4" : "right-2 md:right-4",
      )}
    >
      <div className="animate-telemetry-scroll flex flex-col gap-2">
        {[...stream, ...stream].map((line, i) => (
          <span key={`${side}-${i}`} className="text-[8px] font-mono text-zinc-600/40 tracking-widest">
            {line}
          </span>
        ))}
      </div>
      <p className="absolute bottom-0 text-[8px] font-mono text-zinc-600/50 whitespace-nowrap rotate-90 origin-left translate-x-3">
        SCROLL:{(scrollProgress * 100).toFixed(0)}%
      </p>
    </div>
  );
};

const ConcentricRingEmblem = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{
      scale: 1.05,
      filter: "drop-shadow(0 0 30px rgba(0, 245, 255, 0.4))",
      transition: { type: "spring", stiffness: 280, damping: 22 },
    }}
    transition={{ duration: 1.1, ease: "easeOut" }}
    className="relative flex items-center justify-center w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] cursor-pointer"
  >
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="50%" stopColor="rgba(200,240,255,0.7)" />
          <stop offset="100%" stopColor="rgba(0,245,255,0.85)" />
        </linearGradient>
        <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx="100"
        cy="100"
        r="92"
        stroke="url(#ringGradient)"
        strokeWidth="1.2"
        filter="url(#ringGlow)"
        className="opacity-90"
      />
      <circle
        cx="100"
        cy="100"
        r="88"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.5"
        strokeDasharray="4 8"
      />
      <circle
        cx="100"
        cy="100"
        r="96"
        stroke="rgba(0,245,255,0.15)"
        strokeWidth="0.5"
        style={{ transform: "translateX(2px)", transformOrigin: "center" }}
      />

      {[0, 90, 180, 270].map((angle) => (
        <line
          key={angle}
          x1="100"
          y1="100"
          x2={100 + 94 * Math.cos((angle * Math.PI) / 180)}
          y2={100 + 94 * Math.sin((angle * Math.PI) / 180)}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.5"
        />
      ))}
    </svg>

    <img
      src="/images/3d_wolf_logo.png"
      alt="Venzorx Wolf Logo"
      className="relative z-10 w-[58%] h-auto object-contain select-none pointer-events-none"
      style={{ imageRendering: "crisp-edges" }}
    />
  </motion.div>
);

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
      <div className="sticky top-0 w-full h-screen overflow-hidden">

        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl bg-[#0d1117]/40 backdrop-blur-xl border border-white/5 px-8 py-3.5 rounded-full flex items-center justify-between shadow-[0_15px_50px_rgba(0,0,0,0.6)]">
          <div className="hidden md:flex items-center gap-8 font-mono text-[10px] tracking-[0.25em] font-bold text-zinc-400 uppercase">
            <a href="#" className="hover:text-[#00F5FF] transition-colors duration-300">HOME</a>
            <a href="#" className="hover:text-[#00F5FF] transition-colors duration-300">ABOUT US</a>
            <a href="#" className="hover:text-[#00F5FF] transition-colors duration-300">PRICING</a>
            <a href="#" className="hover:text-[#00F5FF] transition-colors duration-300">SERVICES</a>
            <a href="#" className="hover:text-[#00F5FF] transition-colors duration-300">CONTACT</a>
          </div>
          <button className="border border-white/20 px-5 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-white uppercase bg-transparent transition-all hover:bg-white hover:text-black cursor-pointer">
            CONNECT
          </button>
        </nav>

        <MistBackground />

        <CornerReticle position="tl" label="LAT:48.721 / LNG:2.156" />
        <CornerReticle position="tr" label="SYS:ONLINE / NODE:07" />
        <CornerReticle position="bl" label="GRID:ACTIVE / Z:0.00" />
        <CornerReticle position="br" label="SYNC:100% / AXIS:Y" />

        <TelemetrySidebar side="left" scrollProgress={scrollProgress} />
        <TelemetrySidebar side="right" scrollProgress={scrollProgress} />

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 md:px-8 pt-16 pb-12">
          <div className="flex flex-col items-center gap-5 sm:gap-6 md:gap-7 max-w-5xl w-full">

            <ConcentricRingEmblem />

            <div className="w-full max-w-5xl px-2">
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

      </div>
    </section>
  );
}
