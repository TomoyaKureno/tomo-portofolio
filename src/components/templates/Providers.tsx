"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button, MantineProvider, type MantineColorsTuple } from "@mantine/core";
import { useState } from "react";

const appleBlue: MantineColorsTuple = [
  "#e6f2ff",
  "#cce4ff",
  "#99c9ff",
  "#66adff",
  "#3392ff",
  "#0a84ff",
  "#0071e3",
  "#005bb5",
  "#00458a",
  "#002f5f",
];

const appleGray: MantineColorsTuple = [
  "#f5f5f7",
  "#e8e8ed",
  "#d2d2d7",
  "#a1a1aa",
  "#8e8e93",
  "#86868b",
  "#6e6e73",
  "#515154",
  "#3a3a3c",
  "#2c2c2e",
];

const appleDark: MantineColorsTuple = [
  "#c9ccd3",
  "#a7acb7",
  "#8b92a0",
  "#363a45",
  "#2b2f38",
  "#22262f",
  "#1a1d24",
  "#121419",
  "#0d0f13",
  "#08090c",
];

export function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider
				defaultColorScheme="dark"
				theme={{
					primaryColor: "blue",
					primaryShade: { dark: 5, light: 6 },
					white: "#ffffff",
					black: "#08090c",
					fontFamily:
						"-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Segoe UI', sans-serif",
					headings: {
						fontFamily:
							"-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', sans-serif",
					},
					colors: {
						blue: appleBlue,
						gray: appleGray,
						dark: appleDark,
					},
					defaultRadius: "md",
					radius: {
						xs: "10px",
						sm: "10px",
						md: "10px",
						lg: "10px",
						xl: "10px",
					},
					shadows: {
						sm: "var(--app-shadow-sm)",
					},
					breakpoints: {
						xs: "36em",
						sm: "48em",
						md: "64em",
						lg: "80em",
						xl: "96em",
					},
					components: {
						Card: { defaultProps: { radius: "md" } },
						Button: Button.extend({
							defaultProps: { radius: "md" },
							styles: (_, props) => ({
								root:
									props.variant === "primary"
										? {
												backgroundColor: "var(--mantine-color-blue-5)",
												color: "#ffffff",
												borderColor: "transparent",
												"&:hover": {
													backgroundColor: "var(--mantine-color-blue-6)",
												},
											}
										: props.variant === "outline"
											? {
													borderColor: "var(--app-border-color)",
													color: "var(--mantine-color-gray-1)",
													"&:hover": {
														backgroundColor: "var(--app-outline-hover)",
													},
												}
											: {},
							}),
						}),
						Input: { defaultProps: { radius: "md" } },
						TextInput: { defaultProps: { radius: "md" } },
						Textarea: { defaultProps: { radius: "md" } },
						ActionIcon: { defaultProps: { radius: "md" } },
						Badge: { defaultProps: { radius: "md" } },
						Modal: { defaultProps: { radius: "md", zIndex: 400 } },
					},
				}}
			>
				{children}
			</MantineProvider>
		</QueryClientProvider>
	);
}
