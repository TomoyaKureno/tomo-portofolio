"use client";

import { useEffect, useState } from "react";

const STORAGE_PREFIX = "daily-animation-gate";
export type DailyAnimationMode = "scroll" | "eager";

const getTodayStamp = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const resolveModeForKey = (key: string): DailyAnimationMode => {
  if (typeof window === "undefined") return "scroll";

  const storageKey = `${STORAGE_PREFIX}:${key}`;
  const today = getTodayStamp();

  try {
    const lastPlayedDate = window.localStorage.getItem(storageKey);

    if (lastPlayedDate === today) {
      return "eager";
    }

    window.localStorage.setItem(storageKey, today);
    return "scroll";
  } catch {
    // Fallback when storage is unavailable: keep scroll animation behavior.
    return "scroll";
  }
};

export function useDailyAnimationGate(key: string): DailyAnimationMode {
  const [mode, setMode] = useState<DailyAnimationMode>(() => resolveModeForKey(key));

  useEffect(() => {
    setMode(resolveModeForKey(key));
  }, [key]);

  return mode;
}
