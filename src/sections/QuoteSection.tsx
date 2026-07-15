"use client";

import { motion } from "framer-motion";
import SectionFrame from "@/components/SectionFrame";

export default function QuoteSection() {
  return (
    <SectionFrame id="quote">
      <div className="text-center flex flex-col items-center">
        {/* Decorative Leaf Icon (similar to the image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-[var(--color-emerald)]/70"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22c4.97-4.97 4.97-10.63 4.97-14.73 0-1.25-.38-2.45-1.07-3.41-.69-.97-1.68-1.55-2.78-1.74-2.22-.38-4.46 1.4-4.46 1.4s-2.24-1.78-4.46-1.4c-1.1.19-2.09.77-2.78 1.74C.71 4.82.33 6.02.33 7.27c0 4.1 0 9.76 4.97 14.73" />
            <path d="M12 22V10" />
            <path d="M12 16a3 3 0 0 1-3-3" />
            <path d="M15 13a3 3 0 0 1-3 3" />
          </svg>
        </motion.div>

        {/* The Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading italic font-medium leading-relaxed text-gray-700 text-sm sm:text-base md:text-lg px-2 sm:px-6"
        >
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&rdquo;
        </motion.p>

        {/* The Source */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 font-accent text-sm tracking-widest text-[var(--color-emerald)] font-semibold"
        >
          (QS. Ar-Rum : 21)
        </motion.p>
      </div>
    </SectionFrame>
  );
}
