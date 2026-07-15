"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { EVENTS, VENUE } from "@/lib/constants";
import SectionFrame from "@/components/SectionFrame";

export default function WeddingDetails() {
  return (
    <SectionFrame id="rundown" className="!pb-32">
      <div className="relative z-10 w-full max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="section-label">Waktu & Susunan Acara</p>
          <h2 className="section-title mb-1 text-gray-800">Rundown</h2>
          <div className="ornament-divider" />
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative px-4"
        >
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-emerald)]/10 via-[var(--color-emerald)]/40 to-[var(--color-emerald)]/10 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {/* Akad Card */}
            <motion.div variants={staggerItem} className="relative flex items-center justify-between w-full group">
              <div className="w-5/12 text-right pr-6">
                <p className="text-sm text-[var(--color-emerald)] font-accent uppercase tracking-widest font-medium mb-1">
                  {EVENTS.akad.title}
                </p>
                <p className="text-3xl font-heading text-gray-800 mb-1">
                  {EVENTS.akad.time}
                </p>
                <p className="text-xs text-gray-500 font-body">
                  {VENUE.name}
                </p>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border border-[var(--color-emerald)]/30 flex items-center justify-center shadow-[0_0_15px_rgba(5,150,105,0.1)] group-hover:scale-110 transition-transform duration-500 z-10">
                <div className="w-3 h-3 bg-[var(--color-emerald)] rounded-full" />
              </div>

              <div className="w-5/12 pl-6">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-[var(--color-emerald)]/10">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center text-[var(--color-emerald-dark)] mb-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <p className="text-[0.7rem] text-gray-500 leading-relaxed">
                    Momen sakral penyatuan dua insan dalam ikatan suci pernikahan.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Resepsi Card */}
            <motion.div variants={staggerItem} className="relative flex items-center justify-between w-full group">
              <div className="w-5/12 text-right pr-6">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-[var(--color-emerald)]/10 ml-auto">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center text-[var(--color-emerald-dark)] mb-2 ml-auto">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <p className="text-[0.7rem] text-gray-500 leading-relaxed text-right">
                    Ramah tamah dan perayaan kebahagiaan bersama keluarga dan sahabat.
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border border-[var(--color-emerald)]/30 flex items-center justify-center shadow-[0_0_15px_rgba(5,150,105,0.1)] group-hover:scale-110 transition-transform duration-500 z-10">
                <div className="w-3 h-3 bg-[var(--color-emerald)] rounded-full" />
              </div>

              <div className="w-5/12 pl-6">
                <p className="text-sm text-[var(--color-emerald)] font-accent uppercase tracking-widest font-medium mb-1">
                  {EVENTS.resepsi.title}
                </p>
                <p className="text-3xl font-heading text-gray-800 mb-1">
                  {EVENTS.resepsi.time}
                </p>
                <p className="text-xs text-gray-500 font-body">
                  {VENUE.name}
                </p>
              </div>
            </motion.div>

            {/* Dress Code Card */}
            <motion.div variants={staggerItem} className="relative flex items-center justify-between w-full group">
              <div className="w-5/12 text-right pr-6">
                <p className="text-sm text-[var(--color-emerald)] font-accent uppercase tracking-widest font-medium mb-1">
                  {EVENTS.dressCode.title}
                </p>
                <p className="text-2xl font-heading text-gray-800 mb-1">
                  {EVENTS.dressCode.value}
                </p>
                <p className="text-xs text-gray-500 font-body uppercase tracking-widest mt-2">
                  Batik / Busana Formal
                </p>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border border-[var(--color-emerald)]/30 flex items-center justify-center shadow-[0_0_15px_rgba(5,150,105,0.1)] group-hover:scale-110 transition-transform duration-500 z-10">
                <div className="w-3 h-3 bg-[var(--color-emerald)] rounded-full" />
              </div>

              <div className="w-5/12 pl-6">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-[var(--color-emerald)]/10">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center text-[var(--color-emerald-dark)] mb-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 3v18" />
                    </svg>
                  </div>
                  <p className="text-[0.7rem] text-gray-500 leading-relaxed">
                    Tidak ada ketentuan warna khusus. Kami memohon kesediaan para tamu undangan untuk mengenakan pakaian yang sopan, rapi, dan nyaman.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionFrame>
  );
}
