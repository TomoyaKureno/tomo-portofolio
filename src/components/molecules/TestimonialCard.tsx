import { Box, Card, CardProps, Text, TextProps } from "@mantine/core";
import IconBadge, { IconBadgeProps } from "../atoms/IconBadge";

type TestimonialCardProps = {
  cardProps?: CardProps;
  iconBadge: IconBadgeProps;
  title: {
    text: string;
  } & TextProps;
  description?: {
    text: string;
  } & TextProps;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ cardProps, iconBadge, title, description }) => {
  return (
    <Box pos="relative" pt="22px" h={"100%"}>
      <IconBadge left="16px" top="0px" pos="absolute" {...iconBadge} style={{ zIndex: 10 }} />
      <Card shadow="sm" radius="md" p="md" bg="dark.5" withBorder {...cardProps}>
        <Text ms="80px" fz={12} fw={500} c="gray.6" {...title}>
          {title.text}
        </Text>
        {description && (
          <Text fz={14} fw={500} c="gray.5" {...description}>
            {description.text}
          </Text>
        )}
      </Card>
    </Box>
  );
};

export default TestimonialCard;
