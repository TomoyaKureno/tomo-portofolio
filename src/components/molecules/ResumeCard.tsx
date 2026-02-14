"use client";

/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { formatDate } from "@/src/utils";
import { Box, Card, CardProps, Flex, Group, List, Text, Title } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { motion } from "framer-motion";
import { GetResumesQuery } from "@/src/gql/graphql";

type Education = GetResumesQuery["educations"][number];
type Experience = GetResumesQuery["experiences"][number];
type Resume = Education | Experience;

type ResumeCardProps = {
  resumeData: Resume;
  cardProps?: CardProps;
};

const ResumeCard: React.FC<ResumeCardProps> = ({ resumeData, cardProps }) => {
  const { resume: data } = resumeData;
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
            <Text c="dimmed" fz="h5" fs="italic" fw={600}>
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
              <Text c="dimmed" fz="h5" fs="italic" fw={600}>
                {(value as any).record}
              </Text>
              <Text c="dimmed" fz="h5" fs="italic" fw={600}>
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
            <Title order={5} fw={600} mb={8}>
              {value.label}
            </Title>

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

  return (
    <Flex gap="lg" ps={8}>
      <Flex pos="relative" direction="column" align="center" w="md">
        <Box w="md" h="md" bg={isCurrent ? "blue.6" : "gray.5"} pos="absolute" top={0} bdrs="md" />
        {isCurrent && <Box w="md" h="md" bg="blue.6" pos="absolute" top={0} bdrs="md" className="animate-ping" />}
        <Box flex={1} w={1} bg="gray.3" bdrs="md" />
      </Flex>

      <motion.div
        style={{ width: "100%" }}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card
          shadow="sm"
          radius="md"
          p="md"
          pb={isOverflow ? 0 : "md"}
          bg="dark.5"
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
              <Flex direction="column" gap={8} c="white">
                <Group justify="space-between">
                  <Text fz="h4" fw={700}>
                    {data.organization}
                  </Text>
                  <Text fz="h5" fs="italic" fw={600}>
                    {formatDate(data.startDate, { month: "long", year: "numeric" })} -{" "}
                    {data.endDate ? formatDate(data.endDate, { month: "long", year: "numeric" }) : "Present"}
                  </Text>
                </Group>

                <Group justify="space-between">
                  <Text fz="h5" fs="italic" fw={600}>
                    {data.role}
                  </Text>
                  {isEducation(resumeData) && resumeData.gpa != null && (
                    <Text fz="h5" fs="italic" fw={700} c="blue.5">
                      GPA: {formatScore(resumeData.gpa)}
                      {resumeData.maxScore != null && `/${formatScore(resumeData.maxScore)}`}
                    </Text>
                  )}
                </Group>

                {describeRecords(data)}

                {isOverflow && (
                  <Flex w="100%" pb="md" align="end" justify="center">
                    <Text onClick={() => setIsExpand(false)} c="white" fw={600} style={{ cursor: "pointer" }}>
                      Show Less
                    </Text>
                  </Flex>
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
                background: "linear-gradient(180deg, transparent, #242424)",
              }}
            >
              <Text onClick={() => setIsExpand(true)} c="white" fw={600} style={{ cursor: "pointer" }}>
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
