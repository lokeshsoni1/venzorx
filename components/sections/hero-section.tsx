"use client";

import React from "react";
import { motion } from "framer-motion";
import MistBackground from "@/components/ui/mist-background";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 z-10">
      
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
      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl w-full text-center select-none pt-12">
        
        {/* Wolf Logo Wrapper - Aspect ratio matches 899x293 image, height restricted to prevent overflow */}
        <div className="relative w-full max-w-[320px] sm:max-w-[480px] md:max-w-[700px] lg:max-w-[800px] aspect-[899/293] mb-4 md:mb-6 flex items-center justify-center group z-20">
          
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

        {/* Brand Text Branding "V E N Z O R X" (Aurora Stencil Style Font - Enhanced Boldness & Wider Spacing) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.0, ease: "easeOut" }}
          className="flex items-center justify-center w-full px-4 sm:px-8 md:px-16 mt-[-45px] md:mt-[-65px] z-30"
        >
          {/* Custom SVG Stencil Typo path rendering with thick white strokes for bold premium look */}
          <svg 
            viewBox="0 0 680 80" 
            className="w-full max-w-[320px] sm:max-w-[460px] md:max-w-[550px] h-auto fill-current text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="white" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" paintOrder="stroke fill">
              {/* V */}
              <g transform="translate(0, 0)">
                <path d="M 10 15 L 26 15 L 43 62 L 43 68 L 35 68 L 10 15 Z" />
                <path d="M 80 15 L 64 15 L 47 62 L 47 68 L 55 68 L 80 15 Z" />
              </g>
              
              {/* E */}
              <g transform="translate(18, 0)">
                <path d="M 110 15 L 117 15 L 117 68 L 110 68 Z" />
                <path d="M 124 15 L 158 15 L 158 22 L 124 22 Z" />
                <path d="M 124 38 L 150 38 L 150 45 L 124 45 Z" />
                <path d="M 124 61 L 158 61 L 158 68 L 124 68 Z" />
              </g>

              {/* N */}
              <g transform="translate(36, 0)">
                <path d="M 188 15 L 195 15 L 195 68 L 188 68 Z" />
                <path d="M 230 15 L 237 15 L 237 68 L 230 68 Z" />
                <path d="M 198 15 L 205 15 L 228 64 L 228 68 L 221 68 L 198 20 Z" />
              </g>

              {/* Z */}
              <g transform="translate(54, 0)">
                <path d="M 266 15 L 306 15 L 306 22 L 266 22 Z" />
                <path d="M 300 22 L 307 22 L 271 62 L 266 62 L 266 56 Z" />
                <path d="M 266 61 L 306 61 L 306 68 L 266 68 Z" />
              </g>

              {/* O */}
              <g transform="translate(72, 0)">
                <path d="M 348 15 C 336 15 329 26 329 42 C 329 59 336 68 348 68 L 350 68 L 350 61 L 348 61 C 340 61 335 53 335 42 C 335 30 340 22 348 22 L 350 22 L 350 15 Z" />
                <path d="M 374 15 C 386 15 393 26 393 42 C 393 59 386 68 374 68 L 372 68 L 372 61 L 374 61 C 382 61 387 53 387 42 C 387 30 382 22 374 22 L 372 22 L 372 15 Z" />
              </g>

              {/* R */}
              <g transform="translate(90, 0)">
                <path d="M 422 15 L 429 15 L 429 68 L 422 68 Z" />
                <path d="M 434 15 L 456 15 C 463 15 468 18 468 26 C 468 34 463 38 456 38 L 434 38 L 434 31 L 456 31 C 461 31 462 29 462 26 C 462 22 461 21 456 21 L 434 21 Z" />
                <path d="M 441 39 L 468 68 L 459 68 L 434 39 Z" />
              </g>

              {/* X (Thickened stroke width & translated further for wide spacing) */}
              <g transform="translate(108, 0)" strokeWidth="5.5">
                <path d="M 498 15 L 512 15 L 528 35 L 528 40 L 519 40 L 498 15 Z" />
                <path d="M 552 15 L 538 15 L 522 35 L 522 40 L 531 40 L 552 15 Z" />
                <path d="M 523 44 L 523 49 L 505 68 L 497 68 L 503 68 L 523 44 Z" />
                <path d="M 527 44 L 527 49 L 545 68 L 553 68 L 547 68 L 527 44 Z" />
              </g>
            </g>
          </svg>
        </motion.div>
 
      </div>
    </section>
  );
}
