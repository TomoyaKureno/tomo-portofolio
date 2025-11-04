"use client";

import { hygraphFetcher } from "@/src/lib/hygraphFetcher";
import { useGetProfileQuery } from "@/src/types/generated";
import { formatDate } from "@/src/utils";
import { alpha, Badge, Box, Card, Flex, ScrollArea, Text, useMantineTheme } from "@mantine/core";
import Image from "next/image";

import * as LucideIcons from "lucide-react";
import BadgeCard from "../molecules/BadgeCard";
import IconBadge from "../atoms/IconBadge";

type IconName = keyof typeof LucideIcons;

const Navbar = () => {
    const theme = useMantineTheme();
    const {
        data: profile,
    } = useGetProfileQuery(hygraphFetcher, undefined, {
        select: (data) => data.profiles[0],
    });

    return (
        <Box visibleFrom={"md"} pos={"fixed"} w={322} h={"100%"} py={"xl"}>
            <Card shadow={"sm"} radius={"md"} p={0} bg={"dark.6"} h={"100%"} withBorder>
                <Flex
                    h={"100%"}
                    py={"xl"}
                    px={"lg"}
                    c={"gray.1"}
                    direction={"column"}
                    gap={"lg"}
                >
                    <Box p={"xs"} bg='white' mx={"auto"} w={138} h={138} bd={"1px solid dark.4"} bdrs={"xl"}>
                        <Image src={"/images/apple-emoji.png"} alt={"avatar"} width={116} height={116} className={"ms-1"} loading={"eager"} />
                    </Box>
                    <Flex direction={"column"} gap={"sm"} align={"center"}>
                        <Text fz={"h3"} fw={700}>Fathariq Dimas | Tomo</Text>
                        <Badge color={"dark.5"} radius={"sm"} px={"md"} py={"sm"} c={"gray.5"}>Frontend Developer</Badge>
                    </Flex>
                    <Box bg={"dark.3"} w={"100%"} h={"4"} bdrs={"md"} mx={"auto"} my={"8"}></Box>
                    <ScrollArea h={"100%"} type={"never"}>
                        <Flex direction={"column"} gap={"md"}>
                            {
                                [
                                    {
                                        title: "EMAIL",
                                        icon: "Mail",
                                        value: profile?.email,
                                    },
                                    {
                                        title: "PHONE",
                                        icon: "Phone",
                                        value: profile?.phone
                                    },
                                    {
                                        title: "BIRTHDAY",
                                        icon: "Calendar",
                                        value: profile?.dateOfBirth && formatDate(profile.dateOfBirth)
                                    },
                                    {
                                        title: "ADDRESS",
                                        icon: "MapPin",
                                        value: profile?.address
                                    },
                                ].map((data) => {
                                    const copyableKeys = ["EMAIL", "PHONE"];

                                    return (
                                        <BadgeCard
                                            key={data.title}
                                            iconBadge={{
                                                icon: { name: data.icon as IconName, size: 20 },
                                                p: "sm",
                                                bdrs: "md",
                                                w: "fit-content",
                                                bg: alpha(theme.colors.blue[9], 0.6),
                                                c: "blue.5"
                                            }}
                                            title={{ text: data.title }}
                                            description={{ text: data.value }}
                                        />
                                    )
                                })
                            }

                            <Flex gap={"md"} align={"center"} bdrs={"md"} justify={"center"}>
                                {
                                    profile?.socialMedia.map(data => (
                                        <IconBadge key={data.title} icon={{ name: data.title as IconName, size: 20 }}
                                            c={"gray.5"}
                                            p={"sm"}
                                            bg={"dark.4"}
                                            bdrs={"md"}
                                            w={"fit-content"} />
                                    ))
                                }

                            </Flex>
                        </Flex>
                    </ScrollArea>
                </Flex>
            </Card>
        </Box>
    );
};

export default Navbar;
