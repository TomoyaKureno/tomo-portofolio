"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { GetProjectsPaginationQuery } from "@/src/gql/graphql";
import { Search } from "lucide-react";
import { Button, Flex, Grid, type GridProps, GridCol, Input, ScrollArea, Text } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { motion } from "framer-motion";
import type { ComponentType } from "react";
import ProjectCard from "@/src/components/molecules/ProjectCard";
import MainContent from "@/src/components/organisms/MainContent";

type Props = {
  initialProjects: GetProjectsPaginationQuery["projects"];
  categories: { id: string; name: string; slug: string }[];
};

const PAGE_SIZE = 6;
const MotionDiv = motion.div;
const MotionGrid = motion.create(Grid as unknown as ComponentType<GridProps>);

export default function ProjectsClient({ initialProjects, categories }: Props) {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebouncedValue(search, 250);
  const [category, setCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const normalizedSearch = useMemo(() => debouncedSearch.trim().toLowerCase(), [debouncedSearch]);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const categoryMatch = category === "all" || project.categories.some((projectCategory) => projectCategory.slug === category);
      const searchMatch = normalizedSearch === "" || project.name.toLowerCase().includes(normalizedSearch);

      return categoryMatch && searchMatch;
    });
  }, [category, initialProjects, normalizedSearch]);

  useEffect(() => {
    if (!loadMoreRef.current || visibleCount >= filteredProjects.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredProjects.length));
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [filteredProjects.length, visibleCount]);

  const projects = filteredProjects.slice(0, visibleCount);

  return (
    <MainContent>
      <MotionDiv initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, ease: "easeOut" }}>
        <Flex direction="column" gap={"xs"}>
          <Input
            size="md"
            placeholder="Search Projects..."
            radius="md"
            leftSection={<Search size={18} />}
            styles={{
              input: {
                borderColor: "var(--app-border-color)",
              },
            }}
            value={search}
            onChange={(event) => {
              const value = event.currentTarget.value;
              setSearch(value);
              setVisibleCount(PAGE_SIZE);
            }}
          />

          <ScrollArea w="100%" type="never" scrollbars="x">
            <Flex w="max-content" gap="md" py={"sm"}>
              {[{ id: "all", name: "All", slug: "all" }, ...categories].map((cat) => (
                <Button
                  key={cat.id}
                  variant={cat.slug === category ? "primary" : "outline"}
                  onClick={() => {
                    setCategory(cat.slug);
                    setVisibleCount(PAGE_SIZE);
                  }}
                >
                  {cat.name}
                </Button>
              ))}
            </Flex>
          </ScrollArea>
        </Flex>

        <MotionGrid
          key={`${category}-${normalizedSearch}`}
          mt="xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          {projects.map((project) => (
            <GridCol key={project.id} span={{ xs: 12, sm: 6, lg: 4 }}>
              <MotionDiv
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <ProjectCard data={project} />
              </MotionDiv>
            </GridCol>
          ))}
        </MotionGrid>

        {filteredProjects.length === 0 && (
          <Flex h={"50dvh"} justify={"center"} align={"center"}>
            <Text c="gray.5" ta="center" mt="xl">
            No projects found.
          </Text>
          </Flex>
        )}
      </MotionDiv>

      <div ref={loadMoreRef}>
        {visibleCount < filteredProjects.length && (
          <Text c="gray.5" ta="center">
            Loading...
          </Text>
        )}
      </div>
    </MainContent>
  );
}
