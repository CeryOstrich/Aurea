"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MUSIC } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

// Extract YouTube video ID from URL
function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const videoId = getYouTubeId(MUSIC.src);

  const initPlayer = useCallback(() => {
    if (!videoId || !containerRef.current || playerRef.current) return;

    // Create a div for the player inside the container
    const playerDiv = document.createElement("div");
    playerDiv.id = "yt-music-player";
    containerRef.current.appendChild(playerDiv);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const YT = (window as unknown as Record<string, any>).YT;
    playerRef.current = new YT.Player("yt-music-player", {
      videoId,
      height: "0",
      width: "0",
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: videoId, // Required for looping
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        playsinline: 1,
      },
      events: {
        onReady: () => {
          playerRef.current?.setVolume(50);
          playerRef.current?.playVideo();
          setIsReady(true);
          setIsPlaying(true);
        },
      },
    });
  }, [videoId]);

  useEffect(() => {
    // Load YouTube IFrame API script
    const win = window as unknown as Record<string, unknown>;
    if (typeof window !== "undefined" && !win.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
      win.onYouTubeIframeAPIReady = initPlayer;
    } else if (win.YT && (win.YT as Record<string, unknown>).Player) {
      initPlayer();
    }

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [initPlayer]);

  const toggle = () => {
    if (!isReady || !playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Hidden container for YouTube player */}
      <div ref={containerRef} style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", pointerEvents: "none" }} />

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
