"use client";

import React from "react";

interface PerformanceCardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function GlowCard({ children, className = "" }: PerformanceCardProps) {
  return (
    <div 
      className={`relative p-8 rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-cyan-500/40 hover:bg-zinc-900/50 transform-gpu hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] overflow-hidden ${className}`}
    >
      {/* Decorative localized ambient glowing background matrix dot element */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none transition-opacity duration-300 opacity-50 group-hover:opacity-100" />
      <div className="relative z-10 w-full h-full flex flex-col justify-between items-start">
        {children}
      </div>
    </div>
  );
}

export function SpotlightCard({ children, className = "" }: PerformanceCardProps) {
  return (
    <div 
      className={`relative p-8 rounded-2xl border border-white/10 bg-zinc-950/30 backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-emerald-500/40 hover:bg-zinc-900/40 transform-gpu hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] overflow-hidden ${className}`}
    >
      {/* Decorative localized ambient glowing background matrix dot element */}
      <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none transition-opacity duration-300 opacity-50 group-hover:opacity-100" />
      <div className="relative z-10 w-full h-full flex flex-col justify-between items-start">
        {children}
      </div>
    </div>
  );
}
