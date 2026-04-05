'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 150;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      shape: 'dot' | 'star' | 'planet';
      opacity: number;
      opacitySpeed: number;

      constructor(x: number, y: number, size: number, speedX: number, speedY: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        
        const rand = Math.random();
        if (rand < 0.6) {
          this.shape = 'dot';
        } else if (rand < 0.95) {
          this.shape = 'star';
        } else {
          this.shape = 'planet';
          this.size = this.size * (Math.random() * 2 + 2); // Planets are bigger
        }

        this.opacity = Math.random();
        this.opacitySpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Fade in and out
        this.opacity += this.opacitySpeed;
        if (this.opacity <= 0.1 || this.opacity >= 1) {
          this.opacitySpeed *= -1;
        }

        // Wrap particles around screen for a seamless effect
        if (this.x > canvas.width + this.size) this.x = -this.size;
        else if (this.x < -this.size) this.x = canvas.width + this.size;

        if (this.y > canvas.height + this.size) this.y = -this.size;
        else if (this.y < -this.size) this.y = canvas.height + this.size;
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        
        switch (this.shape) {
          case 'star':
            ctx.fillStyle = this.color;
            ctx.beginPath();
            this.drawStar(ctx);
            ctx.fill();
            break;
          case 'planet':
            this.drawPlanet(ctx);
            break;
          case 'dot':
          default:
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        
        ctx.globalAlpha = 1.0; // Reset global alpha
      }

      drawStar(ctx: CanvasRenderingContext2D) {
        const spikes = 5;
        const outerRadius = this.size * 1.5;
        const innerRadius = this.size * 0.7;
        let rot = (Math.PI / 2) * 3;
        let x = this.x;
        let y = this.y;
        const step = Math.PI / spikes;

        ctx.moveTo(this.x, this.y - outerRadius);
        for (let i = 0; i < spikes; i++) {
          x = this.x + Math.cos(rot) * outerRadius;
          y = this.y + Math.sin(rot) * outerRadius;
          ctx.lineTo(x, y);
          rot += step;

          x = this.x + Math.cos(rot) * innerRadius;
          y = this.y + Math.sin(rot) * innerRadius;
          ctx.lineTo(x, y);
          rot += step;
        }
        ctx.lineTo(this.x, this.y - outerRadius);
        ctx.closePath();
      }

      drawPlanet(ctx: CanvasRenderingContext2D) {
        // Planet Body
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Rings
        if (this.size > 2) {
          ctx.strokeStyle = this.color;
          ctx.lineWidth = this.size * 0.15;
          const tilt = Math.PI / 6; 
          ctx.beginPath();
          ctx.ellipse(this.x, this.y, this.size * 1.8, this.size * 0.6, tilt, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const isDarkMode = resolvedTheme === 'dark';
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 1.5 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.1;
        const speedY = (Math.random() - 0.5) * 0.1;
        const colors = isDarkMode
          ? ['#E3B041', 'rgba(255,255,255,0.7)', '#99c3ff'] // Gold, White, Light Blue
          : ['#718096', 'rgba(45, 55, 72, 0.5)', '#4a5568'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, size, speedX, speedY, color));
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
