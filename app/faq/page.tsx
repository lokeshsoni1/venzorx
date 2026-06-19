// @/app/faq/page.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalSystemShaderBackdrop } from "@/components/ui/global-system-shader-backdrop";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700 transform-gpu backface-hidden will-change-transform">
      <button
        onClick={onToggle}
        className="w-full py-6 px-8 flex justify-between items-center text-left text-white font-sans text-lg font-bold tracking-tight uppercase hover:bg-white/5 transition-colors duration-200 outline-none select-none"
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-zinc-400 transition-transform duration-300 shrink-0 ml-4 ${
            isOpen ? "transform rotate-180 text-white" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-8 pb-6 font-sans text-sm md:text-base font-normal text-zinc-400 leading-relaxed bg-transparent antialiased">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function StandaloneFAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why should I pay you a premium when I can get a website for a fraction of the cost on WordPress or Wix?",
      answer: "Cheap builders give you a slow, generic site full of plugin glitches that crashes under traffic and looks exactly like your competitors. You pay us for custom, hardcoded speed that converts visitors into paying customers and builds actual business authority.",
    },
    {
      question: "What if the website doesn't deliver the results or conversions you promised?",
      answer: "We don't sell magic; we sell high-performance engineering. We optimize loading speeds to under 1 second, remove every user friction point, and design a flawless layout. If the technical metrics we agreed upon aren't met, we sit down and re-engineer the conversion layers until they are.",
    },
    {
      question: "Are there any recurring fees, hidden costs, or maintenance charges later on?",
      answer: "The development cost is absolute and fixed. However, to keep your website live, securely hosted, and continuously optimized, we charge a clear, transparent recurring maintenance fee. If you choose to opt out of our maintenance plan, we hand over full control, but any post-deployment crashes, server downtimes, or broken scripts will strictly be outside our responsibility.",
    },
    {
      question: "What happens if you deliver the project late? Do I get a refund or penalty credit?",
      answer: "We respect deadlines as strict commitments. If we miss a locked milestone due to an error on our end, we penalize ourselves by offering a pre-agreed discount or custom feature addition to make it right.",
    },
    {
      question: "Once the website is live, will I be dependent on you every time I need a small change?",
      answer: "Absolutely not. We hand over a completely independent system with an easy-to-use custom dashboard. You will have full ownership and capability to update text, images, or basic content without needing to pay a developer.",
    },
    {
      question: "What if the website breaks, gets hacked, or encounters a critical bug after a month?",
      answer: "If you are on our active maintenance ecosystem, our baseline policy is immediate resolution. We will dive straight into the code and fix the root cause instantly, at zero extra cost to you. Without the maintenance plan, post-launch issues fall under your responsibility.",
    },
    {
      question: "How do I know you won’t disappear mid-project or stop picking up my calls?",
      answer: "We work on a milestone-based pipeline. You don't pay everything upfront. You track the progress live on a staging link at every step, and we maintain direct communication channels via WhatsApp and scheduled calls.",
    },
    {
      question: "Can you actually handle complex custom logic, or do you only build basic landing pages?",
      answer: "We write pure TypeScript and build production-grade web engines from scratch. Whether it’s complex database tracking, custom software dashboards, or API integrations, we engineer it flawlessly.",
    },
    {
      question: "Do I get 100% legal ownership of the source code and design assets?",
      answer: "Yes. The moment the final milestone is cleared, 100% code sovereignty is transferred to your GitHub repository. The intellectual property is entirely yours legally.",
    },
    {
      question: "What do you need from my side to start, and how much of my time will this take?",
      answer: "We only need your business parameters, primary goals, and branding assets. We won't waste your time with endless back-and-forth emails. We manage the heavy lifting so you can focus on running your business.",
    },
  ];

  return (
    <main className="w-full min-h-screen relative py-32 px-6 md:px-12 flex flex-col items-center justify-start bg-[#030712] antialiased select-none overflow-hidden">
      {/* Background Light Shader */}
      <div className="absolute bg-emerald-500/5 blur-[160px] h-[550px] w-[550px] pointer-events-none top-1/4 z-0" />

      {/* Global Shader Backdrop Canvas */}
      <GlobalSystemShaderBackdrop />

      {/* INTRO BLOCK HEADINGS */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-24 flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-black text-white text-center tracking-tight leading-none mb-6 uppercase z-10">
          RAW CLARITY. UNFILTERED ANSWERS.
        </h1>
        <p className="text-sm md:text-lg font-mono text-cyan-400 text-center tracking-widest uppercase z-10">
          Straightforward answers to critical questions from clients who invest in elite engineering.
        </p>
      </div>

      {/* DYNAMIC ACCORDION COMPONENT CONSTRAINTS */}
      <div className="space-y-4 max-w-4xl w-full mx-auto relative z-30">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </main>
  );
}
