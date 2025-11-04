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
					breakpoints: {
						xs: "36em",
						sm: "48em",
						md: "64em",
						lg: "80em",
						xl: "96em",
					},
				}}
			>
				{children}
			</MantineProvider>
		</QueryClientProvider>
	);
}
