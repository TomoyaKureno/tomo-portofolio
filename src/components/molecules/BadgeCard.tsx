import { Box, Card, CardProps, Group, GroupProps, Text, TextProps } from "@mantine/core";
import { motion } from "framer-motion";
import IconBadge, { IconBadgeProps } from "../atoms/IconBadge";
import { interactiveCardTransition } from "@/src/lib/motion";

type BadgeCardProps = {
  cardProps?: CardProps;
  iconBadge: IconBadgeProps;
  title: {
    text: React.ReactNode;
  } & TextProps;
  description?: {
    text?: React.ReactNode;
  } & TextProps;
  containerContentProps?: GroupProps;
};

const MotionDiv = motion.div;

const BadgeCard: React.FC<BadgeCardProps> = ({
  cardProps,
  iconBadge,
  title,
  description,
  containerContentProps,
}) => {
  const { text: titleText, ...titleProps } = title;
  const descriptionText = description?.text;
  const descriptionProps = description ? { ...description } : undefined;
  if (descriptionProps) {
    delete (descriptionProps as { text?: React.ReactNode }).text;
  }

  return (
    <MotionDiv
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={interactiveCardTransition}
      style={{ height: "100%" }}
    >
      <Card shadow="sm" radius="md" p="md" bg="dark.5" withBorder {...cardProps}>
        <Group wrap="nowrap" {...containerContentProps}>
          <IconBadge {...iconBadge} />
          <Box>
            <Text fz={12} fw={500} c="gray.6" {...titleProps}>
              {titleText}
            </Text>
            {description && (
              <Text fz={14} fw={500} c="gray.5" {...descriptionProps}>
                {descriptionText}
              </Text>
            )}
          </Box>
        </Group>
      </Card>
    </MotionDiv>
  );
};

export default BadgeCard;
