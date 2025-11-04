import { Box, Card, Flex, ScrollArea } from "@mantine/core";
import React from "react";
import Navbar from "../organisms/Navbar";
import Header from "../organisms/Header";

type TMainLayoutProps = {
	children: React.ReactNode;
};

const MainLayout: React.FC<TMainLayoutProps> = ({ children }) => {
	return (
		<Flex maw={1536} gap={"md"} h={"100dvh"} mx={{ xl: "auto" }} bg={"dark.7"} px={"md"} style={{
			overflow: "hidden"
		}}>
			<Navbar />

			<Box
				flex={1}
				ms={{ base: 0, md: 338 }}
				h={"100%"}
				py={"xl"}
				miw={0}
			>
				<Card shadow={"sm"} radius={"md"} p={0} bg={"dark.6"} flex={1} h={"100%"} withBorder>
					<Flex
						h={"100%"}
						direction={"column"}
						pos={"relative"}
						style={{ overflow: "hidden" }}
					>
						<Header />

						<ScrollArea
							type={"never"}
							flex={1}
							mih={0}
							py={"md"}
						>
							{children}
						</ScrollArea>
					</Flex>
				</Card>
			</Box>
		</Flex>
	);
};

export default MainLayout;
