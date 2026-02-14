"use client";

import MainContent from "@/src/components/organisms/MainContent";
import CertificateCard, { CertificateItem } from "@/src/components/molecules/CertificateCard";
import { formatDate } from "@/src/utils";
import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridCol,
  Modal,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import { Download, ExternalLink } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/src/lib/motion";

type CertificateCategory = {
  id: string;
  name: string;
  slug: string;
};

type CertificatesClientProps = {
  certificates: CertificateItem[];
  categories: CertificateCategory[];
};

const PAGE_SIZE = 6;
const MotionDiv = motion.div;
const MotionGrid = motion.create(Grid);

const CertificatesClient: React.FC<CertificatesClientProps> = ({ certificates, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const filteredCertificates = useMemo(() => {
    if (selectedCategory === "all") return certificates;

    return certificates.filter((certificate) =>
      certificate.categories.some((category) => category.slug === selectedCategory),
    );
  }, [certificates, selectedCategory]);

  useEffect(() => {
    if (!loadMoreRef.current || visibleCount >= filteredCertificates.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredCertificates.length));
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [filteredCertificates.length, visibleCount]);

  const visibleCertificates = filteredCertificates.slice(0, visibleCount);

  return (
    <MainContent>
      <MotionDiv variants={staggerContainerVariants} initial="hidden" animate="visible">
        <MotionDiv variants={fadeUpVariants}>
          <ScrollArea w="100%" type="never" scrollbars="x">
            <Flex gap="md" w="max-content" pb={"xs"}>
              <Button
                variant={selectedCategory === "all" ? "primary" : "outline"}
                onClick={() => {
                  setSelectedCategory("all");
                  setVisibleCount(PAGE_SIZE);
                }}
              >
                All
              </Button>

              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.slug ? "primary" : "outline"}
                  onClick={() => {
                    setSelectedCategory(category.slug);
                    setVisibleCount(PAGE_SIZE);
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </Flex>
          </ScrollArea>
        </MotionDiv>

        {visibleCertificates.length > 0 ? (
          <MotionGrid mt={"md"} variants={staggerContainerVariants} initial="hidden" animate="visible">
            {visibleCertificates.map((certificate) => (
              <GridCol key={certificate.id} span={{ xs: 12, sm: 6, lg: 4 }}>
                <CertificateCard data={certificate} onClick={() => setSelectedCertificate(certificate)} />
              </GridCol>
            ))}
          </MotionGrid>
        ) : (
          <Card bg="dark.5" withBorder>
            <Text c="gray.5">No certificates found.</Text>
          </Card>
        )}

        <div ref={loadMoreRef}>
          {visibleCount < filteredCertificates.length && (
            <Text c="gray.5" ta="center">
              Loading more...
            </Text>
          )}
        </div>

        <Modal
          opened={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          title={selectedCertificate?.name}
          size="xl"
          centered
        >
          {selectedCertificate && (
            <Flex direction="column" gap="lg">
              <Card bg="dark.5" withBorder p="md">
                <Flex justify="space-between" align="start" gap="md">
                  <Box>
                    <Title order={4}>{selectedCertificate.issuer}</Title>
                    <Text c="gray.4" size="sm">
                      Issued: {formatDate(String(selectedCertificate.issued), { month: "long", year: "numeric" })}
                    </Text>
                  </Box>

                  <Flex gap="xs" wrap="wrap" justify="flex-end">
                    {selectedCertificate.categories.map((category) => (
                      <Badge key={category.id} variant="outline" color="blue.5" style={{ textTransform: "none" }}>
                        {category.name}
                      </Badge>
                    ))}
                  </Flex>
                </Flex>
              </Card>

              <Box pos="relative" h={320}>
                <Image
                  src={selectedCertificate.issuerImage.url}
                  alt={selectedCertificate.name}
                  fill
                  sizes="(max-width: 48em) 100vw, 900px"
                  style={{ objectFit: "cover", borderRadius: "var(--mantine-radius-md)" }}
                />
              </Box>

              <Card bg="dark.5" withBorder p="md">
                <Flex direction="column" gap="sm">
                  <Text fw={600}>Description</Text>
                  <Text c="gray.4">{selectedCertificate.description}</Text>

                  <Text fw={600} mt="sm">
                    Credential ID
                  </Text>
                  <Text c="gray.4">{selectedCertificate.certificateCode}</Text>
                </Flex>
              </Card>

              <Flex gap="md" wrap="wrap" justify="center">
                {selectedCertificate.sourceUrl && (
                  <Anchor href={selectedCertificate.sourceUrl} target="_blank" rel="noreferrer" underline="never">
                    <Button leftSection={<ExternalLink size={16} />}>Verify Online</Button>
                  </Anchor>
                )}

                <Anchor href={selectedCertificate.file.url} target="_blank" rel="noreferrer" underline="never">
                  <Button variant="outline" leftSection={<Download size={16} />}>
                    Download PDF
                  </Button>
                </Anchor>
              </Flex>
            </Flex>
          )}
        </Modal>
      </MotionDiv>
    </MainContent>
  );
};

export default CertificatesClient;
