"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
        border border-gold/15 text-[0.75rem] text-ivory/70 font-accent
        hover:text-gold hover:border-gold/30 active:scale-95
        transition-all duration-300 cursor-pointer"
      aria-label={`Copy ${label}`}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span key="ok" initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-1.5 text-green-400/80">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            Copied!
          </motion.span>
        ) : (
          <motion.span key="cp" initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
