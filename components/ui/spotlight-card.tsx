"use client";
import React, { useEffect, useRef, ReactNode } from 'react';

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

export const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const syncPointer = (e: PointerEvent) => {
      if (!cardRef.current || ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          cardRef.current.style.setProperty('--x', x.toFixed(1));
          cardRef.current.style.setProperty('--xp', (x / rect.width).toFixed(2));
          cardRef.current.style.setProperty('--y', y.toFixed(1));
          cardRef.current.style.setProperty('--yp', (y / rect.height).toFixed(2));
        }
        ticking = false;
      });
    };

    const cardEl = cardRef.current;
    if (cardEl) {
      cardEl.addEventListener('pointermove', syncPointer);
    }
    return () => {
      if (cardEl) cardEl.removeEventListener('pointermove', syncPointer);
    };
  }, []);

  const { base, spread } = glowColorMap[glowColor];
  const getSizeClasses = () => customSize ? '' : sizeMap[size];

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties & Record<string, string | number> = {
      '--base': base.toString(),
      '--spread': spread.toString(),
      '--radius': '16',
      '--border': '1',
      '--backdrop': 'rgba(12, 12, 14, 0.45)',
      '--backup-border': 'rgba(255, 255, 255, 0.08)',
      '--size': '250',
      '--border-size': 'calc(var(--border, 1) * 1px)',
      '--spotlight-size': 'calc(var(--size, 250) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      backgroundImage: `radial-gradient(var(--spotlight-size) var(--spotlight-size) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px), hsl(var(--hue, 220) 100% 70% / 0.08), transparent)`,
      backgroundColor: 'var(--backdrop)',
      position: 'relative',
      border: 'var(--border-size) solid var(--backup-border)',
      borderRadius: 'calc(var(--radius) * 1px)',
    };
    if (width !== undefined) baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    if (height !== undefined) baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    return baseStyles;
  };

  const beforeAfterStyles = `
    [data-glow]::before, [data-glow]::after {
      pointer-events: none; content: ""; position: absolute;
      inset: calc(var(--border-size) * -1); border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box; mask-composite: intersect;
      -webkit-mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      -webkit-mask-clip: padding-box, border-box; -webkit-mask-composite: source-in;
    }
    [data-glow]::before {
      background-image: radial-gradient(calc(var(--spotlight-size) * 0.8) calc(var(--spotlight-size) * 0.8) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px), hsl(var(--hue, 220) 100% 65% / 0.4), transparent 100%);
    }
    [data-glow]::after {
      background-image: radial-gradient(calc(var(--spotlight-size) * 0.4) calc(var(--spotlight-size) * 0.4) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px), rgba(255,255,255,0.15), transparent 100%);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div ref={cardRef} data-glow style={getInlineStyles()} className={`${getSizeClasses()} shadow-[0_2rem_4rem_-1.5rem_rgba(0,0,0,0.8)] p-8 backdrop-blur-2xl transition-all duration-300 hover:scale-[1.015] ${className}`}>
        <div className="relative z-10 w-full h-full flex flex-col justify-between">{children}</div>
      </div>
    </>
  );
};
