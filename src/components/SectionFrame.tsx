"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import FloralCorner from "./FloralCorner";

interface SectionFrameProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionFrame({ children, id, className = "" }: SectionFrameProps) {
  return (
    <section id={id} className={`relative py-16 px-4 ${className} overflow-hidden`}>
      {/* Floral Ornaments (All 4 corners at the edges of the section) */}
      <FloralCorner position="top-left" delay={0.2} />
      <FloralCorner position="top-right" delay={0.4} />
      <FloralCorner position="bottom-left" delay={0.6} />
      <FloralCorner position="bottom-right" delay={0.8} />

      <div className="max-w-md mx-auto relative pointer-events-none">
        {/* Decorative Frame */}
        <div className="absolute inset-0 pointer-events-none border-2 border-[var(--color-emerald)]/10 rounded-xl m-2 sm:m-4 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--color-emerald)]/40 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[var(--color-emerald)]/40 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[var(--color-emerald)]/40 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--color-emerald)]/40 rounded-br-xl" />
        </div>
        
        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 py-12 px-6 sm:px-10 pointer-events-auto"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
