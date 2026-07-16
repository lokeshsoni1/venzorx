"use client";

import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";

import { GlowCard } from "@/components/ui/spotlight-card";

export interface Feature {
  text: string;
}

export interface Benefit {
  text: string;
  icon: LucideIcon;
}

export interface SinglePricingCardProps {
  badge?: { icon: LucideIcon; text: string };
  title: string;
  subtitle: string;
  price: { current: string; subtext: string };
  benefits: Benefit[];
  features: Feature[];
  featuresIcon: LucideIcon;
  featuresTitle?: string;
  primaryButton: { text: string; icon: LucideIcon; href: string };
  className?: string;
}

export function SinglePricingCard({
  badge,
  title,
  subtitle,
  price,
  benefits,
  features,
  featuresIcon,
  featuresTitle = "Included Features",
  primaryButton,
  className,
}: SinglePricingCardProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isInViewRaw = useInView(sectionRef, { once: true, amount: 0.1 });
  const isInView = mounted && isInViewRaw;

  const BadgeIcon = badge?.icon;
  const FeaturesIcon = featuresIcon;
  const PrimaryButtonIcon = primaryButton.icon;

  return (
    <div ref={sectionRef} className={`w-full max-w-4xl mx-auto py-12 relative z-10 ${className || ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        style={{ transformStyle: "preserve-3d" }}
        className="transform-gpu backface-hidden will-change-transform"
      >
        <motion.div
          animate={isInView ? { y: [-4, 4, -4] } : { y: 0 }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="transform-gpu backface-hidden will-change-transform"
        >
          <GlowCard glowColor="purple" customSize={true} className="overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-2xl relative group rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col md:flex-row">
              
              {/* Left Box: Value Proposition & CTA */}
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-between text-left border-b md:border-b-0 md:border-r border-white/5 bg-zinc-950/20">
                <div>
                  {badge && (
                    <div className="flex items-center mb-6">
                      <Badge className="px-3 py-1 bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 font-mono tracking-wider text-xs">
                        {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5 mr-1.5" />}
                        <span>{badge.text}</span>
                      </Badge>
                    </div>
                  )}
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight uppercase font-sans">{title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 tracking-normal">{subtitle}</p>

                  <div className="flex flex-col mb-8">
                    <span className="text-4xl font-black text-white tracking-tight">{price.current}</span>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1.5">{price.subtext}</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                            <Icon className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-zinc-200 text-sm font-medium tracking-wide">{benefit.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Lone High-Converting Calendly Redirect Button */}
                <div className="mt-6 w-full flex justify-center md:justify-start">
                  <a 
                    href={primaryButton.href}
                    className="inline-flex items-center justify-center gap-3 w-full max-w-[420px] h-auto px-7 py-4 text-sm font-bold uppercase tracking-widest text-white rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] select-none text-center transform-gpu will-change-transform active:scale-95"
                    style={{
                      background: 'rgba(6, 182, 212, 0.15)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                    }}
                  >
                    <PrimaryButtonIcon className="h-4 w-4 text-cyan-400 animate-pulse shrink-0" />
                    <span className="truncate whitespace-normal text-center leading-normal">{primaryButton.text}</span>
                  </a>
                </div>
              </div>

              {/* Right Box: Technical Verification Matrix */}
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center text-left bg-zinc-950/10">
                <div>
                  <h4 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6">{featuresTitle}</h4>
                  <div className="grid grid-cols-1 gap-3.5">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/5 border border-cyan-500/10 shrink-0">
                          <FeaturesIcon className="h-2.5 w-2.5 text-cyan-400" />
                        </div>
                        <span className="text-zinc-300 text-sm font-normal tracking-wide">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </GlowCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
