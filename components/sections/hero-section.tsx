"use client";

import { motion } from "framer-motion";
import AetherBackground from "@/components/ui/aether-background";

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
    className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[580px] md:h-[580px] cursor-pointer"
  >
    <img
      src="/images/3d_wolf_logo.png"
      alt="Venzorx Wolf Logo"
      className="relative z-10 w-full h-auto object-contain select-none pointer-events-none"
      style={{ imageRendering: "crisp-edges" }}
    />
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-transparent z-10">
      <div className="relative w-full h-full overflow-hidden">

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

        <AetherBackground />

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 md:px-8 pt-20 pb-8">
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 max-w-5xl w-full">

            <ConcentricRingEmblem />

            <div className="w-full max-w-5xl px-2">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-2xl sm:text-4xl md:text-5xl font-sans font-black tracking-[0.5em] text-white uppercase select-none pointer-events-none text-center"
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
