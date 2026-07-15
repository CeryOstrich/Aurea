"use client";

import { motion } from "framer-motion";

interface FloralCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  delay?: number;
}

export default function FloralCorner({ position, delay = 0 }: FloralCornerProps) {
  const imgLeft = "https://inv.punakawandigital.id/wp-content/uploads/2026/06/Tema-02-Bunga-06-e1722430798612-1-1.webp";
  const imgRight = "https://inv.punakawandigital.id/wp-content/uploads/2026/06/Tema-02-Bunga-05-e1722432163480-1-1.webp";

  // For bottom corners, we just flip the top corners vertically so they point UPWARDS
  const config: Record<string, { src: string; scaleX: number; scaleY: number; pos: string }> = {
    "top-left": {
      src: imgLeft,
      scaleX: 1,
      scaleY: 1,
      pos: "-top-2 -left-2",
    },
    "top-right": {
      src: imgRight,
      scaleX: 1,
      scaleY: 1,
      pos: "-top-2 -right-2",
    },
    "bottom-left": {
      src: imgLeft,
      scaleX: 1,
      scaleY: -1, // Flip vertically to point upwards
      pos: "-bottom-2 -left-2",
    },
    "bottom-right": {
      src: imgRight,
      scaleX: 1,
      scaleY: -1, // Flip vertically to point upwards
      pos: "-bottom-2 -right-2",
    },
  };

  const c = config[position];
  if (!c) return null;

  return (
    <motion.img
      src={c.src}
      alt=""
      // Pass the flip scales directly to framer-motion so they aren't overridden by the animation!
      initial={{ opacity: 0, scale: 0.6, scaleX: c.scaleX, scaleY: c.scaleY }}
      whileInView={{
        opacity: 1,
        scale: 1,
        scaleX: c.scaleX,
        scaleY: c.scaleY,
        transition: {
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
          delay,
        },
      }}
      viewport={{ once: true, margin: "50px" }}
      className={`absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain pointer-events-none z-10 drop-shadow-lg ${c.pos}`}
    />
  );
}
