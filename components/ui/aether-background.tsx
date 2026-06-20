"use client";

import React, { useEffect, useRef } from 'react';

const AetherBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse: { x: number | null, y: number | null, radius: number } = { x: null, y: null, radius: 220 };

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (!canvas) return;
                
                // Edge bounce
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Mouse collision detection (Repulsion)
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const minDist = mouse.radius + this.size;
                    
                    if (distance < minDist) {
                        const forceDirectionX = dx / (distance || 1);
                        const forceDirectionY = dy / (distance || 1);
                        const force = (minDist - distance) / minDist;
                        
                        // Slightly stronger force factor for reactive hover responses
                        this.x -= forceDirectionX * force * 7;
                        this.y -= forceDirectionY * force * 7;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            if (!canvas) return;
            particles = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9500;
            // Clamp dot count to ensure high frames on large monitors
            if (numberOfParticles > 80) {
                numberOfParticles = 80;
            }
            
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1.2;
                let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
                
                // Increased speed range for faster, active particle movements
                let directionX = (Math.random() * 1.5) - 0.75;
                let directionY = (Math.random() * 1.5) - 0.75;
                
                const blueShades = [
                  'rgba(0, 170, 255, 0.9)',
                  'rgba(0, 191, 255, 0.9)',
                  'rgba(0, 220, 255, 0.9)',
                  'rgba(100, 240, 255, 0.8)'
                ];

                let color = blueShades[Math.floor(Math.random() * blueShades.length)];
                particles.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(); 
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const connect = () => {
            if (!canvas || !ctx) return;
            const distLimit = (canvas.width / 6.5) * (canvas.height / 6.5);
            let opacityValue = 1;
            const len = particles.length;

            for (let a = 0; a < len; a++) {
                const pA = particles[a];
                for (let b = a + 1; b < len; b++) {
                    const pB = particles[b];
                    const dx = pA.x - pB.x;
                    const dy = pA.y - pB.y;
                    const distance = dx * dx + dy * dy;
                    
                    if (distance < distLimit) {
                        opacityValue = 1 - (distance / (distLimit || 1));
                        if (opacityValue < 0) opacityValue = 0;
                        
                        let dx_mouse_a = mouse.x !== null ? pA.x - mouse.x : 0;
                        let dy_mouse_a = mouse.y !== null ? pA.y - mouse.y : 0;
                        const distance_mouse_a = Math.sqrt(dx_mouse_a * dx_mouse_a + dy_mouse_a * dy_mouse_a);

                        if (mouse.x !== null && distance_mouse_a < mouse.radius) {
                             ctx.strokeStyle = `rgba(120, 220, 255, ${opacityValue * 0.95})`;
                        } else {
                             ctx.strokeStyle = `rgba(0, 191, 255, ${opacityValue * 0.75})`;
                        }
                        
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(pA.x, pA.y);
                        ctx.lineTo(pB.x, pB.y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!ctx) return;
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            const len = particles.length;
            for (let i = 0; i < len; i++) {
                particles[i].update();
            }
            connect();
        };
        
        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };
        
        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div 
          className="transform-gpu backface-hidden will-change-transform translate-z-0 pointer-events-none absolute inset-0 z-0 preserve-3d"
          style={{ contain: "strict" }}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-[-1]"
                style={{ background: 'transparent' }}
            />
        </div>
    );
};

export default AetherBackground;
