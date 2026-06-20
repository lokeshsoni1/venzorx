"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const AetherBackground = dynamic(() => import("@/components/ui/aether-background"), { ssr: false });

const ConcentricRingEmblem = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{
      scale: 1.03,
      filter: "drop-shadow(0 0 55px rgba(0, 245, 255, 0.55))",
      transition: { type: "spring", stiffness: 280, damping: 22 },
    }}
    transition={{ duration: 1.1, ease: "easeOut" }}
    className="relative flex items-center justify-center w-[280px] sm:w-[420px] md:w-[580px] aspect-square max-h-[50vh] cursor-pointer z-10"
  >
    <img
      src="/images/3d_wolf_logo.png"
      alt="Venzorx Wolf Logo"
      className="relative z-10 w-full h-full object-contain select-none pointer-events-none"
      style={{ imageRendering: "crisp-edges" }}
    />
  </motion.div>
);

export default function HeroSection() {
  const [isMobileGlowActive, setIsMobileGlowActive] = useState(false);

  useEffect(() => {
    const handleFirstMobileTouch = () => {
      if (window.innerWidth < 768) {
        setIsMobileGlowActive(true);
      }
      window.removeEventListener("pointerdown", handleFirstMobileTouch);
    };

    window.addEventListener("pointerdown", handleFirstMobileTouch, { passive: true });
    return () => window.removeEventListener("pointerdown", handleFirstMobileTouch);
  }, []);

  return (
    <section id="home" className="h-screen w-full relative overflow-hidden bg-transparent z-10">
      <div className="relative w-full h-full overflow-hidden">
        <AetherBackground />

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 md:px-8 pt-16 pb-6">
          <div className="flex flex-col items-center justify-center gap-2 max-w-5xl w-full h-full">

            {/* Main Wolf Graphic Bounding Container Context Node */}
            <div className="relative flex items-center justify-center transform-gpu backface-hidden z-10">
              {/* Dynamic Blue Glow Shadow Layer Block Mask */}
              <div 
                className={`
                  absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0 transform-gpu transition-opacity duration-1000 ease-out
                  md:opacity-100
                  ${isMobileGlowActive ? "opacity-100 scale-105" : "max-md:opacity-0 scale-95"}
                `}
                style={{ willChange: "opacity, transform" }}
              />

              <ConcentricRingEmblem />
            </div>

            <div className="w-full max-w-5xl px-2 relative z-20 mt-3 sm:mt-4 md:mt-6">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-[0.5em] text-white uppercase select-none pointer-events-none text-center drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] animate-hero-fade"
                style={{ fontFamily: "var(--font-stencil)", textIndent: "0.5em" }}
              >
                VENZORX
              </motion.h1>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
