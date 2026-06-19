"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TerminationGateway() {
  return (
    <section className="w-full relative py-20 px-6 text-center bg-transparent z-30 antialiased">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* PRIMARY HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-8">
          WANT TO KNOW MORE? CONTACT VENZORX NOW.
        </h2>

        {/* REDIRECT CTA ACTION TRIGGER */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="transform-gpu backface-hidden"
        >
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-mono text-xs tracking-[0.2em] font-black uppercase px-8 py-4 rounded-xl border border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-[0_15px_40px_rgba(255,255,255,0.08)]"
          >
            INITIALIZE SYSTEM INTERACTION
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
