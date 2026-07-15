"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { COUPLE } from "@/lib/constants";
import FloralCorner from "@/components/FloralCorner";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="opening" className="relative h-dvh min-h-[650px] flex items-center justify-center overflow-hidden bg-white">
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 scale-[1.15] will-change-transform transform-gpu">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-[var(--color-bg-light)]" />
      </div>

      {/* Floral Corners */}
      <FloralCorner position="top-left" delay={0.3} />
      <FloralCorner position="top-right" delay={0.5} />
      <FloralCorner position="bottom-left" delay={0.7} />
      <FloralCorner position="bottom-right" delay={0.9} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4 h-full flex flex-col justify-center pointer-events-none">
        {/* Decorative Frame */}
        <div className="absolute inset-0 pointer-events-none border-2 border-[var(--color-emerald)]/10 rounded-xl m-4 sm:m-6 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--color-emerald)]/40 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[var(--color-emerald)]/40 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[var(--color-emerald)]/40 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--color-emerald)]/40 rounded-br-xl" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-label mb-8"
          >
            The Wedding of
          </motion.p>

          {/* Couple Names */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-light leading-[1.1]"
          >
            <span className="block text-[3.5rem] sm:text-6xl md:text-7xl text-gray-800 tracking-wider">
              {COUPLE.groomName}
            </span>
            <span className="block text-3xl sm:text-4xl text-[var(--color-emerald)] my-4 font-display italic">
              &amp;
            </span>
            <span className="block text-[3.5rem] sm:text-6xl md:text-7xl text-gray-800 tracking-wider">
              {COUPLE.brideName}
            </span>
          </motion.h1>

          {/* Ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 mb-8 flex items-center justify-center gap-4"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--color-emerald)]/50" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[var(--color-emerald)]/50" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--color-emerald)]/50" />
          </motion.div>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg sm:text-xl font-heading tracking-[0.15em] text-gray-800"
          >
            12 December 2026
          </motion.p>

          {/* Save the date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.2 }}
            className="mt-3 text-[0.65rem] tracking-[0.4em] uppercase text-gray-500 font-accent"
          >
            Save The Date
          </motion.p>
        </div>
      </div>
    </section>
  );
}
