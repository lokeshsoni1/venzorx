"use client";

import React from "react";

export default function CloudinarySystemBackground() {
  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none bg-[#030712] transform-gpu backface-hidden"
      style={{ contain: "strict" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover transform-gpu backface-hidden scale-[1.01]"
        style={{ filter: "brightness(0.35) contrast(1.15)" }}
      >
        <source 
          src="https://res.cloudinary.com/dbpdexty8/video/upload/v1781944122/main_background_l69axj.mp4" 
          type="video/mp4" 
        />
      </video>
      
      {/* High-end cinematic gradient overlay to maximize text legibility across all viewport breakpoints */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-[#030712]/10 to-[#030712] pointer-events-none" />
    </div>
  );
}
