"use client";

import { navigationLinks } from "@/src/lib/constantData";
import { getActiveNavPath, normalizePath } from "@/src/lib/navigation";
import { interactiveCardTransition } from "@/src/lib/motion";
import useStableColorScheme from "@/src/hooks/useStableColorScheme";
import { Box, Card, Flex, Text, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../atoms/ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const theme = useMantineTheme();
  const { isDark } = useStableColorScheme("dark");
  const activePath = getActiveNavPath(pathname);

  return (
    <Card
      shadow="sm"
      pos="absolute"
      top={0}
      right={0}
      p={0}
      visibleFrom="md"
      withBorder
      style={{
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "var(--mantine-radius-md)",
        borderBottomRightRadius: "0px",
        borderBottomLeftRadius: "var(--mantine-radius-md)",
        background: isDark
          ? "linear-gradient(135deg, rgba(18, 24, 38, 0.64), rgba(10, 132, 255, 0.12))"
          : "linear-gradient(135deg, rgba(255, 255, 255, 0.56), rgba(244, 247, 252, 0.42))",
        borderColor: isDark ? "var(--app-border-color)" : "rgba(148, 163, 184, 0.32)",
        boxShadow: isDark ? "0 10px 28px rgba(0, 0, 0, 0.35)" : "0 12px 30px rgba(148, 163, 184, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(18px) saturate(170%)",
        WebkitBackdropFilter: "blur(18px) saturate(170%)",
        zIndex: 20,
        transform: "translate(1px, -1px)",
      }}
    >
      <Flex px="lg" py="md" gap="sm" justify="flex-end" align="center">
        {Object.entries(navigationLinks).map(([href, nav]) => {
          const isActive = normalizePath(href) === activePath;

          return (
            <Link key={href} href={href} aria-current={isActive ? "page" : undefined}>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={interactiveCardTransition}
              >
                <Box
                  px="sm"
                  py={6}
                  bdrs="md"
                  bg={isActive ? "rgba(10,132,255,0.22)" : "transparent"}
                  style={{
                    border: `1px solid ${isActive ? theme.colors.blue[4] : "transparent"}`,
                  }}
                >
                  <Text fw={isActive ? 700 : 600} c={isActive ? "blue.4" : isDark ? "gray.1" : "gray.2"} fz="sm">
                    {nav.label}
                  </Text>
                </Box>
              </motion.div>
            </Link>
          );
        })}

        <ThemeToggle size="lg" withTooltip />
      </Flex>
    </Card>
  );
};

export default Navbar;
