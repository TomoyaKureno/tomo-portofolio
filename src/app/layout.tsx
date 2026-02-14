import "@mantine/core/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import MainLayout from "../components/templates/MainLayout";
import { Providers } from "../components/templates/Providers";
import { getProfile } from "../lib/hygraph.server";
import AppContextProvider from "../context/AppContextProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tomo | Portofolio",
	description: "Tomo's Portofolio Web",
};

export const revalidate = 3600;

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const profile = await getProfile();

	return (
		<html lang="en" {...mantineHtmlProps} suppressHydrationWarning>
			<head>
				<ColorSchemeScript defaultColorScheme="dark" />
			</head>
			<body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>
					<AppContextProvider profile={profile}>
						<MainLayout>{children}</MainLayout>
					</AppContextProvider>
				</Providers>
			</body>
		</html>
	);
}
