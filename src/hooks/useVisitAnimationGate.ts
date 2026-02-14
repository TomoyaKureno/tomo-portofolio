"use client";

import { useEffect, useState } from "react";

export type VisitAnimationMode = "scroll" | "eager";

const STORAGE_PREFIX = "visit-animation-gate";
const MARK_DELAY_MS = 800;

const getStorageKey = (key: string): string => `${STORAGE_PREFIX}:${key}`;

const resolveVisitMode = (key: string): VisitAnimationMode => {
  if (typeof window === "undefined") return "scroll";

  const storageKey = getStorageKey(key);

  try {
    return window.localStorage.getItem(storageKey) === "1" ? "eager" : "scroll";
  } catch {
    return "scroll";
  }
};

export default function useVisitAnimationGate(key: string): VisitAnimationMode {
  const [mode, setMode] = useState<VisitAnimationMode>(() => resolveVisitMode(key));

  useEffect(() => {
    setMode(resolveVisitMode(key));

    // Mark as visited a bit later to avoid React StrictMode double-mount
    // causing eager mode immediately on first open in development.
    const timer = window.setTimeout(() => {
      try {
        window.localStorage.setItem(getStorageKey(key), "1");
      } catch {
        // ignore storage errors
      }
    }, MARK_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [key]);

  return mode;
}
