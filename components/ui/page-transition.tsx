"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"], // Geometric block-style weight 800+
  variable: "--font-syne",
});

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // Animation lifecycle states: 'idle' | 'phase1' | 'phase2' | 'phase3'
  const [phase, setPhase] = useState<"idle" | "phase1" | "phase2" | "phase3">("idle");
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      // Find the closest anchor tag
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");

      // Skip external links, hash anchors, non-http links, or blank targets
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || target === "_blank") {
        return;
      }

      // Check if it's an internal link
      try {
        const targetUrlObj = new URL(href, window.location.origin);
        const currentUrlObj = new URL(window.location.href);

        if (targetUrlObj.origin === currentUrlObj.origin) {
          // If navigating to the exact same path, skip transition to avoid redundant runs
          if (targetUrlObj.pathname === currentUrlObj.pathname && targetUrlObj.search === currentUrlObj.search) {
            return;
          }

          e.preventDefault();
          setTargetUrl(href);
          setPhase("phase1");
        }
      } catch (err) {
        // Fallback for relative paths
        if (href.startsWith("/")) {
          e.preventDefault();
          setTargetUrl(href);
          setPhase("phase1");
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  // Handle the rigid 1.5-second timeline sequence
  useEffect(() => {
    if (phase === "phase1") {
      // Step 1: Synchronized Drop. Duration: 500ms.
      // Backdrop panel drops from y: "-100%" to y: "0%".
      const timer1 = setTimeout(() => {
        setPhase("phase2");
      }, 500);

      return () => clearTimeout(timer1);
    }

    if (phase === "phase2") {
      // Step 2: Spring Text Pop & Router Detonation. Duration: 550ms.
      // Center "venzorX" text is revealed.
      // Text pop scale sequence takes 350ms, followed by a 200ms hold phase.
      // Trigger the router push strictly during the 200ms hold phase (at 350ms into Phase 2).
      const routeChangeTimer = setTimeout(() => {
        if (targetUrl) {
          startTransition(() => {
            router.push(targetUrl);
          });
        }
      }, 350);

      // Phase 3 transition triggers at 550ms of Phase 2 (total 1050ms from start)
      const timer2 = setTimeout(() => {
        setPhase("phase3");
      }, 550);

      return () => {
        clearTimeout(routeChangeTimer);
        clearTimeout(timer2);
      };
    }

    if (phase === "phase3") {
      // Step 3: Wipe Out. Duration: 450ms.
      // Fade out typography, and slide background overlay panel back up (y: "-100%").
      const timer3 = setTimeout(() => {
        setPhase("idle");
        setTargetUrl(null);
      }, 450);

      return () => clearTimeout(timer3);
    }
  }, [phase, targetUrl, router]);

  if (phase === "idle") return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden select-none"
        style={{
          transform: "translate3d(0, 0, 0)",
          willChange: "transform, opacity",
        }}
      >
        {/* Background Overlay Canvas */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={
            phase === "phase1"
              ? { y: "0%" }
              : phase === "phase2"
              ? { y: "0%" }
              : { y: "-100%" }
          }
          transition={
            phase === "phase1"
              ? { duration: 0.50, ease: [0.16, 1, 0.3, 1] }
              : phase === "phase3"
              ? { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
              : { duration: 0 }
          }
          className="absolute inset-0 w-full h-full pointer-events-auto"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbpdexty8/image/upload/v1783590720/IMG_20260709_151908_dbgkrv.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translate3d(0, 0, 0)",
            willChange: "transform",
          }}
        >
          {/* Centered Brand Text Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-4xl px-4 flex flex-col items-center justify-center">
              {/* Vertical alignment calibration: brand text sits perfectly underneath/around eyes and mouth zone */}
              <div className="mt-[22%] md:mt-[15%]">
                <AnimatePresence>
                  {phase === "phase2" && (
                    <motion.h1
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{
                        scale: [0.4, 1.2, 1.0],
                        opacity: [0, 1, 1],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.55,
                        times: [0, 0.63, 1.0], // Scales to peak around 350ms, then holds
                        ease: "easeOut",
                      }}
                      className={`${syne.variable} font-syne font-black text-white text-6xl sm:text-7xl md:text-9xl uppercase select-none`}
                      style={{
                        letterSpacing: "0.05em",
                        transform: "translate3d(0, 0, 0)",
                        willChange: "transform, opacity",
                        filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.95)) drop-shadow(0 4px 6px rgba(0,0,0,0.8))",
                      }}
                    >
                      venzorX
                    </motion.h1>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

