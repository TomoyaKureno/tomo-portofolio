import { Flex, FlexProps } from '@mantine/core'
import React from 'react'

type MainContentProps = {
    children: React.ReactNode;
} & FlexProps

const MainContent: React.FC<MainContentProps> = ({ children, ...flexProps }) => {
    return (
        <Flex h={"100%"} w={"100%"} direction={"column"} gap={"xl"} {...flexProps}>
            {children}
        </Flex>
    )
}

export default MainContent