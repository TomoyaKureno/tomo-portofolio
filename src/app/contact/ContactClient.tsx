"use client";

import MainContent from "@/src/components/organisms/MainContent";
import IconBadge from "@/src/components/atoms/IconBadge";
import { useAppContext } from "@/src/hooks/useAppContext";
import {
  Alert,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
  alpha,
  useMantineTheme,
} from "@mantine/core";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/src/lib/motion";
import { useRouter, useSearchParams } from "next/navigation";

type MailState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactClientProps = {
  initialSubject?: string;
  initialMessage?: string;
};

type SubmitState = {
  type: "success" | "error";
  message: string;
} | null;

const ContactClient: React.FC<ContactClientProps> = ({ initialSubject = "", initialMessage = "" }) => {
  const profile = useAppContext().profile;
  const theme = useMantineTheme();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [mail, setMail] = useState<MailState>({
    name: "",
    email: "",
    subject: initialSubject,
    message: initialMessage,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>(null);

  const handleSendMail = async () => {
    const payload = {
      ...mail,
      message: mail.name ? mail.message.replaceAll("{name}", mail.name) : mail.message,
    };

    setIsSubmitting(true);
    setSubmitState(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Failed to send message.");
      }

      setSubmitState({
        type: "success",
        message: result.message ?? "Message sent successfully.",
      });
      router.replace("/contact", { scroll: false });

    } catch (error) {
      setSubmitState({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const subjectFromQuery = searchParams.get("subject") ?? "";
    const messageFromQuery = searchParams.get("message") ?? "";

    if (!subjectFromQuery && !messageFromQuery) return;

    setMail((prev) => {
      if (prev.subject || prev.message || prev.name || prev.email) return prev;

      return {
        ...prev,
        subject: subjectFromQuery,
        message: messageFromQuery,
      };
    });
  }, [searchParams]);

  useEffect(() => {
    if (submitState?.type === "success") {
      setMail({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }

    if (!submitState) return;

    const timer = setTimeout(() => {
      setSubmitState(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [submitState]);

  return (
    <MainContent>
      <motion.div variants={staggerContainerVariants} initial="hidden" animate="visible">
        <Flex direction={{ base: "column", md: "row" }} gap="xl">
          <Box flex={1}>
            <motion.div variants={fadeUpVariants}>
              <Stack gap="lg">
                <Title order={3}>Get In Touch</Title>

                <Card bg="dark.5" withBorder>
                  <Stack gap="md">
                    <Group gap="sm" align="start">
                      <IconBadge
                        icon={{ name: "Mail", size: 14 }}
                        p="sm"
                        bdrs="md"
                        w="fit-content"
                        bg={alpha(theme.colors.blue[9], 0.6)}
                        c="blue.5"
                      />
                      <Box>
                        <Text c="gray.5" size="xs">
                          EMAIL
                        </Text>
                        <Text>{profile?.email}</Text>
                      </Box>
                    </Group>

                    <Group gap="sm" align="start">
                      <IconBadge
                        icon={{ name: "Phone", size: 14 }}
                        p="sm"
                        bdrs="md"
                        w="fit-content"
                        bg={alpha(theme.colors.blue[9], 0.6)}
                        c="blue.5"
                      />
                      <Box>
                        <Text c="gray.5" size="xs">
                          PHONE
                        </Text>
                        <Text>{profile?.phone}</Text>
                      </Box>
                    </Group>

                    <Group gap="sm" align="start">
                      <IconBadge
                        icon={{ name: "MapPin", size: 14 }}
                        p="sm"
                        bdrs="md"
                        w="fit-content"
                        bg={alpha(theme.colors.blue[9], 0.6)}
                        c="blue.5"
                      />
                      <Box>
                        <Text c="gray.5" size="xs">
                          ADDRESS
                        </Text>
                        <Text>{profile?.address}</Text>
                      </Box>
                    </Group>
                  </Stack>
                </Card>
              </Stack>
            </motion.div>
          </Box>

          <motion.div variants={fadeUpVariants} style={{ flex: 1 }}>
            <Card bg="dark.5" withBorder flex={1}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  void handleSendMail();
                }}
              >
                <Stack gap="md">
                  <Title order={4}>Send Message</Title>

                  <Group grow>
                    <TextInput
                      placeholder="Your Name"
                      value={mail.name}
                      onChange={(event) => {
                        const value = event.currentTarget.value;
                        setMail((prev) => ({ ...prev, name: value }));
                      }}
                    />
                    <TextInput
                      type="email"
                      placeholder="Your Email"
                      value={mail.email}
                      onChange={(event) => {
                        const value = event.currentTarget.value;
                        setMail((prev) => ({ ...prev, email: value }));
                      }}
                    />
                  </Group>

                  <TextInput
                    placeholder="Subject"
                    value={mail.subject}
                    onChange={(event) => {
                      const value = event.currentTarget.value;
                      setMail((prev) => ({ ...prev, subject: value }));
                    }}
                  />

                  <Textarea
                    rows={7}
                    placeholder="Your Message"
                    value={mail.message}
                    onChange={(event) => {
                      const value = event.currentTarget.value;
                      setMail((prev) => ({ ...prev, message: value }));
                    }}
                  />

                  {submitState && (
                    <Alert color={submitState.type === "success" ? "green" : "red"} variant="light">
                      {submitState.message}
                    </Alert>
                  )}

                  <Button type="submit" leftSection={<Send size={16} />} loading={isSubmitting}>
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Card>
          </motion.div>
        </Flex>
      </motion.div>
    </MainContent>
  );
};

export default ContactClient;
