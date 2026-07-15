"use client";

import { useEffect, useRef } from "react";

/**
 * Hook for GSAP ScrollTrigger-based scroll animations.
 * Applies fade-in + slide-up animation when element enters viewport.
 */
export function useScrollAnimation<T extends HTMLElement>(
  options?: {
    threshold?: number;
    delay?: number;
    duration?: number;
    y?: number;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      threshold = 0.15,
      delay = 0,
      duration = 800,
      y = 40,
    } = options || {};

    // Set initial hidden state
    element.style.opacity = "0";
    element.style.transform = `translateY(${y}px)`;
    element.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            observer.unobserve(element);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
