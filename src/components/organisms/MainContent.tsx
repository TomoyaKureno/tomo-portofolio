import { Flex, FlexProps, Text, TextProps, Box } from '@mantine/core'
import React from 'react'

type MainContentProps = {
    title?: string;
    titleProps?: TextProps;
    mainContentProps?: FlexProps;
    containerProps?: FlexProps;
    children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ title, titleProps, mainContentProps, containerProps, children }) => {
    return (
        <Flex direction={"column"} gap={"md"} c={"gray.0"} pt={73} px={"xl"} {...mainContentProps}>
            {title && <Flex direction={"column"} gap={"sm"}>
                <Text fz={"h1"} fw={"bold"} {...titleProps} w={"fit-content"}>{title}</Text>
                <Box bg={"blue.5"} w={"3rem"} h={"0.5rem"} bdrs={"md"}></Box>
            </Flex>}

            <Flex direction={"column"} flex={1} {...containerProps} gap={"xl"}>
                {children}
            </Flex>
        </Flex>
    )
}

export default MainContent