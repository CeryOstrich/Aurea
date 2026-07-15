"use client";

import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import { fadeInUp } from "@/lib/animations";

export default function CountdownSection() {
  return (
    <section id="countdown" className="relative section-padding overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[360px] h-[360px] rounded-full border border-gold/[0.04]" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="section-label">Counting Down To</p>
          <h2 className="section-title mb-1">Our Special Day</h2>
          <div className="ornament-divider">
            <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
          </div>
        </motion.div>

        <div className="mt-10">
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
