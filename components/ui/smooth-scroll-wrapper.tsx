"use client";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ 
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical', 
      gestureOrientation: 'vertical', 
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5
    });
    
    let rafId: number;
    function raf(time: number) { 
      lenis.raf(time); 
      rafId = requestAnimationFrame(raf); 
    }
    
    rafId = requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);
  
  return <div className="antialiased select-none">{children}</div>;
}
