"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { WEDDING_DATE } from "@/lib/constants";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div variants={staggerItem} className="relative group">
      {/* Outer delicate dashed gold ring */}
      <div className="absolute inset-0 rounded-full border border-dashed border-true-gold/40 scale-110 group-hover:rotate-90 transition-transform duration-1000 ease-out" />
      
      {/* Main Luxury Dial */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-true-gold/30 bg-true-emerald/50 backdrop-blur-md shadow-xl flex flex-col items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:border-true-gold/70 group-hover:bg-true-emerald/80 group-hover:shadow-[0_0_20px_rgba(212,180,131,0.15)]">
        
        {/* Inner delicate gold border */}
        <div className="absolute inset-1.5 rounded-full border border-true-gold/20 pointer-events-none" />
        
        <span className="text-2xl sm:text-3xl md:text-4xl font-heading text-true-gold tabular-nums font-light tracking-wider leading-none mb-1 drop-shadow-md">
          {String(value).padStart(2, "0")}
        </span>
        <span className="text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.25em] text-white/70 font-accent font-medium mt-1">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function CountdownTimer() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_DATE);

  if (isExpired) {
    return (
      <div className="text-center py-4">
        <h3 className="text-2xl font-heading text-true-gold font-light">The Day Has Arrived</h3>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex justify-center gap-3 sm:gap-6 md:gap-8"
    >
      <TimeUnit value={days} label="Days" />
      <TimeUnit value={hours} label="Hours" />
      <TimeUnit value={minutes} label="Mins" />
      <TimeUnit value={seconds} label="Secs" />
    </motion.div>
  );
}
