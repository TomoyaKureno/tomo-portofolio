"use client";

import React, { useEffect, useState } from "react";
import { formatDate } from "@/src/utils";
import { Box, Card, CardProps, Flex, Group, List, Text } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { motion } from "framer-motion";
import { GetResumesQuery } from "@/src/gql/graphql";
import Image from "next/image";
import type { VisitAnimationMode } from "@/src/hooks/useVisitAnimationGate";

type Education = GetResumesQuery["educations"][number];
type Experience = GetResumesQuery["experiences"][number];
type Resume = Education | Experience;

type ResumeCardProps = {
  resumeData: Resume;
  cardProps?: CardProps;
  animationMode?: VisitAnimationMode;
};

const ResumeCard: React.FC<ResumeCardProps> = ({ resumeData, cardProps, animationMode = "scroll" }) => {
  const { resume: data } = resumeData;
  const organizationLogoUrl = data.organizationLogo?.url;
  const { ref, height } = useElementSize();
  const maxHeight = 300;

  const [isExpand, setIsExpand] = useState(true);
  const [isOverflow, setIsOverflow] = useState(false);

  const currentYear = new Date().getFullYear();
  const isCurrent = !data.endDate || Number(data.endDate) >= currentYear;

  const isEducation = (item: Resume): item is Education => "gpa" in item;
  const formatScore = (value: number): string => Number(value).toFixed(2);

  const isObject = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null;

  const hasTextRecords = (v: unknown): v is { textRecords: unknown[] } =>
    isObject(v) && "textRecords" in v && Array.isArray((v as any).textRecords);

  const hasGroupRecords = (v: unknown): v is { groupRecords: unknown[] } =>
    isObject(v) && "groupRecords" in v && Array.isArray((v as any).groupRecords);

  const hasResumeRecords = (v: unknown): v is { resumeRecords: unknown[] } =>
    isObject(v) && "resumeRecords" in v && Array.isArray((v as any).resumeRecords);

  const hasLabel = (v: unknown): v is { label: string } =>
    isObject(v) && "label" in v && typeof (v as any).label === "string";

  const describeRecords = (
    records:
      | string[]
      | Resume["resume"]
      | Resume["resume"]["groupRecords"]
      | Resume["resume"]["groupRecords"][number]["resumeRecords"],
    level: number = 0,
  ): React.ReactNode => {
    if (!records) return null;

    if (hasTextRecords(records) || hasGroupRecords(records)) {
      const thisHasLabel = hasLabel(records);
      const thisHasText = hasTextRecords(records) && (records.textRecords as unknown[]).length > 0;
      const thisHasGroup = hasGroupRecords(records) && (records.groupRecords as unknown[]).length > 0;

      if (thisHasText && !thisHasLabel) {
        return (
          <List withPadding={level > 1} listStyleType="disc" spacing={8} center>
            {describeRecords((records as any).textRecords, level + 1)}
          </List>
        );
      }

      if (thisHasGroup && !thisHasLabel) {
        return (
          <List withPadding={level > 1} spacing={8} center>
            {describeRecords((records as any).groupRecords, level + 1)}
          </List>
        );
      }

      return null;
    }

    if (!Array.isArray(records)) return null;

    return records.map((value, index) => {
      if (typeof value === "string") {
        return (
          <List.Item key={index}>
            <Text c="gray.3" fz="sm" fw={500}>
              {value}
            </Text>
          </List.Item>
        );
      }

      if (isObject(value) && "record" in value) {
        return (
          <List.Item
            key={index}
            classNames={{
              itemWrapper: "w-full",
              itemLabel: "w-full",
            }}
          >
            <Group justify="space-between" gap="xs" wrap="nowrap">
              <Text c="gray.3" fz="sm" fw={500}>
                {(value as any).record}
              </Text>
              <Text c="gray.4" fz="sm" fw={500}>
                {formatDate((value as any).startDate, { year: "numeric" })} -{" "}
                {(value as any).endDate ? formatDate((value as any).endDate, { year: "numeric" }) : "Present"}
              </Text>
            </Group>
          </List.Item>
        );
      }

      if (hasLabel(value)) {
        const vHasText = hasTextRecords(value) && (value.textRecords as unknown[]).length > 0;
        const vHasResume = hasResumeRecords(value) && (value.resumeRecords as unknown[]).length > 0;

        return (
          <List.Item
            key={index}
            classNames={{
              itemWrapper: "w-full",
              itemLabel: "w-full",
            }}
          >
            <Text fw={700} fz="md" c="gray.1" mb={8}>
              {value.label}
            </Text>

            {vHasText && (
              <List withPadding={level > 0} listStyleType="disc" spacing={8} center>
                {describeRecords((value as any).textRecords, level + 1)}
              </List>
            )}

            {vHasResume && (
              <List withPadding={level > 0} listStyleType="disc" spacing={8} center>
                {describeRecords((value as any).resumeRecords, level + 1)}
              </List>
            )}
          </List.Item>
        );
      }

      return null;
    });
  };

  useEffect(() => {
    if (!isOverflow && height > maxHeight) {
      setIsOverflow(true);
      setIsExpand(false);
    }
  }, [height, isOverflow]);

  const measuredHeight = height > 0 ? height : maxHeight;
  const animatedMaxHeight = isOverflow ? (isExpand ? measuredHeight : maxHeight) : measuredHeight;
  const motionProps =
    animationMode === "eager"
      ? {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, ease: "easeOut" as const },
        }
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.3, ease: "easeOut" as const },
        };

  return (
    <Flex gap="lg" ps={8}>
      <Flex pos="relative" direction="column" align="center" w="md">
        <Box w="md" h="md" bg={isCurrent ? "blue.6" : "gray.5"} pos="absolute" top={0} bdrs="md" />
        {isCurrent && <Box w="md" h="md" bg="blue.6" pos="absolute" top={0} bdrs="md" className="animate-ping" />}
        <Box flex={1} w={1} bg="gray.3" bdrs="md" />
      </Flex>

      <motion.div
        style={{ width: "100%" }}
        {...motionProps}
      >
        <Card
          shadow="sm"
          radius="md"
          p="md"
          pb={isOverflow ? 0 : "md"}
          bg="var(--app-surface-content)"
          mb="lg"
          pos="relative"
          withBorder
          w="100%"
          {...cardProps}
        >
          <motion.div
            style={{ overflow: "hidden", maxHeight: animatedMaxHeight }}
            initial={false}
            animate={{ maxHeight: animatedMaxHeight }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div ref={ref}>
              <Flex direction="column" gap={8} c="gray.1" pos={"relative"}>
                <Group justify="space-between">
                  <Text fz="xl" fw={700} c="gray.0">
                    {data.organization}
                  </Text>
                  <Text fz="sm" fw={500} c="gray.4">
                    {formatDate(data.startDate, { month: "long", year: "numeric" })} -{" "}
                    {data.endDate ? formatDate(data.endDate, { month: "long", year: "numeric" }) : "Present"}
                  </Text>
                </Group>

                <Group justify="space-between">
                  <Text fz="md" fw={600} c="blue.3">
                    {data.role}
                  </Text>
                  {isEducation(resumeData) && resumeData.gpa != null && (
                    <Text fz="md" fw={700} c="blue.4">
                      GPA: {formatScore(resumeData.gpa)}
                      {resumeData.maxScore != null && `/${formatScore(resumeData.maxScore)}`}
                    </Text>
                  )}
                </Group>

                {describeRecords(data)}

                {isOverflow && (
                  <Flex w="100%" pb="md" align="end" justify="center">
                    <Text onClick={() => setIsExpand(false)} c="blue.3" fz="sm" fw={600} style={{ cursor: "pointer" }}>
                      Show Less
                    </Text>
                  </Flex>
                )}

                {organizationLogoUrl && (
                  <Box
                    pos="absolute"
                    top={20}
                    right={10}
                    w={
                      isEducation(resumeData)
                        ? { base: 156, sm: 204, md: 252 }
                        : { base: 132, sm: 172, md: 220 }
                    }
                    style={{ aspectRatio: "3 / 1", opacity: 0.2, pointerEvents: "none" }}
                  >
                    <Image
                      src={organizationLogoUrl}
                      alt={`${data.organization} logo`}
                      fill
                      sizes={
                        isEducation(resumeData)
                          ? "(max-width: 48em) 156px, (max-width: 62em) 204px, 252px"
                          : "(max-width: 48em) 132px, (max-width: 62em) 172px, 220px"
                      }
                      style={{ objectFit: "contain", objectPosition: "right top" }}
                    />
                  </Box>
                )}
              </Flex>
            </div>
          </motion.div>

          {isOverflow && !isExpand && (
            <Flex
              pos="absolute"
              left={0}
              bottom={0}
              py="md"
              w="100%"
              h={80}
              align="end"
              justify="center"
              style={{
                background: "linear-gradient(180deg, transparent, var(--app-surface-content))",
              }}
            >
              <Text onClick={() => setIsExpand(true)} c="blue.3" fz="sm" fw={600} style={{ cursor: "pointer" }}>
                Show More
              </Text>
            </Flex>
          )}
        </Card>
      </motion.div>
    </Flex>
  );
};

export default ResumeCard;
