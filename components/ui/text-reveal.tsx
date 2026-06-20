"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  
  const words = text.split(" ");

  return (
    <div 
      ref={targetRef} 
      className={cn("relative z-10 w-full bg-transparent py-4 my-0 select-none overflow-hidden transform-gpu", className)}
      style={{ contain: "layout paint" }}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center bg-transparent py-2">
        <p className="flex flex-wrap justify-center text-center font-sans text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-normal text-white/20 leading-[1.1] transform-gpu backface-hidden">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mx-2 my-1 inline-block whitespace-nowrap transform-gpu">
      <span className="absolute opacity-5 text-white/5 transform-gpu backface-hidden">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] transform-gpu backface-hidden will-change-[opacity]"
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
