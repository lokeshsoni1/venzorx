"use client";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

declare global {
  interface Window {
    __lenisInstance?: Lenis;
  }
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Single-instance enforcement to prevent multiple scroll listeners concurrently
    if (typeof window !== "undefined") {
      if (window.__lenisInstance) {
        window.__lenisInstance.destroy();
      }
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });
    
    if (typeof window !== "undefined") {
      window.__lenisInstance = lenis;
    }
    
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    
    rafId = requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      if (typeof window !== "undefined" && window.__lenisInstance === lenis) {
        window.__lenisInstance = undefined;
      }
    };
  }, []);
  
  return (
    <div className="antialiased selection-none bg-[#030712] text-white w-full min-h-screen">
      {children}
    </div>
  );
}
