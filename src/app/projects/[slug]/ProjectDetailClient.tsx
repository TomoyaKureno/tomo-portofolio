"use client";

import MainContent from "@/src/components/organisms/MainContent";
import { GetProjectBySlugQuery } from "@/src/gql/graphql";
import useVisitAnimationGate from "@/src/hooks/useVisitAnimationGate";
import { fadeUpVariants, staggerContainerVariants } from "@/src/lib/motion";
import { formatDisplayName } from "@/src/utils";
import { useMediaQuery } from "@mantine/hooks";
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Calendar, ChevronLeft, Clock3, ExternalLink, Github, UserRound } from "lucide-react";
import Image from "next/image";

type Project = NonNullable<GetProjectBySlugQuery["project"]>;

type ProjectDetailClientProps = {
  project: Project;
};

const MotionDiv = motion.div;

const gridItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const isVerySmallMobile = useMediaQuery("(max-width: 400px)");
  const animationMode = useVisitAnimationGate(`project:${project.id}`);
  const isEager = animationMode === "eager";
  const contactSubject = `I really like your project: "${project.name}"`;
  const contactMessage = `Hi there,\n\nI just saw your project titled "${project.name}" and I really like it.\nI would love to connect and discuss how we might collaborate or bring ideas to life together.\n\nLooking forward to hearing from you!`;
  const contactHref = `/contact?subject=${encodeURIComponent(contactSubject)}&message=${encodeURIComponent(contactMessage)}`;
  const coverImage = project.galeries[0]?.url ?? "/images/fallback.png";
  const sectionMotionProps = (amount: number) =>
    isEager
      ? {
          initial: "hidden" as const,
          animate: "visible" as const,
        }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, amount },
        };

  return (
    <MotionDiv variants={staggerContainerVariants} initial="hidden" animate="visible">
      <MainContent>
        <MotionDiv variants={fadeUpVariants}>
          <Box pt={"xs"}>
            <MotionDiv whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.2 }}>
              <Button
                component="a"
                href="/projects"
                variant="light"
                color="blue"
                leftSection={<ChevronLeft size={16} />}
                radius="xl"
                size="sm"
                w={{ base: "fit-content", sm: "auto" }}
                px={{ base: "sm", sm: "md" }}
                styles={{
                  root: {
                    border: "1px solid var(--mantine-color-blue-4)",
                    backdropFilter: "blur(6px)",
                  },
                  label: {
                    fontWeight: 600,
                  },
                }}
              >
                Back to Projects
              </Button>
            </MotionDiv>
          </Box>
        </MotionDiv>

        <MotionDiv variants={fadeUpVariants}>
          <Flex direction="column" gap="md">
            <Flex justify="space-between" align="start" gap="lg" wrap="wrap">
              <Box>
                <Title order={2}>{project.name}</Title>
                <Group mt="sm" gap="md" c="gray.4">
                  {project.client && (
                    <Flex align="center" gap={6}>
                      <UserRound size={14} />
                      <Text size="sm">{project.client}</Text>
                    </Flex>
                  )}
                  {project.duration && (
                    <Flex align="center" gap={6}>
                      <Clock3 size={14} />
                      <Text size="sm">{project.duration}</Text>
                    </Flex>
                  )}
                  {project.categories[0] && (
                    <Flex align="center" gap={6}>
                      <Calendar size={14} />
                      <Badge variant="outline" color="blue" style={{ textTransform: "none" }}>
                        {project.categories[0].name}
                      </Badge>
                    </Flex>
                  )}
                </Group>
              </Box>

              <Flex
                gap="sm"
                direction={isVerySmallMobile ? "column" : "row"}
                wrap={isVerySmallMobile ? "nowrap" : "wrap"}
                align={isVerySmallMobile ? "stretch" : "center"}
                justify={{ base: "flex-start", sm: "flex-end" }}
                w={isVerySmallMobile ? "100%" : "auto"}
              >
                {project.liveDemo && (
                  <MotionDiv whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.2 }}>
                    <Button
                      component="a"
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      leftSection={<ExternalLink size={16} />}
                      w={isVerySmallMobile ? "100%" : "auto"}
                    >
                      Live Demo
                    </Button>
                  </MotionDiv>
                )}

                {project.sourceUrl && (
                  <MotionDiv whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.2 }}>
                    <Button
                      component="a"
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="outline"
                      leftSection={<Github size={16} />}
                      w={isVerySmallMobile ? "100%" : "auto"}
                    >
                      View Code
                    </Button>
                  </MotionDiv>
                )}
              </Flex>
            </Flex>

            <MotionDiv whileHover={{ scale: 1.01 }} transition={{ duration: 0.25, ease: "easeOut" }}>
              <Card bg="var(--app-surface-content)" withBorder p={0}>
                <Box pos="relative" h={{ base: 220, sm: 320, md: 420 }}>
                  <Image
                    src={coverImage}
                    alt={project.name}
                    fill
                    sizes="(max-width: 64em) 100vw, 1200px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </Box>
              </Card>
            </MotionDiv>
          </Flex>
        </MotionDiv>

        <Grid>
          <GridCol span={{ base: 12, lg: 8 }}>
            <MotionDiv variants={staggerContainerVariants} {...sectionMotionProps(0.2)}>
              <Flex direction="column" gap="xl">
                <MotionDiv variants={fadeUpVariants}>
                  <Box>
                    <Title order={3} mb="sm">
                      Project Overview
                    </Title>
                    <Text c="gray.4">{project.overview}</Text>
                  </Box>
                </MotionDiv>

                <MotionDiv variants={fadeUpVariants}>
                  <Box>
                    <Title order={3} mb="sm">
                      Key Features
                    </Title>
                    <MotionDiv variants={staggerContainerVariants} {...sectionMotionProps(0.2)}>
                      <Grid>
                        {project.keyFeatures.map((feature) => (
                          <GridCol key={feature} span={{ base: 12, sm: 6 }}>
                            <MotionDiv variants={gridItemVariants} whileHover={{ y: -4 }}>
                              <Card bg="var(--app-surface-content)" withBorder>
                                <Text>{feature}</Text>
                              </Card>
                            </MotionDiv>
                          </GridCol>
                        ))}
                      </Grid>
                    </MotionDiv>
                  </Box>
                </MotionDiv>

                <MotionDiv variants={fadeUpVariants}>
                  <Box>
                    <Title order={3} mb="sm">
                      Project Gallery
                    </Title>
                    {project.galeries.length > 0 ? (
                      <MotionDiv variants={staggerContainerVariants} {...sectionMotionProps(0.15)}>
                        <Grid>
                          {project.galeries.map((gallery) => (
                            <GridCol key={gallery.id} span={{ base: 12, sm: 6 }}>
                              <MotionDiv variants={gridItemVariants} whileHover={{ y: -4 }}>
                                <a href={gallery.url} target="_blank" rel="noreferrer">
                                  <Card bg="var(--app-surface-content)" withBorder p={0}>
                                    <Box pos="relative" h={{ base: 180, sm: 220 }}>
                                      <Image
                                        src={gallery.url}
                                        alt={project.name}
                                        fill
                                        sizes="(max-width: 48em) 100vw, 50vw"
                                        style={{ objectFit: "cover" }}
                                      />
                                    </Box>
                                  </Card>
                                </a>
                              </MotionDiv>
                            </GridCol>
                          ))}
                        </Grid>
                      </MotionDiv>
                    ) : (
                      <Card bg="var(--app-surface-content)" withBorder>
                        <Text c="gray.5">No gallery images available.</Text>
                      </Card>
                    )}
                  </Box>
                </MotionDiv>
              </Flex>
            </MotionDiv>
          </GridCol>

          <GridCol span={{ base: 12, lg: 4 }}>
            <MotionDiv variants={staggerContainerVariants} {...sectionMotionProps(0.2)}>
              <Flex direction="column" gap="md">
                <MotionDiv variants={fadeUpVariants}>
                  <Card bg="var(--app-surface-content)" withBorder>
                    <Title order={4} mb="sm">
                      Technologies Used
                    </Title>
                    <Flex wrap="wrap" gap="xs">
                      {project.technologies.map((technology) => (
                        <Badge key={technology.id} variant="outline" color="blue" style={{ textTransform: "none" }}>
                          {technology.name}
                        </Badge>
                      ))}
                    </Flex>
                  </Card>
                </MotionDiv>

                <MotionDiv variants={fadeUpVariants}>
                  <Card bg="var(--app-surface-content)" withBorder>
                    <Title order={4} mb="sm">
                      Project Details
                    </Title>
                    <Flex direction="column" gap="xs">
                      <Text c="gray.4" size="sm">
                        Status
                      </Text>
                      <Text fw={600}>{formatDisplayName(project.projectStatus)}</Text>
                      <Divider my="xs" color="var(--app-border-color)" />

                      {project.client && (
                        <>
                          <Text c="gray.4" size="sm">
                            Client
                          </Text>
                          <Text fw={600}>{project.client}</Text>
                          <Divider my="xs" color="var(--app-border-color)" />
                        </>
                      )}

                      {project.duration && (
                        <>
                          <Text c="gray.4" size="sm">
                            Duration
                          </Text>
                          <Text fw={600}>{project.duration}</Text>
                        </>
                      )}
                    </Flex>
                  </Card>
                </MotionDiv>

                <MotionDiv variants={fadeUpVariants}>
                  <Card bg="var(--app-surface-content)" withBorder>
                    <Title order={4} mb="sm">
                      Like this project?
                    </Title>
                    <Text c="gray.4" size="sm" mb="md">
                      Let&apos;s discuss how I can help bring your ideas to life.
                    </Text>
                    <MotionDiv whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.2 }}>
                      <Button component="a" href={contactHref} fullWidth>
                        Get In Touch
                      </Button>
                    </MotionDiv>
                  </Card>
                </MotionDiv>
              </Flex>
            </MotionDiv>
          </GridCol>
        </Grid>
      </MainContent>
    </MotionDiv>
  );
}
