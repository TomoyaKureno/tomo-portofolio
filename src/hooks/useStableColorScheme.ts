"use client";

import { useComputedColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";

type ColorScheme = "light" | "dark";

export default function useStableColorScheme(defaultScheme: ColorScheme = "dark") {
  const computedColorScheme = useComputedColorScheme(defaultScheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colorScheme = mounted ? computedColorScheme : defaultScheme;

  return {
    colorScheme,
    isDark: colorScheme === "dark",
  };
}
