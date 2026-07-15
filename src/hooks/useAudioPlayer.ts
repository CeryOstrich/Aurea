"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface AudioPlayerState {
  isPlaying: boolean;
  volume: number;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  setVolume: (vol: number) => void;
}

/**
 * Audio player hook for background music control.
 * Does NOT autoplay — user must trigger play manually.
 */
export function useAudioPlayer(src: string): AudioPlayerState {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.5);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    audio.addEventListener("ended", () => setIsPlaying(false));
    audio.addEventListener("pause", () => setIsPlaying(false));
    audio.addEventListener("play", () => setIsPlaying(true));

    return () => {
      audio.pause();
      audio.removeEventListener("ended", () => setIsPlaying(false));
      audio.removeEventListener("pause", () => setIsPlaying(false));
      audio.removeEventListener("play", () => setIsPlaying(true));
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const play = useCallback(() => {
    audioRef.current?.play().catch(() => {
      // Browser may block autoplay
    });
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const setVolume = useCallback((vol: number) => {
    const clamped = Math.max(0, Math.min(1, vol));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
  }, []);

  return { isPlaying, volume, play, pause, toggle, setVolume };
}
