"use client";
import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  glowColor?: "blue" | "cyan" | "purple";
  customSize?: boolean;
  className?: string;
}

export function GlowCard({ children, glowColor = "blue", className = "" }: GlowCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring config for smooth, lag-free hardware-accelerated movement
  const springX = useSpring(mouseX, { stiffness: 350, damping: 35, restDelta: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 35, restDelta: 0.5 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Handle color variations
  const glowStyles = {
    blue: "rgba(0, 191, 255, 0.14)",
    cyan: "rgba(0, 245, 255, 0.16)",
    purple: "rgba(180, 100, 255, 0.12)"
  };

  const selectedGlowColor = glowStyles[glowColor] || glowStyles.blue;

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-3xl bg-zinc-900/60 backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-start group cursor-pointer shadow-lg transition-all duration-300 hover:border-white/15 ${className}`}
    >
      {/* Hardware-Accelerated Dynamic Glow Layer */}
      <motion.div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(320px circle at ${springX}px ${springY}px, ${selectedGlowColor}, transparent 80%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full w-full">
        {children}
      </div>
    </div>
  );
}
