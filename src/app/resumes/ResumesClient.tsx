"use client";

import IconBadge from "@/src/components/atoms/IconBadge";
import ResumeCard from "@/src/components/molecules/ResumeCard";
import MainContent from "@/src/components/organisms/MainContent";
import { GetResumesQuery } from "@/src/gql/graphql";
import useStableColorScheme from "@/src/hooks/useStableColorScheme";
import useVisitAnimationGate, { type VisitAnimationMode } from "@/src/hooks/useVisitAnimationGate";
import { sortResumeByLatestEndYear } from "@/src/lib/resume";
import { fadeUpVariants, staggerContainerVariants } from "@/src/lib/motion";

import { alpha, Box, type BoxProps, Flex, Text, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import type { ComponentType } from "react";

type ResumesClientProps = {
  resumes: GetResumesQuery;
};

type ResumeSectionProps = {
  title: string;
  icon: "GraduationCap" | "Briefcase";
  items: GetResumesQuery["educations"] | GetResumesQuery["experiences"];
  animationMode: VisitAnimationMode;
};

const MotionBox = motion.create(Box as unknown as ComponentType<BoxProps>);
const ResumeSection: React.FC<ResumeSectionProps> = ({ title, icon, items, animationMode }) => {
  const theme = useMantineTheme();
  const { isDark } = useStableColorScheme("dark");
  const iconBadgeBg = isDark ? alpha(theme.colors.blue[9], 0.56) : alpha(theme.colors.blue[5], 0.15);
  const iconBadgeColor = isDark ? "blue.4" : "blue.7";
  const sortedItems = sortResumeByLatestEndYear(items);

  return (
    <Box>
      <Flex align="center" gap="sm">
        <IconBadge
          icon={{ name: icon, size: 20 }}
          p={6}
          bdrs="md"
          w="fit-content"
          bg={iconBadgeBg}
          c={iconBadgeColor}
        />
        <Text fz="h2" fw="bold">
          {title}
        </Text>
      </Flex>

      <Box mt="lg">
        {sortedItems.map((item, idx) => (
          <Box key={item.id}>
            <ResumeCard
              resumeData={item}
              cardProps={{ mb: idx === sortedItems.length - 1 ? 0 : "lg" }}
              animationMode={animationMode}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const ResumesClient: React.FC<ResumesClientProps> = ({ resumes }) => {
  const animationMode = useVisitAnimationGate("page:resumes");

  return (
    <MainContent>
      <MotionBox variants={staggerContainerVariants} initial="hidden" animate="visible">
        <MotionBox variants={fadeUpVariants}>
          <ResumeSection
            title="Educations"
            icon="GraduationCap"
            items={resumes.educations}
            animationMode={animationMode}
          />
        </MotionBox>
        <MotionBox variants={fadeUpVariants} mt="xl">
          <ResumeSection
            title="Experiences"
            icon="Briefcase"
            items={resumes.experiences}
            animationMode={animationMode}
          />
        </MotionBox>
      </MotionBox>
    </MainContent>
  );
};

export default ResumesClient;
