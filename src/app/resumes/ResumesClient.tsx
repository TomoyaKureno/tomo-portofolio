"use client";

import IconBadge from "@/src/components/atoms/IconBadge";
import ResumeCard from "@/src/components/molecules/ResumeCard";
import MainContent from "@/src/components/organisms/MainContent";
import { GetResumesQuery } from "@/src/gql/graphql";
import { sortResumeByLatestEndYear } from "@/src/lib/resume";
import { fadeUpVariants, staggerContainerVariants } from "@/src/lib/motion";

import { alpha, Box, Flex, Text, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";

type ResumesClientProps = {
  resumes: GetResumesQuery;
};

type ResumeSectionProps = {
  title: string;
  icon: "GraduationCap" | "Briefcase";
  items: GetResumesQuery["educations"] | GetResumesQuery["experiences"];
};

const MotionBox = motion.create(Box);
const ResumeSection: React.FC<ResumeSectionProps> = ({ title, icon, items }) => {
  const theme = useMantineTheme();
  const sortedItems = sortResumeByLatestEndYear(items);

  return (
    <Box>
      <Flex align="center" gap="sm">
        <IconBadge
          icon={{ name: icon, size: 20 }}
          p={6}
          bdrs="md"
          w="fit-content"
          bg={alpha(theme.colors.blue[9], 0.6)}
          c="blue.5"
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
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const ResumesClient: React.FC<ResumesClientProps> = ({ resumes }) => {
  return (
    <MainContent>
      <MotionBox variants={staggerContainerVariants} initial="hidden" animate="visible">
        <MotionBox variants={fadeUpVariants}>
          <ResumeSection title="Educations" icon="GraduationCap" items={resumes.educations} />
        </MotionBox>
        <MotionBox variants={fadeUpVariants} mt="xl">
          <ResumeSection title="Experiences" icon="Briefcase" items={resumes.experiences} />
        </MotionBox>
      </MotionBox>
    </MainContent>
  );
};

export default ResumesClient;
