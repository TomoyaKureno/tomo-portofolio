"use client";

import { Box, Card, Flex, ScrollArea } from "@mantine/core";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ProfileSidebar from "../organisms/ProfileSidebar";
import Header from "../organisms/Header";
import MobileTabBar from "../organisms/MobileTabBar";
import PageTransitionWrapper from "@/src/components/templates/PageTransitionWrapper";
import MainContentWrapper from "./MainContentWrapper";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MOBILE_TABBAR_OFFSET = "calc(5.1rem + env(safe-area-inset-bottom, 0px))";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const viewportRef = useRef<HTMLDivElement>(null);
  const isStandaloneProjectDetail = /^\/projects\/[^/]+$/.test(pathname);

  useEffect(() => {
    if (isStandaloneProjectDetail) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    viewportRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [isStandaloneProjectDetail, pathname]);

  if (isStandaloneProjectDetail) {
    return (
      <Box bg="dark.7" mih="100dvh" px="md" py="xl">
        <PageTransitionWrapper>
          <Box maw={1280} mx="auto">
            {children}
          </Box>
        </PageTransitionWrapper>
      </Box>
    );
  }

  return (
    <Flex
      maw={1536}
      gap="md"
      h={{ base: "auto", md: "100dvh" }}
      mih="100dvh"
      mx={{ xl: "auto" }}
      bg="dark.7"
      px={{ base: "sm", md: "md" }}
      style={{ overflow: "hidden" }}
    >
      <ProfileSidebar />

      <Box
        flex={1}
        ms={{ base: 0, md: 338 }}
        h={{ base: `calc(100dvh - ${MOBILE_TABBAR_OFFSET})`, md: "100%" }}
        py={{ base: "sm", md: "xl" }}
        miw={0}
      >
        <Card shadow="sm" radius="md" p={0} bg="dark.6" flex={1} h="100%" withBorder>
          <Flex h="100%" direction="column" pos="relative" style={{ overflow: "hidden" }}>
            <Header />

            <ScrollArea type="never" flex={1} mih={0} viewportRef={viewportRef}>
              <PageTransitionWrapper>
                <MainContentWrapper>{children}</MainContentWrapper>
              </PageTransitionWrapper>
            </ScrollArea>
          </Flex>
        </Card>
      </Box>

      <MobileTabBar />
    </Flex>
  );
};

export default MainLayout;
