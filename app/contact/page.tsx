// @/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { MessageSquare, MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const GlobalSystemShaderBackdrop = dynamic(
  () => import("@/components/ui/global-system-shader-backdrop").then((mod) => mod.GlobalSystemShaderBackdrop),
  { ssr: false }
);

function ContactForm() {
  const [formData, setFormData] = useState({
    identity: "",
    niche: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Terminal input handled or logged for representation
    console.log("Terminal session tracking data submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {/* Identity Field */}
      <input
        type="text"
        placeholder="Client Identity / Full Name"
        value={formData.identity}
        onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
        className="bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:border-cyan-400/70 outline-none text-sm w-full mb-4 transition-colors transform-gpu backface-hidden will-change-transform translate-z-0"
        required
      />

      {/* Business / Niche Field */}
      <input
        type="text"
        placeholder="Business Name / Operational Niche"
        value={formData.niche}
        onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
        className="bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:border-cyan-400/70 outline-none text-sm w-full mb-4 transition-colors transform-gpu backface-hidden will-change-transform translate-z-0"
        required
      />

      {/* Message Box */}
      <textarea
        placeholder="Describe Your Architectural Bottlenecks / Message"
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:border-cyan-400/70 outline-none text-sm w-full mb-6 resize-none transition-colors transform-gpu backface-hidden will-change-transform translate-z-0"
        required
      />

      {/* MULTI-CHANNEL ACTION LINK GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {/* CTA 01 (CALENDLY SCHEDULER) */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://calendly.com/venzorx-co/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-mono text-xs tracking-wider font-bold uppercase rounded-xl py-4 transition-all duration-300 shadow-[0_10px_25px_rgba(6,182,212,0.15)] text-center cursor-pointer transform-gpu backface-hidden will-change-transform translate-z-0"
        >
          <Calendar className="h-4 w-4 shrink-0" />
          <span>BOOK ARCHITECTURE CALL</span>
        </motion.a>

        {/* CTA 02 (DIRECT WHATSAPP INTERACTION) */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://wa.me/918595598458"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-white/10 bg-zinc-950/40 hover:bg-zinc-950/80 text-white font-mono text-xs tracking-wider font-bold uppercase rounded-xl py-4 transition-all duration-300 text-center cursor-pointer transform-gpu backface-hidden will-change-transform translate-z-0"
        >
          <MessageCircle className="h-4 w-4 text-green-400 shrink-0" />
          <span>CONNECT VIA WHATSAPP</span>
        </motion.a>
      </div>
    </form>
  );
}

export default function StandaloneContactPage() {
  return (
    <main className="w-full min-h-screen relative py-28 px-6 md:px-12 flex flex-col items-center justify-center bg-[#030712] overflow-hidden antialiased select-none">
      {/* Neon Spectral Aura */}
      <div className="absolute bg-cyan-500/5 blur-[150px] h-[550px] w-[550px] pointer-events-none top-1/4 z-0" />

      {/* Global Shader Backdrop Canvas */}
      <GlobalSystemShaderBackdrop />

      {/* TYPOGRAPHIC AGGRESSIVE HOOK */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-black text-white text-center tracking-tight uppercase mb-6 font-sans z-10">
          READY TO ELIMINATE COMPETITION?
        </h1>
        <p className="text-base md:text-xl font-mono text-cyan-400 text-center tracking-wider uppercase z-10">
          Worst case: clarity. Best case: secure an unfair market advantage.
        </p>
      </div>

      {/* THE GLASSMORPHIC TERMINAL FORM MATRIX CONTAINER */}
      <div 
        className="w-full max-w-xl mx-auto p-8 rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.7)] mb-12 relative z-10 transform-gpu backface-hidden will-change-transform translate-z-0"
        style={{ contain: 'layout paint style', contentVisibility: 'auto' }}
      >
        <ContactForm />
      </div>
    </main>
  );
}
