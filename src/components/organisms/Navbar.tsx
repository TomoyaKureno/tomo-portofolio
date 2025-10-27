import { AppShell, Box } from '@mantine/core'
import React from 'react'

const Navbar = () => {
    return (
        <AppShell.Navbar withBorder={false} py="xl" px="md">
            <Box h="100%" bd="1px solid gray.5" bdrs="md">

            </Box>
        </AppShell.Navbar>
    )
}

export default Navbar