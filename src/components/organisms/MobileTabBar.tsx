"use client";

import { navigationLinks } from "@/src/lib/constantData";
import useStableColorScheme from "@/src/hooks/useStableColorScheme";
import { getActiveNavPath, normalizePath } from "@/src/lib/navigation";
import { interactiveCardTransition } from "@/src/lib/motion";
import { Box, Card, Flex, Text, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import { Award, FileText, FolderKanban, Mail, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType } from "react";

const navIcons: Record<string, ComponentType<{ size?: number }>> = {
  "/": UserRound,
  "/resumes": FileText,
  "/projects": FolderKanban,
  "/certificates": Award,
  "/contact": Mail,
};

export default function MobileTabBar() {
  const pathname = usePathname();
  const theme = useMantineTheme();
  const { isDark } = useStableColorScheme("dark");
  const activePath = getActiveNavPath(pathname);

  return (
    <Box
      hiddenFrom="md"
      pos="fixed"
      left={0}
      right={0}
      bottom={0}
      px="sm"
      pt={0}
      style={{
        zIndex: 30,
        pointerEvents: "none",
        paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <Card
        withBorder
        bg="var(--app-surface-glass)"
        shadow="sm"
        p={6}
        radius="md"
        style={{
          pointerEvents: "auto",
          borderColor: "var(--app-border-color)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <Flex justify="space-between" align="center" gap={4}>
          {Object.entries(navigationLinks).map(([href, nav]) => {
            const Icon = navIcons[href] ?? UserRound;
            const isActive = normalizePath(href) === activePath;

            return (
              <Link key={href} href={href} aria-current={isActive ? "page" : undefined} style={{ flex: 1 }}>
                <motion.div whileTap={{ scale: 0.96 }} transition={interactiveCardTransition}>
                  <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    gap={4}
                    py={8}
                    px={4}
                    bdrs="md"
                    bg={isActive ? "rgba(10,132,255,0.22)" : "transparent"}
                    style={{
                      border: `1px solid ${isActive ? theme.colors.blue[4] : "transparent"}`,
                    }}
                  >
                    <Icon size={16} />
                    <Text size="xs" fw={isActive ? 700 : 600} c={isActive ? "blue.4" : isDark ? "gray.2" : "gray.3"}>
                      {nav.label}
                    </Text>
                  </Flex>
                </motion.div>
              </Link>
            );
          })}
        </Flex>
      </Card>
    </Box>
  );
}
