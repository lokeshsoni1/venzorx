"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import CloudinarySystemBackground from "@/components/ui/cloudinary-background";

export default function StandaloneContactMonolithPage() {
  // 1. Unified state handler tracking client information variables
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 2. Handler to dynamically construct and trigger email deep link
  const triggerEmailDispatch = () => {
    if (!formData.name || !formData.businessName || !formData.message) {
      alert("Please initialize all data fields before dispatching system request.");
      return;
    }
    const targetEmail = "venzorx.co@gmail.com";
    const subject = encodeURIComponent(`System Intel Request from ${formData.businessName}`);
    const body = encodeURIComponent(
      `Client Identity / Name: ${formData.name}\n` +
      `Enterprise Corporation / Business Name: ${formData.businessName}\n\n` +
      `Conveyance Scope / Message:\n${formData.message}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  // 3. Handler to dynamically construct and trigger WhatsApp API payload
  const triggerWhatsAppDispatch = () => {
    if (!formData.name || !formData.businessName || !formData.message) {
      alert("Please initialize all data fields before dispatching WhatsApp integration.");
      return;
    }
    const targetPhone = "918595598458"; 
    const textPayload = encodeURIComponent(
      `*🏛️ VENZORX INTEL SYSTEM INITIATED*\n\n` +
      `*Client Identity:* ${formData.name}\n` +
      `*Enterprise:* ${formData.businessName}\n\n` +
      `*Message / Roadblocks:*\n${formData.message}`
    );
    window.open(`https://wa.me/${targetPhone}?text=${textPayload}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="w-full min-h-screen relative py-32 px-6 md:px-12 flex flex-col items-center justify-center bg-transparent antialiased select-none overflow-hidden">
      {/* Background ambient lighting mask layer */}
      <div className="absolute bg-cyan-500/5 blur-[150px] h-[550px] w-[550px] pointer-events-none top-1/4 z-0" />

      {/* Cloudinary System Background Video Layer */}
      <CloudinarySystemBackground />

      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-7xl font-black text-white tracking-normal uppercase mb-6 font-sans">
          READY TO ELIMINATE COMPETITION?
        </h1>
        <p className="text-sm md:text-xl font-mono text-cyan-400 tracking-widest uppercase">
          Worst case: clarity. Best case: secure an unfair market advantage.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl mx-auto p-8 rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.7)] relative z-10"
      >
        <div className="space-y-5 text-left">
          <div>
            <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2 pl-1">Client Identity / Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required 
              placeholder="Enter your full name" 
              className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:border-cyan-400 outline-none text-sm font-sans" 
            />
          </div>
          <div>
            <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2 pl-1">Enterprise Corporation / Business Name</label>
            <input 
              type="text" 
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              required 
              placeholder="Enter your company name or niche" 
              className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:border-cyan-400 outline-none text-sm font-sans" 
            />
          </div>
          <div>
            <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2 pl-1">Conveyance Scope / Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required 
              rows={4} 
              placeholder="Describe the technical roadblocks or requirements..." 
              className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:border-cyan-400 outline-none text-sm font-sans resize-none" 
            />
          </div>

          {/* Action Dual Grid Interface */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full">
            <Button 
              type="button"
              onClick={triggerEmailDispatch}
              className="flex-1 gap-2.5 bg-cyan-500 text-white hover:bg-cyan-400 font-mono text-xs font-bold tracking-wider uppercase py-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] transform-gpu hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" /> <span>Send Message Via Email</span>
            </Button>
            
            <Button 
              type="button"
              onClick={triggerWhatsAppDispatch}
              className="flex-1 gap-2.5 border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-950/40 font-mono text-xs font-bold tracking-wider uppercase py-6 rounded-xl transition-all duration-300 transform-gpu hover:scale-[1.02]"
            >
              <MessageSquare className="h-4 w-4" /> <span>Send Via WhatsApp</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
