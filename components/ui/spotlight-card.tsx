"use client";

import React, { useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 }
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef({ x: -999, y: -999 });
  const tickingRef = useRef(false);

  const updateCardStyles = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty('--x', `${coordsRef.current.x}px`);
      cardRef.current.style.setProperty('--y', `${coordsRef.current.y}px`);
    }
    tickingRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) return;
    if (!cardRef.current) return;
    
    // Hyper-localized delta tracking from the parent element box bounding layout matrix
    const rect = cardRef.current.getBoundingClientRect();
    coordsRef.current.x = e.clientX - rect.left;
    coordsRef.current.y = e.clientY - rect.top;

    // Asynchronous RequestAnimationFrame execution batching to eliminate layout thrashing
    if (!tickingRef.current) {
      requestAnimationFrame(updateCardStyles);
      tickingRef.current = true;
    }
  };

  const handlePointerLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) return;
    coordsRef.current = { x: -999, y: -999 };
    if (cardRef.current) {
      cardRef.current.style.setProperty('--x', '-999px');
      cardRef.current.style.setProperty('--y', '-999px');
    }
  };

  const { base, spread } = glowColorMap[glowColor];
  const getSizeClasses = () => (customSize ? '' : sizeMap[size]);

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties & Record<string, string | number> = {
      '--base': base,
      '--spread': spread,
      '--radius': '14',
      '--border': '1',
      '--backdrop': 'rgba(9, 9, 11, 0.45)',
      '--backup-border': 'rgba(255, 255, 255, 0.06)',
      '--size': '200',
      '--border-size': 'calc(var(--border) * 1px)',
      '--spotlight-size': 'calc(var(--size) * 1px)',
      '--hue': 'var(--base)',
      backgroundImage: `radial-gradient(var(--spotlight-size) at var(--x, -999px) var(--y, -999px), hsl(var(--hue) 100% 70% / 0.08), transparent)`,
      backgroundColor: 'var(--backdrop)',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative',
      contain: 'layout paint style', // Locks complete CSS isolation bounds inside browser repaint trees
    };

    if (width !== undefined) baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    if (height !== undefined) baseStyles.height = typeof height === 'number' ? `${height}px` : height;

    return baseStyles;
  };

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-repeat: no-repeat;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
      -webkit-mask-composite: destination-in;
    }
    
    @media (min-width: 769px) {
      [data-glow]::before {
        background-image: radial-gradient(calc(var(--spotlight-size) * 0.7) at var(--x, -999px) var(--y, -999px), hsl(var(--hue) 100% 65% / 0.75), transparent 100%);
      }
      
      [data-glow]::after {
        background-image: radial-gradient(calc(var(--spotlight-size) * 0.4) at var(--x, -999px) var(--y, -999px), rgba(255, 255, 255, 0.3), transparent 100%);
      }
    }

    @media (max-width: 768px) {
      [data-glow]::before {
        border-color: rgba(168, 85, 247, 0.25);
        transition: border-color 0.4s ease;
      }
      [data-glow]:hover::before {
        border-color: rgba(168, 85, 247, 0.6);
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? 'aspect-[3/4]' : ''}
          rounded-2xl relative grid grid-rows-[1fr_auto] p-4 gap-4 backdrop-blur-md
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          transform-gpu backface-hidden will-change-[transform,opacity,box-shadow]
          hover:scale-[1.035] hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)]
          ${className}
        `}
      >
        <div data-glow className="absolute inset-0 pointer-events-none" />
        {children}
      </div>
    </>
  );
};

export { GlowCard };
