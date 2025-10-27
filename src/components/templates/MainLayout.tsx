"use client";

import { AppShell, Box, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import Navbar from "../organisms/Navbar";
import Header from "../organisms/Header";

type TMainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<TMainLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      className="h-dvh overflow-hidden"
    >
      {/* Sidebar */}
      <Navbar />

      {/* MAIN */}
      <AppShell.Main py="xl" pe="md" className="h-full overflow-hidden">
        {/* 📦 Container statis */}
        <Box
          bd="1px solid gray.5"
          bdrs="md"
          className="flex h-full flex-col overflow-hidden"
        >
          {/* Sticky Header di dalam container */}
          <Header/>

          {/* Scrollable content */}
          <ScrollArea
            type="auto"
            className="flex-1 min-h-0"
          >
            <Box p="md">
              {children}
              {/* <Box h={2000} bg="gray.1" /> */}
            </Box>
          </ScrollArea>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
};

export default MainLayout;
