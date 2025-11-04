"use client";

import { alpha, Box, Flex, Grid, ScrollArea, Text, useMantineTheme } from "@mantine/core";
import classes from "./ScrollAreaCustom.module.css";
import { useGetProfileQuery, useGetSkillsQuery } from "../types/generated";
import { hygraphFetcher } from "../lib/hygraphFetcher";
import MainContent from "../components/organisms/MainContent";
import BadgeCard from "../components/molecules/BadgeCard";

import * as LucideIcons from "lucide-react";
import TestimonialCard from "../components/molecules/TestimonialCard";

type IconName = keyof typeof LucideIcons;

export default function Home() {
	const theme = useMantineTheme();
	const {
		data: profile,
	} = useGetProfileQuery(hygraphFetcher, undefined, {
		select: (data) => data.profiles[0],
	});

	const { data: { skills } = { skills: [] } } = useGetSkillsQuery(hygraphFetcher);

	return (
		<MainContent title="About Me" mainContentProps={{ pt: 2 }} containerProps={{ mt: 8 }}>
			<Text fz={"h4"} fw={500}>
				{profile?.description}
			</Text>
			<Box>
				<Text fz={"h2"} fw={"bold"}>
					What I'm Doing
				</Text>
				<Grid grow mt={"lg"}>
					{
						skills.map(data => (
							<Grid.Col key={data.id} span={6}>
								<BadgeCard
									cardProps={{ h: "100%" }}
									iconBadge={{
										icon: { name: data.icon as IconName, size: 20 },
										p: "sm",
										bdrs: "md",
										w: "fit-content",
										bg: alpha(theme.colors.blue[9], 0.6),
										c: "blue.5",
										mt: 4
									}}
									title={{ text: data.name, fz: "h4", fw: 600, c: "white", mb: 4 }}
									description={{ text: data.description }}
									containerContentProps={{ align: "flex-start" }}
								/>
							</Grid.Col>
						))
					}
				</Grid>
			</Box>
			<Box>
				<Text fz={"h2"} fw={"bold"}>
					Testimonials
				</Text>
				<ScrollArea mt={"md"} pb={"xl"} scrollbars="x" type="auto" w="100%" scrollbarSize={8}
					classNames={{
						scrollbar: classes.scrollbarHorizontal,
						thumb: classes.scrollThumb,
					}}>
					<Flex
						w="max-content" // important: content can overflow horizontally
						gap="md"
					>
						{skills.map((data) => (
							<TestimonialCard
								key={data.name}
								cardProps={{ h: "100%", w: 480 }}
								iconBadge={{
									icon: { name: data.icon as IconName, size: 40 },
									p: "sm",
									bdrs: "md",
									w: "fit-content",
									bg: alpha(theme.colors.blue[9], 0.6),
									c: "blue.5",
								}}
								title={{
									text: data.name,
									fz: "h4",
									fw: 600,
									c: "white",
									mb: 4,
								}}
								description={{ text: data.description }}
								containerContentProps={{ align: "flex-start" }}
							/>
						))}
					</Flex>
				</ScrollArea>
			</Box>
		</MainContent>
	);
}
