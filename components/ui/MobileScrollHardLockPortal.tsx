"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CardData {
  id: number;
  Icon: LucideIcon;
  title: string;
  description: string;
  phase?: string;
}

interface MobileScrollHardLockPortalProps {
  cards: CardData[];
  sectionTitle: string;
  sectionSubtitle?: string;
}

export function MobileScrollHardLockPortal({
  cards,
  sectionTitle,
  sectionSubtitle,
}: MobileScrollHardLockPortalProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef<number | null>(null);

  // Screen Matrix Detection: Validate <= 1024px and touch capability
  useEffect(() => {
    const checkDevice = () => {
      const matchViewport = window.innerWidth <= 1024;
      const matchTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(matchViewport && matchTouch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Monitor when the section enters the focus center of the viewport to trigger scroll freeze
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section occupies a significant portion of the viewport center
          if (entry.isIntersecting) {
            setIsActive(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "-25% 0px -25% 0px", // Focus on the center 50% of the screen
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  // Global Body Freeze Matrix
  useEffect(() => {
    if (!isActive || !isMobile) return;

    const html = document.documentElement;
    const body = document.body;

    // Apply strict styles to lock the root container and body
    const originalHtmlStyle = html.getAttribute("style") || "";
    const originalBodyStyle = body.getAttribute("style") || "";

    html.style.position = "fixed";
    html.style.top = "0";
    html.style.left = "0";
    html.style.width = "100vw";
    html.style.height = "100vh";
    html.style.overflow = "hidden";
    html.style.touchAction = "none";

    body.style.position = "fixed";
    body.style.top = "0";
    body.style.left = "0";
    body.style.width = "100vw";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    const preventTouch = (e: TouchEvent) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    // Paralyze touch scroll
    window.addEventListener("touchmove", preventTouch, { passive: false });
    window.addEventListener("pointermove", preventTouch as any, { passive: false });

    return () => {
      // Revert styles
      if (originalHtmlStyle) {
        html.setAttribute("style", originalHtmlStyle);
      } else {
        html.removeAttribute("style");
      }

      if (originalBodyStyle) {
        body.setAttribute("style", originalBodyStyle);
      } else {
        body.removeAttribute("style");
      }

      window.removeEventListener("touchmove", preventTouch);
      window.removeEventListener("pointermove", preventTouch as any);
    };
  }, [isActive, isMobile]);

  // Gesture Recognition
  const handleTouchStart = (e: React.TouchEvent) => {
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startYRef.current === null) return;
    const currentY = e.touches[0].clientY;
    const deltaY = startYRef.current - currentY;

    // Minimum swipe threshold of 50px
    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        // Swipe Up: advance slide
        if (currentIndex < cards.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          startYRef.current = null;
        } else {
          // Final slide + swipe up: Release unpin trigger
          setIsActive(false);
          startYRef.current = null;
        }
      } else {
        // Swipe Down: go back
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
          startYRef.current = null;
        } else {
          // Slide 0 + swipe down: Release unpin trigger (scroll back up)
          setIsActive(false);
          startYRef.current = null;
        }
      }
    }
  };

  if (!isMobile) return null;

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="w-full min-h-[60vh] flex flex-col items-center justify-center py-8 relative overflow-hidden bg-transparent"
      style={{
        WebkitOverflowScrolling: "touch",
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
      }}
    >
      {/* Header Info */}
      <div className="text-center px-4 mb-6 select-none z-10">
        <h2 className="text-2xl font-black text-white uppercase tracking-normal">
          {sectionTitle}
        </h2>
        {sectionSubtitle && (
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1">
            {sectionSubtitle}
          </p>
        )}
      </div>

      {/* Cards Stacking Sandbox */}
      <div className="relative w-[94vw] h-[62vh] flex items-center justify-center">
        {cards.map((card, index) => {
          const Icon = card.Icon;
          
          // Render styles depending on whether the card is active, incoming, or backgrounded
          let y = "100vh";
          let scale = 1.0;
          let opacity = 0;

          if (index === currentIndex) {
            y = "0px";
            scale = 1.0;
            opacity = 1.0;
          } else if (index < currentIndex) {
            // Underlying card (stacked behind active)
            y = "0px";
            scale = 0.94;
            opacity = 0.55;
          }

          return (
            <motion.div
              key={card.id}
              animate={{ y, scale, opacity }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                zIndex: card.id * 10,
                background: "rgba(235, 245, 255, 0.08)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                boxShadow: "0 20px 50px rgba(0, 15, 40, 0.3)",
                transform: "translate3d(0, 0, 0)",
                willChange: "transform, opacity, backdrop-filter",
              }}
              className="absolute inset-0 w-full h-full rounded-3xl p-6 flex flex-col justify-between overflow-hidden"
            >
              <div className="flex flex-col gap-4 h-full justify-between" style={{ transform: "translate3d(0, 0, 0)" }}>
                <div className="flex items-center gap-3" style={{ transform: "translate3d(0, 0, 0)" }}>
                  <Icon className="text-cyan-400 h-8 w-8 shrink-0" />
                  {card.phase && (
                    <span className="font-mono text-[10px] text-cyan-400/50 uppercase tracking-widest">
                      {card.phase}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {card.title}
                </h3>
                
                <p className="text-zinc-300 text-sm font-normal leading-relaxed flex-grow flex items-center">
                  {card.description}
                </p>

                {/* Micro indicator loops showing deck progress */}
                <div className="flex items-center gap-1.5 justify-end">
                  {cards.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === currentIndex ? "w-4 bg-cyan-400" : "w-1.5 bg-white/20"
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
