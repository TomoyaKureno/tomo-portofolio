"use client";

import useStableColorScheme from "@/src/hooks/useStableColorScheme";
import { alpha, Badge, Box, type BoxProps, Flex, Grid, GridCol, Text, useMantineTheme } from "@mantine/core";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType } from "react";

import { useAppContext } from "@/src/hooks/useAppContext";
import MainContent from "../components/organisms/MainContent";
import BadgeCard from "../components/molecules/BadgeCard";
import { GetSkillsQuery, GetTechnologiesQuery } from "../gql/graphql";
import { fadeUpVariants, staggerContainerVariants } from "@/src/lib/motion";

type IconName = keyof typeof LucideIcons;

type AboutClientProps = {
  skills: GetSkillsQuery["skills"];
  technologies: GetTechnologiesQuery["technologies"];
};

const MotionBox = motion.create(Box as unknown as ComponentType<BoxProps>);
const AboutClient: React.FC<AboutClientProps> = ({ skills, technologies }) => {
  const theme = useMantineTheme();
  const { isDark } = useStableColorScheme("dark");
  const { profile } = useAppContext();
  const iconBadgeBg = isDark ? alpha(theme.colors.blue[9], 0.56) : alpha(theme.colors.blue[5], 0.15);
  const iconBadgeColor = isDark ? "blue.4" : "blue.7";
  const techChipBg = isDark ? alpha(theme.colors.blue[9], 0.24) : alpha(theme.colors.blue[5], 0.12);
  const techChipBorder = isDark ? alpha(theme.colors.blue[7], 0.42) : alpha(theme.colors.blue[6], 0.24);

  return (
    <MotionBox variants={staggerContainerVariants} initial="hidden" animate="visible">
      <MainContent>
        <MotionBox variants={fadeUpVariants}>
          <Text fz="h4" fw={500}>
            {profile?.description}
          </Text>
        </MotionBox>

        <MotionBox variants={fadeUpVariants}>
          <Text fz="h2" fw="bold">
            What I&apos;m Doing
          </Text>
          <Grid grow mt="lg">
            {skills.map((data) => (
              <GridCol key={data.id} span={6}>
                <BadgeCard
                  cardProps={{ h: "100%" }}
                  iconBadge={{
                    icon: { name: data.icon as IconName, size: 20 },
                    p: "sm",
                    bdrs: "md",
                    w: "fit-content",
                    bg: iconBadgeBg,
                    c: iconBadgeColor,
                    mt: 4,
                  }}
                  title={{ text: data.name, fz: "h4", fw: 600, c: "gray.0", mb: 4 }}
                  description={{ text: data.description }}
                />
              </GridCol>
            ))}
          </Grid>
        </MotionBox>

        <MotionBox variants={fadeUpVariants}>
          <Text fz="h2" fw="bold">
            Technologies I Use
          </Text>
          <Box
            mt="lg"
            p="md"
            bdrs="md"
            bg="var(--app-surface-content)"
            style={{
              border: "1px solid var(--app-border-color)",
            }}
          >
            <Flex gap="sm" wrap="wrap">
            {(technologies ?? []).map((technology) => (
              <motion.a
                key={technology.id}
                href={technology.url ?? "#"}
                target={technology.url ? "_blank" : undefined}
                rel={technology.url ? "noreferrer" : undefined}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ textDecoration: "none" }}
              >
                <Badge
                  variant="filled"
                  c={iconBadgeColor}
                  radius="md"
                  leftSection={<Box w={6} h={6} bdrs="xl" bg="blue.5" />}
                  style={{
                    textTransform: "none",
                    background: techChipBg,
                    border: `1px solid ${techChipBorder}`,
                    paddingInline: "10px",
                    paddingBlock: "6px",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {technology.name}
                </Badge>
              </motion.a>
            ))}
            </Flex>
          </Box>
        </MotionBox>

        {/* <MotionBox variants={fadeUpVariants}>
          <Text fz="h2" fw="bold">
            Testimonials
          </Text>
          <ScrollArea
            pb={{ base: "md", md: "xl" }}
            scrollbars="x"
            type="auto"
            w="100%"
            scrollbarSize={8}
            classNames={{
              scrollbar: classes.scrollbarHorizontal,
              thumb: classes.scrollThumb,
            }}
          >
            <MotionFlex
              w={{ base: "100%", md: "max-content" }}
              pt={"xs"}
              gap="md"
              direction={{ base: "column", md: "row" }}
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((data) => (
                <MotionBox key={data.name} variants={fadeUpVariants} whileHover={{ y: -4 }} w={{ base: "100%", md: "auto" }}>
                  <TestimonialCard
                    cardProps={{ h: "100%", w: { base: "100%", sm: 420, md: 480 } }}
                    iconBadge={{
                      icon: { name: data.icon as IconName, size: 40 },
                      p: "sm",
                      bdrs: "md",
                      w: "fit-content",
                      bg: iconBadgeBg,
                      c: iconBadgeColor,
                    }}
                    title={{
                      text: data.name,
                      fz: "h4",
                      fw: 600,
                      c: "gray.0",
                      mb: 4,
                    }}
                    description={{ text: data.description }}
                  />
                </MotionBox>
              ))}
            </MotionFlex>
          </ScrollArea>
        </MotionBox> */}
      </MainContent>
    </MotionBox>
  );
};

export default AboutClient;
