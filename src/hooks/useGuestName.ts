"use client";

import { useSearchParams } from "next/navigation";

/**
 * Parses the `?to=` URL parameter for guest name personalization.
 * Handles URL encoding (e.g., %20 → space).
 * Returns "Tamu Undangan" as fallback if no name is provided.
 */
export function useGuestName(): string {
  const searchParams = useSearchParams();
  const name = searchParams.get("to");

  if (!name || name.trim() === "") {
    return "Tamu Undangan";
  }

  return decodeURIComponent(name.trim());
}
