"use client";

import { motion } from "framer-motion";
import { COUPLE } from "@/lib/constants";
import Image from "next/image";
import FloralCorner from "@/components/FloralCorner";
import FloatingParticles from "@/components/FloatingParticles";

interface EnvelopeProps {
  guestName: string;
  onOpen: () => void;
}

export default function Envelope({ guestName, onOpen }: EnvelopeProps) {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[150] flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Wedding Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[6px]" />
      </div>

      <FloatingParticles />

      {/* ===== RICH FLORAL DECORATIONS (like reference) ===== */}
      {/* 4 main corners */}
      <FloralCorner position="top-left" delay={0.2} />
      <FloralCorner position="top-right" delay={0.4} />
      <FloralCorner position="bottom-left" delay={0.6} />
      <FloralCorner position="bottom-right" delay={0.8} />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center w-full max-w-md mx-auto z-20 relative h-full">
        
        {/* Top half: Names */}
        <div className="flex-1 flex flex-col justify-center items-center relative">
          
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[0.55rem] tracking-[0.3em] uppercase text-gray-600 font-accent font-bold mb-6"
          >
            The Wedding of
          </motion.p>

          {/* Circular Couple Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6"
          >
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-2 border-[var(--color-emerald)]/25 p-1 shadow-lg shadow-[var(--color-emerald)]/10">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-100">
                <Image
                  src="/images/gallery/gallery-1.webp"
                  alt="Couple Photo"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 176px, 208px"
                />
              </div>
            </div>
            {/* Floral accent on circle */}
            <motion.img
              src="https://inv.punakawandigital.id/wp-content/uploads/2026/06/Tema-02-Bunga-06-e1722430798612-1-1.webp"
              alt=""
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="absolute -bottom-3 -right-5 w-24 h-24 sm:w-28 sm:h-28 object-contain pointer-events-none drop-shadow-md"
              style={{ transform: "scaleX(-1) rotate(-10deg)" }}
            />
          </motion.div>

          {/* Names */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-heading font-normal leading-none text-gray-800 drop-shadow-sm">
              <span className="block text-4xl sm:text-5xl mb-1">{COUPLE.groomName}</span>
              <span className="block text-2xl sm:text-3xl text-[var(--color-emerald)] my-1 font-display italic">&amp;</span>
              <span className="block text-4xl sm:text-5xl mt-1">{COUPLE.brideName}</span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom half: Guest + Button */}
        <div className="w-full flex flex-col items-center pb-10 sm:pb-14">
          
          {/* Kepada Yth. card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="w-4/5 max-w-xs bg-white/90 px-6 py-5 rounded-2xl border border-[var(--color-emerald)]/20 shadow-sm backdrop-blur-md mb-6"
          >
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[var(--color-emerald)] font-accent font-bold mb-2">
              Kepada Yth.
            </p>
            <p className="text-lg sm:text-xl font-bold text-gray-800 tracking-wide break-words">
              {guestName}
            </p>
          </motion.div>

          {/* Buka Undangan button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <button
              onClick={onOpen}
              className="group flex flex-col items-center justify-center cursor-pointer relative"
              aria-label="Buka Undangan"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[var(--color-emerald)]/20 animate-ping opacity-60" />
              
              <div className="relative w-14 h-14 rounded-full bg-white border border-[var(--color-emerald)] flex items-center justify-center text-[var(--color-emerald)] transition-all duration-300 shadow-md hover:bg-[var(--color-emerald)] hover:text-white hover:scale-105 z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
              </div>
              <span className="mt-3 text-[0.55rem] tracking-[0.2em] uppercase text-gray-600 font-accent font-bold group-hover:text-[var(--color-emerald)] transition-colors">
                Buka Undangan
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
