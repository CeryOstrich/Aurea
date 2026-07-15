"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { VENUE } from "@/lib/constants";
import SectionFrame from "@/components/SectionFrame";

export default function Venue() {
  return (
    <SectionFrame id="acara">
      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10"
        >
          <p className="section-label">Lokasi & Waktu</p>
          <h2 className="section-title mb-1 text-gray-800">Acara</h2>
          <div className="ornament-divider" />
        </motion.div>

        {/* Map & Detail Card (Stacked vertically for elegant narrow layout) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden mb-8"
        >
          {/* Map Section */}
          <div className="relative w-full h-64 border-b border-gray-100">
            <iframe
              src={VENUE.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.1) opacity(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
            />
          </div>

          {/* Info Section */}
          <div className="w-full p-6 md:p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-heading text-[var(--color-emerald-dark)] mb-2 font-bold">
              {VENUE.name}
            </h3>
            <p className="text-sm text-gray-700 font-body leading-relaxed mb-1">
              {VENUE.address}
            </p>
            <p className="text-sm text-gray-500 font-body mb-6">
              {VENUE.city}
            </p>

            <div>
              <a
                href={VENUE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-[var(--color-emerald)] text-white hover:bg-[var(--color-emerald-dark)] transition-colors rounded-xl text-sm font-medium shadow-md shadow-[var(--color-emerald)]/20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Buka di Google Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionFrame>
  );
}
