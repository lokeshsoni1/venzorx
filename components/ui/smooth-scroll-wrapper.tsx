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

    lenis.on('scroll', (e: any) => {
      if (Math.abs(e.velocity) > 0.5) {
        document.body.classList.add('is-scrolling');
      } else {
        document.body.classList.remove('is-scrolling');
      }
    });
    
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    
    rafId = requestAnimationFrame(raf);

    // Passive low-level event bindings to keep scroll gesture loops independent of layout threads
    const passiveOpts = { passive: true };
    const handleGesture = () => {};
    window.addEventListener("scroll", handleGesture, passiveOpts);
    window.addEventListener("wheel", handleGesture, passiveOpts);
    window.addEventListener("touchstart", handleGesture, passiveOpts);
    window.addEventListener("touchmove", handleGesture, passiveOpts);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleGesture);
      window.removeEventListener("wheel", handleGesture);
      window.removeEventListener("touchstart", handleGesture);
      window.removeEventListener("touchmove", handleGesture);
      if (typeof document !== "undefined") {
        document.body.classList.remove('is-scrolling');
      }
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
