"use client";

import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import { fadeInUp } from "@/lib/animations";

export default function CountdownSection() {
  return (
    <section id="countdown" className="relative section-padding overflow-hidden">
      {/* Background ambient glow to make the dark card pop */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        <div className="w-full max-w-4xl h-96 bg-true-gold/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Luxury Dark Emerald Card */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-true-emerald to-true-emerald-dark border border-true-gold/30 shadow-[0_20px_50px_rgba(21,54,41,0.15)] px-6 py-16 sm:px-12 sm:py-20 md:p-24">
          
          {/* Card inner glow & texture */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-true-gold/10 blur-[80px] pointer-events-none" />
          
          {/* Subtle concentric rings inside the card */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
            <div className="absolute w-[400px] h-[400px] rounded-full border border-true-gold/10 animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-[550px] h-[550px] rounded-full border border-dashed border-true-gold/10 animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute w-[700px] h-[700px] rounded-full border border-true-gold/5 animate-[spin_50s_linear_infinite]">
              <div className="absolute top-1/2 left-0 w-1 h-1 rounded-full bg-true-gold/60 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="font-accent text-[0.65rem] tracking-[0.4em] uppercase text-true-gold mb-4">
                Counting Down To
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-2 text-white font-light tracking-wide drop-shadow-sm">
                Our Special Day
              </h2>
              
              <div className="flex items-center justify-center gap-4 my-8">
                <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-true-gold/40" />
                <div className="w-2 h-2 rotate-45 border border-true-gold/60" />
                <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-true-gold/40" />
              </div>
            </motion.div>

            <div className="mt-4 w-full">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
