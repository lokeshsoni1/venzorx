"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function GradientText({
  className,
  children,
  as: Component = "span",
  ...props
}: GradientTextProps) {
  return (
    <span 
      className={cn(
        "relative inline-flex overflow-hidden bg-transparent transform-gpu backface-hidden select-none",
        className
      )}
      {...props}
    >
      {/* Wrapper node applying the absolute text mask and clipping parameters over dynamic layers */}
      <span className="relative z-10 bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent font-inherit tracking-inherit pointer-events-none block">
        {children}
      </span>
      
      {/* Floating dynamic animated aura layers - Force text containment masks inside here */}
      <span className="pointer-events-none absolute inset-0 mix-blend-lighten z-0 transform-gpu bg-clip-text text-transparent">
        <span className="pointer-events-none absolute -top-1/2 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-1_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-3))] mix-blend-overlay blur-[0.75rem] transform-gpu" />
        <span className="pointer-events-none absolute right-0 top-0 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-2_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-2))] mix-blend-overlay blur-[0.75rem] transform-gpu" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-3_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-1))] mix-blend-overlay blur-[0.75rem] transform-gpu" />
        <span className="pointer-events-none absolute -bottom-1/2 right-0 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-4_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-5))] mix-blend-overlay blur-[0.75rem] transform-gpu" />
      </span>
    </span>
  );
}
