import { GetCertificatesQuery } from "@/src/gql/graphql";
import useStableColorScheme from "@/src/hooks/useStableColorScheme";
import { formatDate } from "@/src/utils";
import { Badge, Box, Card, Flex, Text } from "@mantine/core";
import { Award, Calendar, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { interactiveCardTransition } from "@/src/lib/motion";

export type CertificateItem = GetCertificatesQuery["certificates"][number];

type CertificateCardProps = {
  data: CertificateItem;
  onClick: () => void;
};

const MotionDiv = motion.div;

const CertificateCard: React.FC<CertificateCardProps> = ({ data, onClick }) => {
  const { isDark } = useStableColorScheme("dark");
  const issuedAt = formatDate(String(data.issued), { month: "short", year: "numeric" });
  const imageOverlay = isDark
    ? "linear-gradient(180deg, rgba(8, 9, 12, 0.28) 0%, rgba(8, 9, 12, 0.52) 52%, rgba(8, 9, 12, 0.88) 100%)"
    : "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.24) 48%, rgba(17, 17, 17, 0.58) 100%)";

  return (
    <MotionDiv whileHover={{ y: -8, scale: 1.012 }} whileTap={{ scale: 0.995 }} transition={interactiveCardTransition}>
      <Card
        bg="var(--app-surface-content)"
        shadow="sm"
        padding={0}
        radius="md"
        withBorder
        style={{
          cursor: "pointer",
          overflow: "hidden",
          background:
            "linear-gradient(165deg, var(--app-surface-content-soft) 0%, var(--app-surface-content) 70%, var(--app-surface-content-strong) 100%)",
        }}
        className="group"
        onClick={onClick}
      >
        <Card.Section>
          <Box pos="relative" h={190} style={{ overflow: "hidden" }}>
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
                src={data.issuerImage.url}
                alt={data.name}
                fill
                sizes="(max-width: 48em) 100vw, (max-width: 64em) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <Box
                pos="absolute"
                top={-2}
                left={-2}
                right={-2}
                bottom={-2}
                className="pointer-events-none"
                style={{
                  background: imageOverlay,
                }}
              />
            </Box>

            <Badge pos={"absolute"} top={12} left={12} leftSection={<Award size={12} />} variant="light" color="blue" style={{ textTransform: "none", backdropFilter: "blur(6px)" }}>
              Certificate
            </Badge>
          </Box>
        </Card.Section>

        <Flex direction="column" gap={9} p="md">
          <Text fw={700} size="lg" lineClamp={2} c="gray.0" lh={1.2}>
            {data.name}
          </Text>
          <Text fw={600} size="sm" c="blue.3" lineClamp={1}>
            {data.issuer}
          </Text>

          <Flex c="gray.5" gap="md" fz="xs" wrap="wrap">
            <Flex align="center" gap={6}>
              <Calendar size={14} />
              <Text size="xs">{issuedAt}</Text>
            </Flex>
            <Flex align="center" gap={6}>
              <ShieldCheck size={14} />
              <Text size="xs" lineClamp={1}>
                {data.certificateCode}
              </Text>
            </Flex>
          </Flex>

          <Text size="sm" c="gray.5" lineClamp={3}>
            {data.description}
          </Text>

          <Flex gap={8} wrap="wrap" mt={2}>
            {data.categories.slice(0, 2).map((category) => (
              <Badge key={category.id} variant="light" color="blue" style={{ textTransform: "none" }}>
                {category.name}
              </Badge>
            ))}
            {data.categories.length > 2 && (
              <Badge variant="outline" color="blue" style={{ textTransform: "none" }}>
                +{data.categories.length - 2}
              </Badge>
            )}
          </Flex>
        </Flex>
      </Card>
    </MotionDiv>
  );
};

export default CertificateCard;
