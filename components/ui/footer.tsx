import React from "react";
import { MessageSquare, Calendar, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#030712]/90 backdrop-blur-xl py-12 px-6 md:px-12 relative z-40 antialiased select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <span className="font-mono text-xs tracking-[0.25em] bg-gradient-to-r from-zinc-400 via-white to-zinc-500 bg-clip-text text-transparent uppercase font-bold">
          © 2026 VENZORX. ENGINE OF ABSOLUTE DISRUPTION.
        </span>
        <div className="flex items-center space-x-8">
          <a href="mailto:venzorx.co@gmail.com" className="group flex items-center space-x-2 text-zinc-400 hover:text-cyan-400 transition-colors duration-300 transform-gpu hover:scale-105">
            <Mail className="h-4 w-4 stroke-[2.5] text-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            <span className="font-mono text-[10px] font-black tracking-widest uppercase hidden sm:inline text-zinc-200">EMAIL</span>
          </a>
          <a href="https://instagram.com/venzorx.co" target="_blank" rel="noreferrer" className="group flex items-center space-x-2 text-zinc-400 hover:text-pink-500 transition-colors duration-300 transform-gpu hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-pink-500 filter drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="font-mono text-[10px] font-black tracking-widest uppercase hidden sm:inline text-zinc-200">IG</span>
          </a>
          <a href="https://wa.me/918595598458" target="_blank" rel="noreferrer" className="group flex items-center space-x-2 text-zinc-400 hover:text-emerald-400 transition-colors duration-300 transform-gpu hover:scale-105">
            <MessageSquare className="h-4 w-4 stroke-[2.5] text-emerald-400 filter drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
            <span className="font-mono text-[10px] font-black tracking-widest uppercase hidden sm:inline text-zinc-200">WHATSAPP</span>
          </a>
          <a href="https://calendly.com/venzorx-co/30min" target="_blank" rel="noreferrer" className="group flex items-center space-x-2 text-zinc-400 hover:text-cyan-400 transition-colors duration-300 transform-gpu hover:scale-105">
            <Calendar className="h-4 w-4 stroke-[2.5] text-cyan-500 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
            <span className="font-mono text-[10px] font-black tracking-widest uppercase hidden sm:inline text-zinc-200">CALENDLY</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
