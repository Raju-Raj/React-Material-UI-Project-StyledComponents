import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Categories from '../category/Categories'
import Hero from '../hero/Hero'
import Recent from '../recents/Recent'
import RightBar from '../rightbar/RightBar'

const Home = () => {
  return (
    <Box>
        <Hero/>
        <Container>
            <Categories/>
            <hr/>
        <Stack direction={'row'} spacing={8} mt={8}>
            <Box flex={3} sx={{padding:'18px 100px 100px 100px'}}>
                <Recent/>
            </Box>
            <Box flex={1}>
                <RightBar/>
            </Box>
        </Stack>
        </Container>
    </Box>
  )
}

export default Home