import React from "react";
import { MessageSquare, Calendar, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#030712]/80 backdrop-blur-md py-12 px-6 md:px-12 relative z-40 antialiased select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          © 2026 VENZORX. ALL RIGHTS RESERVED.
        </span>
        <div className="flex items-center space-x-6">
          {/* Official Mail Dynamic Communication Link Element */}
          <a href="mailto:venzorx.co@gmail.com" title="Email VenzorX">
            <Mail className="h-4 w-4 text-zinc-400 hover:text-cyan-400 transition-colors duration-300 transform-gpu hover:scale-110" />
          </a>
          <a
            href="https://instagram.com/venzorx.co"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors duration-300 transform-gpu hover:scale-110"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href="https://wa.me/918595598458" target="_blank" rel="noreferrer" title="WhatsApp">
            <MessageSquare className="h-4 w-4 text-zinc-400 hover:text-emerald-400 transition-colors duration-300 transform-gpu hover:scale-110" />
          </a>
          <a href="https://calendly.com/venzorx-co/30min" target="_blank" rel="noreferrer" title="Calendly">
            <Calendar className="h-4 w-4 text-zinc-400 hover:text-cyan-400 transition-colors duration-300 transform-gpu hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
}
