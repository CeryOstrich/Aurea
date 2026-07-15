"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  opacity: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client to avoid hydration mismatch
    const newParticles: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 20}s`, // between 15s and 35s
      animationDelay: `${Math.random() * 10}s`,
      size: `${4 + Math.random() * 6}px`, // between 4px and 10px
      opacity: 0.1 + Math.random() * 0.3,
    }));
    
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 rounded-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald-dark)] blur-[1px] animate-fall"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
      
      {/* Some larger, blurrier shapes for depth */}
      {particles.slice(0, 5).map((p) => (
        <div
          key={`large-${p.id}`}
          className="absolute top-0 rounded-full bg-[var(--color-emerald)] blur-md animate-fall"
          style={{
            left: p.left,
            width: `${parseInt(p.size) * 4}px`,
            height: `${parseInt(p.size) * 4}px`,
            opacity: p.opacity * 0.3,
            animationDuration: `${parseInt(p.animationDuration) * 1.5}s`,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
    </div>
  );
}
