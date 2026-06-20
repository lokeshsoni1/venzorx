"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about-us" },
    { name: "SERVICES", href: "/services" },
    { name: "PRICING", href: "/pricing" },
    { name: "FAQ", href: "/faq" }, 
    { name: "CONTACT", href: "/contact" }
  ];

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl h-16 bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between px-4 md:px-8 z-50 transform-gpu transition-all duration-300">
        <Link href="/" className="font-mono font-black text-white text-sm tracking-[0.25em]">
          VENZORX
        </Link>

        {/* Desktop Interface List */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`font-mono text-[10px] font-bold tracking-widest transition-colors duration-200 ${
                  isActive ? "text-cyan-400 font-bold" : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button className="relative bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-400 text-black font-mono font-black text-xs tracking-widest px-6 py-2.5 rounded-xl transition-all duration-500 ease-out shadow-[0_0_30px_rgba(16,185,129,0.45)] border border-emerald-300/40 transform-gpu hover:scale-[1.04] hover:shadow-[0_0_45px_rgba(6,182,212,0.65)] hover:brightness-110 active:scale-[0.98]" asChild>
            <a href="https://calendly.com/venzorx-co/30min" target="_blank" rel="noopener noreferrer">CONNECT DIRECTLY ON A CALL WITH VENZORX</a>
          </Button>
        </div>

        {/* Mobile Interaction Trigger Burger Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="block md:hidden text-white p-2 outline-none focus:bg-white/5 rounded-xl transition-colors"
          aria-label="Toggle Navigation Grid"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Floating Fullscreen Portal Sliding Mobile Drawer Overlay */}
      <div className={`fixed inset-0 bg-[#030712]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <div className="flex flex-col items-center space-y-6 text-center w-full max-w-xs">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm font-black tracking-[0.2em] text-zinc-300 hover:text-white transition-colors py-2 block w-full border-b border-white/5"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-6 w-full">
            <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-mono font-black text-[10px] tracking-widest py-5 rounded-xl uppercase shadow-[0_0_25px_rgba(16,185,129,0.3)]" asChild>
              <a href="https://calendly.com/venzorx-co/30min" target="_blank" rel="noopener noreferrer">CONNECT WITH VENZORX</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
