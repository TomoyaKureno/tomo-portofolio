"use client";

import { navigationLinks } from "@/src/lib/constantData";
import { getActiveNavPath, normalizePath } from "@/src/lib/navigation";
import { interactiveCardTransition } from "@/src/lib/motion";
import { Box, Card, Flex, Text, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const theme = useMantineTheme();
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
        zIndex: 20,
        transform: "translate(1px, -1px)",
      }}
    >
      <Flex px="lg" py="md" gap="sm" bg="blue.7" c="white" justify="flex-end" align="center">
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
                  bg={isActive ? "rgba(255,255,255,0.2)" : "transparent"}
                  style={{
                    border: `1px solid ${isActive ? theme.colors.yellow[2] : "transparent"}`,
                  }}
                >
                  <Text fw={isActive ? 700 : 600} c={isActive ? "yellow.2" : "white"} fz="sm">
                    {nav.label}
                  </Text>
                </Box>
              </motion.div>
            </Link>
          );
        })}
      </Flex>
    </Card>
  );
};

export default Header;
