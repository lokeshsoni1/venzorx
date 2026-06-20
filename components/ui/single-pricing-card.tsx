"use client";

import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { LucideIcon } from "lucide-react";
import { Star } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

import { GlowCard } from "@/components/ui/spotlight-card";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatar: string;
}

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
  testimonials: Testimonial[];
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
  testimonials,
  className,
}: SinglePricingCardProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const BadgeIcon = badge?.icon;
  const FeaturesIcon = featuresIcon;
  const PrimaryButtonIcon = primaryButton.icon;

  return (
    <div ref={sectionRef} className={`w-full max-w-4xl mx-auto py-12 relative z-10 ${className || ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
              <div className="mt-6">
                <Button
                  className="w-full gap-3 group bg-cyan-500 text-white hover:bg-cyan-400 font-bold rounded-xl py-6 text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_10px_30px_rgba(6,182,212,0.2)]"
                  size="lg"
                  asChild
                >
                  <a href={primaryButton.href}>
                    <PrimaryButtonIcon className="h-4 w-4 text-white animate-pulse" />
                    <span>{primaryButton.text}</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Box: Technical Verification Matrix & Reviews Rotation */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-between text-left bg-zinc-950/10">
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

              {/* Dynamic Bottom Rotator Reviews Verification Block */}
              {testimonials.length > 0 && (
                <div className="mt-10 pt-8 border-t border-white/5">
                  <div className="relative min-h-[120px]">
                    <AnimatePresence mode="wait">
                      {testimonials.map((testimonial, index) => index === currentTestimonialIndex && (
                        <motion.div
                          key={testimonial.id}
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.35 }}
                          className="flex flex-col justify-between h-full"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-8 h-8 rounded-full object-cover border border-white/10" />
                            <div>
                              <p className="font-bold text-white text-sm tracking-tight">{testimonial.name}</p>
                              <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">{testimonial.role} {testimonial.company && `@ ${testimonial.company}`}</p>
                            </div>
                            <div className="ml-auto flex space-x-0.5">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-cyan-400 text-cyan-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-zinc-300 text-xs md:text-sm italic leading-relaxed font-normal">"{testimonial.content}"</p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </div>

          </div>
        </GlowCard>
      </motion.div>
    </div>
  );
}
