"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { COUPLE } from "@/lib/constants";
import SectionFrame from "@/components/SectionFrame";
import Image from "next/image";

export default function CoupleProfile() {
  return (
    <SectionFrame id="mempelai" className="bg-white">
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <p className="section-label">Maha Suci Allah</p>
          <h2 className="section-title mb-1 text-gray-800">Mempelai</h2>
          <div className="ornament-divider" />
          <p className="text-sm text-gray-500 font-body max-w-md mx-auto leading-relaxed mt-4">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami.
          </p>
        </motion.div>

        {/* Profiles */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-12 sm:gap-16"
        >
          {/* Groom */}
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-[var(--color-emerald)]/10 p-2 shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-100 shadow-md">
                <Image
                  src="/images/gallery/JNY08711.webp"
                  alt="Erianto"
                  fill
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-cover"
                  priority
                />
              </div>

            </div>

            <div>
              <p className="font-heading text-3xl sm:text-4xl text-[var(--color-emerald-dark)] mb-2">
                {COUPLE.groomFullName}
              </p>
              <p className="text-gray-500 font-body text-sm mb-4">
                Putra dari<br />
                <span className="font-medium text-gray-800">{COUPLE.groomParents}</span>
              </p>

            </div>
          </motion.div>

          {/* Divider & (And) */}
          <motion.div variants={staggerItem} className="flex items-center justify-center relative py-2">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-emerald)]/20 to-transparent" />
            <div className="absolute bg-white px-4 font-display italic text-3xl text-[var(--color-emerald)]">
              &amp;
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row-reverse items-center gap-6 sm:gap-10 text-center sm:text-right">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-[var(--color-emerald)]/10 p-2 shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-100 shadow-md">
                <Image
                  src="/images/gallery/JNY08696.webp"
                  alt="Tiara"
                  fill
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-cover"
                  priority
                />
              </div>

            </div>

            <div>
              <p className="font-heading text-3xl sm:text-4xl text-[var(--color-emerald-dark)] mb-2">
                {COUPLE.brideFullName}
              </p>
              <p className="text-gray-500 font-body text-sm mb-4">
                Putri dari<br />
                <span className="font-medium text-gray-800">{COUPLE.brideParents}</span>
              </p>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionFrame>
  );
}
