"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { WEDDING_DATE } from "@/lib/constants";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div variants={staggerItem} className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border border-gold/30 bg-midnight-light/40 backdrop-blur-sm">
        <span className="text-2xl sm:text-3xl font-heading text-gold tabular-nums font-light">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-3 text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.25em] text-warm-gray font-accent">
        {label}
      </span>
    </motion.div>
  );
}

export default function CountdownTimer() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_DATE);

  if (isExpired) {
    return (
      <div className="text-center py-4">
        <h3 className="text-2xl font-heading text-gold font-light">The Day Has Arrived</h3>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex justify-center gap-4 sm:gap-8"
    >
      <TimeUnit value={days} label="Days" />
      <TimeUnit value={hours} label="Hours" />
      <TimeUnit value={minutes} label="Mins" />
      <TimeUnit value={seconds} label="Secs" />
    </motion.div>
  );
}
