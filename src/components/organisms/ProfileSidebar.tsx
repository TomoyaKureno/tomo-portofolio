"use client";

import { formatDate } from "@/src/utils";
import useStableColorScheme from "@/src/hooks/useStableColorScheme";
import {
  alpha,
  Badge,
  Box,
  type BoxProps,
  Card,
  Flex,
  type FlexProps,
  ScrollArea,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";

import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import BadgeCard from "../molecules/BadgeCard";
import IconBadge from "../atoms/IconBadge";
import { useAppContext } from "@/src/hooks/useAppContext";
import { fadeUpVariants, interactiveCardTransition, staggerContainerVariants } from "@/src/lib/motion";
import type { ComponentType } from "react";

type IconName = keyof typeof LucideIcons;

const MotionFlex = motion.create(Flex as unknown as ComponentType<FlexProps>);
const MotionBox = motion.create(Box as unknown as ComponentType<BoxProps>);

const ProfileSidebar = () => {
  const theme = useMantineTheme();
  const { isDark } = useStableColorScheme("dark");
  const profile = useAppContext().profile;
  const iconBadgeBg = isDark ? alpha(theme.colors.blue[9], 0.56) : alpha(theme.colors.blue[5], 0.15);
  const iconBadgeColor = isDark ? "blue.4" : "blue.7";
  const socialIconBg = isDark ? "dark.4" : "gray.0";
  const socialIconColor = isDark ? "gray.5" : "gray.2";

  const contactItems = [
    {
      title: "EMAIL",
      icon: "Mail",
      value: profile?.email,
    },
    {
      title: "PHONE",
      icon: "Phone",
      value: profile?.phone,
    },
    {
      title: "BIRTHDAY",
      icon: "Calendar",
      value: profile?.dateOfBirth && formatDate(profile.dateOfBirth),
    },
    {
      title: "ADDRESS",
      icon: "MapPin",
      value: profile?.address,
    },
  ];

  return (
    <Box visibleFrom="md" pos="fixed" w={322} h="100%" py="xl">
      <Card shadow="sm" radius="md" p={0} bg="var(--app-surface-parent)" h="100%" withBorder>
        <MotionFlex
          h="100%"
          pt="xl"
          pb="lg"
          px="lg"
          c="gray.1"
          direction="column"
          gap="lg"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionBox
            variants={fadeUpVariants}
            mx="auto"
            pos="relative"
            w={200}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ willChange: "transform", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          >
            <Box
              pos="relative"
              w="100%"
              bdrs="md"
              bg={isDark ? "white" : "#2b2f38"}
              style={{
                aspectRatio: "4 / 3",
                overflow: "hidden",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            >
              <Image
                src={ profile?.image?.url ?? "/images/tomo-transparent.png" }
                alt="avatar"
                fill
                style={{ objectFit: "cover", objectPosition: "center", backfaceVisibility: "hidden" }}
                loading="eager"
              />
            </Box>
          </MotionBox>

          <MotionFlex variants={fadeUpVariants} direction="column" gap="sm" align="center">
            <Text fz="h3" fw={700}>
              Fathariq Dimas | Tomo
            </Text>
            <Badge
              radius="md"
              px="md"
              py="sm"
              bg="var(--app-surface-elevated)"
              c="gray.4"
              style={{ border: "1px solid var(--app-border-color)" }}
            >
              Frontend Developer
            </Badge>
          </MotionFlex>

          <Box bg="dark.3" w="100%" h="4" bdrs="md" mx="auto" my="8" />

          <ScrollArea h="100%" type="never">
            <MotionFlex direction="column" gap="md" variants={staggerContainerVariants} initial="hidden" animate="visible" p={"xs"}>
              {contactItems.map((item) => (
                <MotionBox key={item.title} variants={fadeUpVariants}>
                  <BadgeCard
                    cardProps={{
                      styles: {
                        root: { boxShadow: "0 4px 14px var(--app-shadow-contact-color)" },
                      },
                    }}
                    iconBadge={{
                      icon: { name: item.icon as IconName, size: 20 },
                      p: "sm",
                      bdrs: "md",
                      w: "fit-content",
                      bg: iconBadgeBg,
                      c: iconBadgeColor,
                    }}
                    title={{ text: item.title }}
                    description={{ text: item.value }}
                  />
                </MotionBox>
              ))}

              <Flex gap="md" align="center" bdrs="md" justify="center">
                {profile?.socialMedia.map((data) => (
                  <motion.a
                    key={data.title}
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={interactiveCardTransition}
                  >
                    <IconBadge
                      icon={{ name: data.title as IconName, size: 20 }}
                      c={socialIconColor}
                      p="sm"
                      bg={socialIconBg}
                      bdrs="md"
                      w="fit-content"
                      style={{ cursor: "pointer" }}
                    />
                  </motion.a>
                ))}
              </Flex>
            </MotionFlex>
          </ScrollArea>
        </MotionFlex>
      </Card>
    </Box>
  );
};

export default ProfileSidebar;
