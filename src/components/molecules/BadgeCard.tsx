import { Box, Card, CardProps, Flex, Group, GroupProps, Text, TextProps } from '@mantine/core'
import IconBadge, { IconBadgeProps } from '../atoms/IconBadge'

type BadgeCardProps = {
    cardProps?: CardProps;
    iconBadge: IconBadgeProps;
    title: {
        text: string;
    } & TextProps;
    description?: {
        text: string;
    } & TextProps;
    containerContentProps?: GroupProps;
}

const BadgeCard: React.FC<BadgeCardProps> = ({cardProps, iconBadge, title, description, containerContentProps }) => {
    return (
        <Card shadow={"sm"} radius={"md"} p={"md"} bg={"dark.5"} withBorder {...cardProps}>
            <Group wrap={"nowrap"} {...containerContentProps}>
                <IconBadge {...iconBadge} />
                <Box>
                    <Text fz={12} fw={500} c={"gray.6"} {...title}>{title.text}</Text>
                    {description && <Text fz={14} fw={500} c={"gray.5"} {...description}>{description.text}</Text>}
                </Box>
            </Group>
        </Card>
    )
}

export default BadgeCard