"use client";

import { navigationLinks } from "@/src/lib/constantData";
import { fadeUpVariants, staggerContainerVariants } from "@/src/lib/motion";
import { Box, Flex, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

type MainContentWrapperProps = {
  children: React.ReactNode;
};

const MotionFlex = motion.create(Flex);
const MotionBox = motion.create(Box);

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
          <Flex direction="column" gap="sm">
            <Text fz={{ base: "h2", md: "h1" }} fw="bold" w="fit-content" lh={1.45}>
              {title}
            </Text>
            <Box bg="blue.5" w="3rem" h="0.5rem" bdrs="md" />
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
