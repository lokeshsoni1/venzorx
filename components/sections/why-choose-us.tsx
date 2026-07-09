"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ShieldCheck, Activity, Globe } from 'lucide-react';

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up scroll tracking over 300vh of space (Unified for all viewports)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Stacking transform configurations: Card scales down to 0.94 and drops to 0.6 opacity as next card overlaps
  const card1Scale = useTransform(scrollYProgress, [0.0, 0.33], [1.0, 0.94]);
  const card1Opacity = useTransform(scrollYProgress, [0.0, 0.33], [1.0, 0.6]);

  const card2Y = useTransform(scrollYProgress, [0.0, 0.33], ["100vh", "0vh"]);
  const card2Scale = useTransform(scrollYProgress, [0.33, 0.66], [1.0, 0.94]);
  const card2Opacity = useTransform(
    scrollYProgress,
    [0.0, 0.1, 0.33, 0.66],
    [0.0, 1.0, 1.0, 0.6]
  );

  const card3Y = useTransform(scrollYProgress, [0.33, 0.66], ["100vh", "0vh"]);
  const card3Scale = useTransform(scrollYProgress, [0.66, 1.0], [1.0, 0.94]);
  const card3Opacity = useTransform(
    scrollYProgress,
    [0.33, 0.43, 0.66, 1.0],
    [0.0, 1.0, 1.0, 0.6]
  );

  const card4Y = useTransform(scrollYProgress, [0.66, 1.0], ["100vh", "0vh"]);
  const card4Opacity = useTransform(
    scrollYProgress,
    [0.66, 0.76, 1.0],
    [0.0, 1.0, 1.0]
  );

  const cardsData = [
    {
      id: 1,
      Icon: Zap,
      title: "Built for Speed",
      description: "Delivery in weeks, not fiscal quarters. Rapid system deployment engineered via our custom battle-tested component production blueprints.",
    },
    {
      id: 2,
      Icon: ShieldCheck,
      title: "Enterprise Security",
      description: "SOC2-ready isolated custom codebase built with premium multi-layer encryption layers and absolute zero vulnerability vectors.",
    },
    {
      id: 3,
      Icon: Activity,
      title: "99.98% Fault Tolerance",
      description: "Systems engineered with multi-node edge computing models to withstand massive traffic spikes without dropping system frame metrics.",
    },
    {
      id: 4,
      Icon: Globe,
      title: "Global Scale Deployment",
      description: "Headless content structures optimized dynamically via distributed global CDNs for absolute maximum core web page-speed telemetry scores.",
    },
  ];

  const cards = [
    {
      ...cardsData[0],
      scale: card1Scale,
      opacity: card1Opacity,
      y: "0vh",
      zIndex: 10,
    },
    {
      ...cardsData[1],
      scale: card2Scale,
      opacity: card2Opacity,
      y: card2Y,
      zIndex: 20,
    },
    {
      ...cardsData[2],
      scale: card3Scale,
      opacity: card3Opacity,
      y: card3Y,
      zIndex: 30,
    },
    {
      ...cardsData[3],
      scale: 1.0,
      opacity: card4Opacity,
      y: card4Y,
      zIndex: 40,
    },
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[300vh] bg-transparent antialiased"
      style={{
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* Sticky Viewport Wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 md:px-12 select-none">
        
        {/* Why Choose Us Heading */}
        <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-10 md:mb-16 tracking-normal uppercase">
          Why Choose Us
        </h2>

        {/* Stacking Cards Absolute Box */}
        <div className="relative w-[92vw] max-w-5xl h-[65vh] flex items-center justify-center">
          {cards.map((card) => {
            const Icon = card.Icon;
            return (
              <motion.div
                key={card.id}
                style={{
                  y: card.y as any,
                  scale: card.scale as any,
                  opacity: card.opacity as any,
                  zIndex: card.zIndex,
                  background: "rgba(245, 250, 255, 0.08)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  boxShadow: "0 20px 50px rgba(0, 15, 40, 0.3)",
                  transform: "translate3d(0, 0, 0)",
                  willChange: "transform, opacity, backdrop-filter",
                }}
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden"
              >
                <div 
                  className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 h-full w-full p-8 md:p-12"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                >
                  <div className="flex items-center gap-4 md:gap-6 min-w-[280px]" style={{ transform: "translate3d(0, 0, 0)" }}>
                    <Icon className="text-cyan-400 h-10 w-10 md:h-12 md:w-12 shrink-0" />
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase font-sans">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-zinc-200 text-base md:text-lg font-normal leading-relaxed tracking-wide max-w-2xl" style={{ transform: "translate3d(0, 0, 0)" }}>
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
