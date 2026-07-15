"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COUPLE } from "@/lib/constants";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 2600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] bg-midnight flex flex-col items-center justify-center"
        >
          {/* Top gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,180,131,0.5), transparent)" }}
          />

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center px-6"
          >
            <h1 className="text-5xl sm:text-6xl font-heading font-light tracking-[0.12em] gold-gradient-text">
              {COUPLE.initials}
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-5 mx-auto w-12 h-px"
              style={{ background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)" }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1 }}
            className="mt-6 text-[0.65rem] tracking-[0.3em] uppercase text-warm-gray font-accent"
          >
            Loading Memories
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          </motion.p>

          {/* Progress line */}
          <div className="mt-5 w-24 h-px bg-midnight-lighter rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, var(--color-gold-dark), var(--color-gold))" }}
            />
          </div>

          {/* Bottom gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,180,131,0.5), transparent)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
