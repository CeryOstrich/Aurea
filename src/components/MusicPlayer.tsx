"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });
import { MUSIC } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="hidden">
        <ReactPlayer
          url={MUSIC.src}
          playing={isPlaying}
          loop={true}
          volume={0.5}
          width="0"
          height="0"
          playsinline={true}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="fixed bottom-5 right-5 z-50"
    >
      <button
        onClick={toggle}
        className="relative w-11 h-11 rounded-full glass-card flex items-center justify-center
          cursor-pointer active:scale-90 transition-transform duration-200"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {/* Pulse ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border border-gold/20"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="bars"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-[2.5px]"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-[2.5px] bg-gold rounded-full"
                  animate={{ height: ["6px", "14px", "6px"] }}
                  transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.svg
              key="play"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold ml-0.5"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
    </>
  );
}
