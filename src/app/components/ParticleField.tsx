// Canvas-based particle field with mouse repulsion and connection lines, rendered behind hero content. Created 2026-04-19.
"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 80;
const CONNECTION_DISTANCE = 120;
const REPULSION_RADIUS = 100;
const REPULSION_STRENGTH = 2.5;
const SPEED = 0.4;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

function randomParticle(w: number, h: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * SPEED * Math.random(),
    vy: Math.sin(angle) * SPEED * Math.random(),
  };
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () =>
      randomParticle(w, h)
    );

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // Detect dark mode
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function draw() {
      if (!ctx) return;
      const dark = darkQuery.matches;
      const particleColor = dark ? "rgba(165,180,252," : "rgba(99,102,241,"; // indigo-300 / indigo-500
      const lineColor = dark ? "rgba(165,180,252," : "rgba(99,102,241,";

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update positions
      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPULSION_RADIUS && dist > 0) {
          const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
          p.vx += (dx / dist) * force * 0.05;
          p.vy += (dy / dist) * force * 0.05;
        }

        // Dampen velocity back toward base speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > SPEED * 3) {
          p.vx *= 0.97;
          p.vy *= 0.97;
        } else if (speed < SPEED * 0.5 && speed > 0) {
          p.vx *= 1.01;
          p.vy *= 1.01;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = `${particleColor}0.5)`;
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
