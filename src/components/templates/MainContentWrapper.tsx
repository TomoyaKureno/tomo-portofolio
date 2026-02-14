"use client";

import { navigationLinks } from "@/src/lib/constantData";
import { fadeUpVariants, staggerContainerVariants } from "@/src/lib/motion";
import { Box, type BoxProps, Flex, type FlexProps, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import type { ComponentType } from "react";
import ThemeToggle from "../atoms/ThemeToggle";

type MainContentWrapperProps = {
  children: React.ReactNode;
};

const MotionFlex = motion.create(Flex as unknown as ComponentType<FlexProps>);
const MotionBox = motion.create(Box as unknown as ComponentType<BoxProps>);

const MainContentWrapper: React.FC<MainContentWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const title = navigationLinks[pathname as keyof typeof navigationLinks]?.title ?? "";

  return (
    <MotionFlex
      direction="column"
      gap="md"
      c="gray.0"
      px={{ base: "md", md: "xl" }}
      pt={{ base: "lg", md: "5rem", lg: "lg" }}
      pb="xl"
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {title && (
        <MotionBox variants={fadeUpVariants}>
          <Flex justify="space-between" align="flex-start" gap="sm">
            <Flex direction="column" gap="sm">
              <Text fz={{ base: "h2", md: "h1" }} fw="bold" w="fit-content" lh={1.45}>
                {title}
              </Text>
              <Box bg="blue.5" w="3rem" h="0.5rem" bdrs="md" />
            </Flex>

            <Box hiddenFrom="md" pt={2}>
              <ThemeToggle size="md" />
            </Box>
          </Flex>
        </MotionBox>
      )}

      <MotionBox flex={1} variants={fadeUpVariants}>
        {children}
      </MotionBox>
    </MotionFlex>
  );
};

export default MainContentWrapper;
