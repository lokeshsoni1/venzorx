"use client";

import React from "react";
import { Clock, Ban, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="w-full relative pt-32 pb-24 px-6 md:px-12 scroll-mt-24 z-30 bg-transparent text-left antialiased font-sans"
    >
      <div className="max-w-6xl mx-auto">
        {/* PRIMARY CLEAN HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8 uppercase"
        >
          KAISE KAAM KARTE HAIN HUM.
        </motion.h2>

        {/* THE HONEST PREMISE BLOCK */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-zinc-300 text-base md:text-xl font-normal leading-relaxed max-w-5xl mb-16"
        >
          Hum baakiyon ki tarah lambe-chaude dawe ya faltu ka overhype nahi karte. 
          Aajkal market me har koi WordPress, Elementor ya saste readymade templates phek kar de deta hai—jisse 
          website dikhne me toh theek-thaak lagti hai par load hone me 100 saal lagati hai, lag karti hai, aur 
          bhot jaldi crash ho jati hai. VenzorX ka simple rule hai—hum aisi cheezein bilkul nahi chhedte. 
          Jo commitment ki hai, thik usi time par to-the-point clean code ke sath delivery dena hamara kaam hai. 
          Hum har cheez scratch se likhte hain taaki speed makkhan chale, aur haan, agar deployment ke baad koi bhi 
          error ya dikkat aati hai, toh hum use bina kisi naye bahaane ke turant sahi karke dete hain. Baat khatam.
        </motion.p>

        {/* THE 3 PRACTICAL OPERATIONAL PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5 w-full">
          {/* PILLAR 01 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                <Clock className="h-4 w-4 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                To-The-Point Delivery
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              No delay tactics. Hum target timelines ko seriously lete hain aur bina kisi extra tech-debt ke real functional features delivery lock karte hain.
            </p>
          </motion.div>

          {/* PILLAR 02 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                <Ban className="h-4 w-4 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Zero Drag-and-Drop Templates
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Hum WordPress ya Elementor jaise heavy plugins aur saste builders ka use nahi karte. Har component direct code se banta hai taaki site par zero lag ho.
            </p>
          </motion.div>

          {/* PILLAR 03 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                <Zap className="h-4 w-4 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Instant Bug Fixes
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Code me koi bug ya logic error aaya? Hum seedha baithkar use turant crash repair framework par live track karke clean aur clear kar dete hain.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
