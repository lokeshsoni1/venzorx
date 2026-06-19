"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about-us" },
  { name: "SERVICES", href: "/services" },
  { name: "PRICING", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "CONTACT", href: "/contact" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl bg-zinc-950/40 backdrop-blur-md border border-white/5 px-8 py-3.5 rounded-full flex items-center justify-between shadow-[0_15px_50px_rgba(0,0,0,0.6)]">
      <div className="hidden md:flex items-center gap-8 font-mono text-[10px] tracking-[0.25em] font-bold uppercase">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-cyan-400 font-bold"
                  : "text-zinc-400 hover:text-[#00F5FF]"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <a
        href="https://calendly.com/venzorx-co/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-500 hover:bg-emerald-400 text-black border border-emerald-400/30 font-mono font-black text-xs tracking-widest px-4 py-2 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] transform-gpu hover:scale-[1.03] select-none whitespace-nowrap"
      >
        CONNECT DIRECTLY ON A CALL WITH VENZORX
      </a>
    </nav>
  );
}
