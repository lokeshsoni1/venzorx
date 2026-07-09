"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CardData {
  id: number;
  Icon: LucideIcon;
  title: string;
  description: string;
  phase?: string;
}

interface MobileAutoFadeStackProps {
  cards: CardData[];
  sectionTitle: string;
  sectionSubtitle?: string;
}

export function MobileAutoFadeStack({
  cards,
  sectionTitle,
  sectionSubtitle,
}: MobileAutoFadeStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-Fade Trigger Matrix: Loop transition every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    <div
      className="w-full flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden bg-transparent select-none"
      style={{
        WebkitOverflowScrolling: "touch",
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
      }}
    >
      {/* Intro Header */}
      <div className="text-center px-4 mb-10 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-normal mb-3">
          {sectionTitle}
        </h2>
        {sectionSubtitle && (
          <p className="text-sm md:text-lg font-medium tracking-wide text-zinc-400 max-w-3xl leading-relaxed mx-auto">
            {sectionSubtitle}
          </p>
        )}
      </div>

      {/* Stacking Sandbox */}
      <div className="relative w-[94vw] max-w-xl h-[50vh] flex items-center justify-center">
        {cards.map((card, index) => {
          const Icon = card.Icon;
          
          // Determine placement and interpolation properties
          const isActive = index === activeIndex;
          const isUnderneath = index < activeIndex || (activeIndex === 0 && index === cards.length - 1 && cards.length > 1);

          let y = "100vh";
          let scale = 0.95;
          let opacity = 0;

          if (isActive) {
            y = "0px";
            scale = 1.0;
            opacity = 1.0;
          } else if (isUnderneath) {
            y = "0px";
            scale = 0.94;
            opacity = 0.55;
          }

          return (
            <motion.div
              key={card.id}
              animate={{ y, scale, opacity }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1], // clean spring-like easeOut transition
              }}
              style={{
                zIndex: isActive ? 30 : isUnderneath ? 20 : 10,
                background: "rgba(245, 250, 255, 0.08)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                boxShadow: "0 20px 50px rgba(0, 15, 40, 0.3)",
                transform: "translate3d(0, 0, 0)",
                willChange: "transform, opacity, backdrop-filter",
              }}
              className="absolute inset-0 w-full h-full rounded-3xl p-6 flex flex-col justify-between overflow-hidden"
            >
              <div 
                className="flex flex-col gap-4 h-full justify-between"
                style={{ transform: "translate3d(0, 0, 0)" }}
              >
                <div className="flex items-center gap-3" style={{ transform: "translate3d(0, 0, 0)" }}>
                  <Icon className="text-cyan-400 h-8 w-8 shrink-0" />
                  {card.phase && (
                    <span className="font-mono text-[10px] text-cyan-400/50 uppercase tracking-widest">
                      {card.phase}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black text-white uppercase font-sans">
                  {card.title}
                </h3>

                <p className="text-zinc-200 text-sm font-normal leading-relaxed flex-grow flex items-center">
                  {card.description}
                </p>

                {/* Dots indicator */}
                <div className="flex items-center gap-1.5 justify-end">
                  {cards.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === activeIndex ? "w-4 bg-cyan-400" : "w-1.5 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
