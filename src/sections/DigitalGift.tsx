"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { DIGITAL_GIFTS } from "@/lib/constants";
import CopyButton from "@/components/CopyButton";

export default function DigitalGift() {
  const [activeId, setActiveId] = useState<string>(DIGITAL_GIFTS[0].id);
  const activeGift = DIGITAL_GIFTS.find((g) => g.id === activeId) || DIGITAL_GIFTS[0];

  return (
    <section id="digital-gift" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10"
        >
          <p className="section-label">Wedding Gift</p>
          <h2 className="section-title mb-1">Digital Gift</h2>
          <div className="ornament-divider" />
          <p className="mt-6 text-sm text-warm-gray/70 font-body leading-relaxed max-w-sm mx-auto">
            Your presence is the greatest gift. If you wish to honor us, a contribution would be gratefully appreciated.
          </p>
        </motion.div>

        {/* Gift Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card relative overflow-hidden"
        >
          {/* Subtle Glow inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gold/5 blur-[60px] pointer-events-none" />

          <div className="p-8 sm:p-12 text-center">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 relative z-10">
              {DIGITAL_GIFTS.map((gift) => (
                <button
                  key={gift.id}
                  onClick={() => setActiveId(gift.id)}
                  className={`px-5 py-2 text-[0.7rem] font-accent tracking-widest uppercase transition-all duration-300 cursor-pointer border
                    ${activeId === gift.id
                      ? "border-gold text-gold bg-gold/5"
                      : "border-transparent text-warm-gray hover:text-ivory hover:border-gold/30"
                    }`}
                >
                  {gift.name}
                </button>
              ))}
            </div>

            {/* Active Content */}
            <div className="min-h-[200px] flex items-center justify-center relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGift.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {activeGift.hasQR ? (
                    <div className="flex flex-col items-center">
                      <div className="w-48 h-48 bg-ivory rounded flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                        <div className="text-center opacity-30">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="midnight" strokeWidth="1" className="mx-auto mb-2">
                            <rect x="3" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="3" width="7" height="7" rx="1" />
                            <rect x="3" y="14" width="7" height="7" rx="1" />
                            <rect x="14" y="14" width="3" height="3" />
                            <rect x="18" y="14" width="3" height="3" />
                            <rect x="14" y="18" width="3" height="3" />
                            <rect x="18" y="18" width="3" height="3" />
                          </svg>
                          <span className="text-xs font-accent text-midnight">QRIS Image Here</span>
                        </div>
                      </div>
                      <p className="text-xs tracking-widest uppercase text-warm-gray font-accent">
                        Scan QR Code to send gift
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm tracking-widest uppercase text-warm-gray font-accent mb-3">
                        {activeGift.name} — {activeGift.method}
                      </p>
                      <p className="text-3xl sm:text-4xl font-heading text-ivory tracking-[0.1em] mb-3">
                        {activeGift.accountNumber}
                      </p>
                      <p className="text-sm text-gold/80 font-accent mb-8">
                        a/n {activeGift.accountHolder}
                      </p>
                      
                      <CopyButton text={activeGift.accountNumber} label="Copy Account Number" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
