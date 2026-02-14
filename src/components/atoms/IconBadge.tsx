import { Box, type BoxProps } from "@mantine/core";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import React from "react";

type IconName = keyof typeof LucideIcons;

export type IconBadgeProps = {
    icon: LucideIcons.LucideProps;
} & BoxProps;

const IconBadge: React.FC<IconBadgeProps> = ({ icon, ...boxProps }) => {
    const { style, ...restBoxProps } = boxProps;
    const LucideIcon = LucideIcons[icon.name as IconName] as LucideIcon;

    return (
        <Box
            {...restBoxProps}
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--app-border-color)",
                ...style,
            }}
        >
            <LucideIcon {...icon} />
        </Box>
    );
};

export default IconBadge;
