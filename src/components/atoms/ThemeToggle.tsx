"use client";

import useStableColorScheme from "@/src/hooks/useStableColorScheme";
import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  size?: number | string;
  withTooltip?: boolean;
};

export default function ThemeToggle({ size = "md", withTooltip = false }: ThemeToggleProps) {
  const { setColorScheme } = useMantineColorScheme();
  const { isDark } = useStableColorScheme("dark");
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  const button = (
    <ActionIcon
      size={size}
      radius="xl"
      variant="light"
      color="blue"
      onClick={() => setColorScheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </ActionIcon>
  );

  if (withTooltip) {
    return <Tooltip label={label}>{button}</Tooltip>;
  }

  return button;
}
