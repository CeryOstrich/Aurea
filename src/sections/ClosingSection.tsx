"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { COUPLE } from "@/lib/constants";
import SectionFrame from "@/components/SectionFrame";
import RSVPForm from "@/components/RSVPForm";

export default function ClosingSection() {
  return (
    <SectionFrame id="thanks" className="min-h-screen flex flex-col justify-center pb-24">
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* RSVP Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full mb-16"
        >
          <RSVPForm />
        </motion.div>

        {/* Closing Thank You */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <p className="section-label mb-3">With Love</p>
          <h2 className="text-3xl sm:text-4xl font-heading text-gray-800 font-bold tracking-wide">
            Terima Kasih
          </h2>

          {/* Divider */}
          <div className="my-6 flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[var(--color-emerald)]/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[var(--color-emerald)]/40" />
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[var(--color-emerald)]/40" />
          </div>

          <p className="text-base sm:text-lg font-heading text-gray-600 italic leading-relaxed mb-6">
            "Kehadiran dan doa restu Bapak/Ibu/Saudara/i merupakan suatu kehormatan dan kebahagiaan bagi kami."
          </p>

          <h3 className="text-2xl sm:text-3xl font-heading text-[var(--color-emerald-dark)] tracking-wide">
            {COUPLE.groomName} &amp; {COUPLE.brideName}
          </h3>

          <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-gray-400 font-accent">
            12 . 12 . 2026
          </p>
        </motion.div>
      </div>
    </SectionFrame>
  );
}
