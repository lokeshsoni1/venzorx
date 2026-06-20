"use client";

import React from "react";

interface PerformanceCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export function GlowCard({ children, className = "", style }: PerformanceCardProps) {
  return (
    <div 
      className={`transform-gpu backface-hidden will-change-transform translate-z-0 relative transition-all duration-300 subpixel-antialiased ${className}`}
      style={{ 
        contain: "layout paint style",
        ...style 
      }}
    >
      {children}
    </div>
  );
}

export function SpotlightCard({ children, className = "", style }: PerformanceCardProps) {
  return (
    <div 
      className={`transform-gpu backface-hidden will-change-transform translate-z-0 relative overflow-hidden subpixel-antialiased ${className}`}
      style={{ 
        contain: "layout paint style",
        ...style 
      }}
    >
      {children}
    </div>
  );
}
