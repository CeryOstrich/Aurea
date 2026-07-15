"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AntiInspect() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerWarning();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && e.key === "U") ||
        (e.metaKey && e.altKey && (e.key === "i" || e.key === "j" || e.key === "c")) ||
        (e.metaKey && e.key === "u")
      ) {
        e.preventDefault();
        triggerWarning();
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const triggerWarning = () => {
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 3000);
  };

  return (
    <AnimatePresence>
      {showWarning && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-gray-900/90 text-white text-sm rounded-full shadow-xl backdrop-blur-sm flex items-center gap-3 whitespace-nowrap"
        >
          <span className="text-xl">🥺</span>
          <span className="font-medium tracking-wide">Jangan Bikin Aku Sedih</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
