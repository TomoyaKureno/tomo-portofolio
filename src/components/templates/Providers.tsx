"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider
				defaultColorScheme="dark"
				theme={{
					defaultRadius: "md",
					radius: {
						xs: "10px",
						sm: "10px",
						md: "10px",
						lg: "10px",
						xl: "10px",
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
						Button: { defaultProps: { radius: "md" } },
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
