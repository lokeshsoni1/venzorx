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
    offset: ["start start", "end end"]
  });
  
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-10 h-[180vh] w-full bg-transparent", className)}>
      <div className="sticky top-0 mx-auto flex h-screen max-w-6xl items-center bg-transparent px-6 py-12 justify-center">
        <p className="flex flex-wrap justify-center text-center p-5 text-4xl font-black text-white/10 md:p-8 md:text-6xl lg:text-7xl uppercase font-sans tracking-normal select-none leading-none transform-gpu backface-hidden">
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
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-3 my-2 inline-block">
      <span className="absolute opacity-15 text-white transform-gpu">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] transform-gpu backface-hidden will-change-[opacity]"
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
