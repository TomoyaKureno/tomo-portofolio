import { Badge, Box, Card, Flex, Text } from "@mantine/core";
import { Layers } from "lucide-react";
import { GetProjectsPaginationQuery } from "@/src/gql/graphql";
import { motion } from "framer-motion";
import { interactiveCardTransition } from "@/src/lib/motion";
import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  data: GetProjectsPaginationQuery["projects"][number];
};

const MotionDiv = motion.div;

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const techLen = data.technologies.length;
  const category = data.categories[0]?.name ?? "Uncategorized";
  const cardContent = (
    <MotionDiv whileHover={{ y: -6, scale: 1.01 }} whileTap={{ scale: 0.996 }} transition={interactiveCardTransition}>
      <Card
        bg="dark.5"
        shadow="sm"
        padding={0}
        radius="md"
        withBorder
        className="group overflow-hidden"
        style={{
          cursor: data.slug ? "pointer" : "default",
          background:
            "linear-gradient(160deg, rgba(33,38,56,0.94) 0%, rgba(24,29,42,0.96) 72%, rgba(19,24,35,0.98) 100%)",
        }}
      >
        <Card.Section>
          <Box pos="relative" h={198} w="100%" style={{ overflow: "hidden" }}>
            <Box
              pos="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              className="transition-transform duration-500 group-hover:scale-105"
              style={{ transformOrigin: "center center", willChange: "transform" }}
            >
              <Image
                src={data.galeries?.[0]?.url ?? "/images/fallback.png"}
                fill
                sizes="(max-width: 48em) 100vw, (max-width: 64em) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                alt={data.name}
              />
              <Box
                pos="absolute"
                top={-2}
                left={-2}
                right={-2}
                bottom={-2}
                className="pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6,10,16,0.4) 0%, rgba(6,10,16,0.55) 48%, rgba(6,10,16,0.9) 100%)",
                }}
              />
            </Box>

            <Badge
              leftSection={<Layers size={12} />}
              variant="light"
              color="blue"
              pos="absolute"
              left={12}
              bottom={12}
              style={{ textTransform: "none", backdropFilter: "blur(8px)" }}
            >
              {category}
            </Badge>
          </Box>
        </Card.Section>

        <Flex direction="column" gap="sm" p="md">
          <Text size="xl" fw={700} lineClamp={2} lh={1.2}>
            {data.name}
          </Text>

          <Text ta="justify" size="sm" fw={500} c="dimmed" lineClamp={3} lh={1.35}>
            {data.overview}
          </Text>

          <Flex gap={8} mt={2} wrap="wrap">
            {data.technologies.slice(0, 3).map((technology) => (
              <Badge
                key={technology.id}
                variant="light"
                color="blue"
                style={{
                  textTransform: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {technology.name}
              </Badge>
            ))}
            {techLen > 3 && (
              <Badge
                variant="outline"
                color="blue"
                style={{
                  textTransform: "none",
                  whiteSpace: "nowrap",
                }}
              >
                +{techLen - 3}
              </Badge>
            )}
          </Flex>
        </Flex>
      </Card>
    </MotionDiv>
  );

  if (!data.slug) return cardContent;

  return (
    <Link href={`/projects/${data.slug}`} aria-label={`Open details for ${data.name}`} className="block">
      {cardContent}
    </Link>
  );
};

export default ProjectCard;
