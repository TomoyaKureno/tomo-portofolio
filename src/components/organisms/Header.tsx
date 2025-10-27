import { Box } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <Box
            className='sticky top-0 z-10 flex justify-end'
        >
            <Box bg="blue.5" className='flex gap-4 rounded-bl-md p-4'>
                <Link href={""}>Test</Link>
            </Box>
        </Box>
    )
}

export default Header