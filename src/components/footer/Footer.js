import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    const SocialBox = styled(Box)({
        display:'flex',
        gap:10,
        color:'white'
    })
  return (
    <Box sx={{background:'black',height:'300px'}}>
        <Stack direction={{xs:'row',md:'row'}} p={7}>
            <Box flex={1}>
                <Typography color={'white'} align={'center'}>
                    Contact Us
                </Typography>
                <Typography color={'white'} align={'center'}>
                    SriNagar Colony, BanjaraHills,
                </Typography>
                <Typography color={'white'} align={'center'}>
                    Hyderabad-500018
                </Typography>
                <Typography color={'white'} align={'center'}>
                    Telangana, India
                </Typography>
            </Box>

            <Box flex={1}>
            <Typography color={'white'} align={'center'}>
                    Data Policy
            </Typography>
            <Typography color={'white'} align={'center'}>
                    Cookies
            </Typography>
            <Typography color={'white'} align={'center'}>
                    Data Safety
            </Typography>
            </Box>

            <Box flex={1}>
            <Typography color={'white'}  align={'center'}>
                    Categories
            </Typography>
            <Typography color={'white'} variant={'body2'} align={'center'}>
                    Kids
            </Typography>
            <Typography color={'white'} variant={'body2'} align={'center'}>
                    Mens
            </Typography>
            <Typography color={'white'} variant={'body2'} align={'center'}>
                    Womens
            </Typography>
            </Box>

            <Box>
            <Typography color={'white'} variant={'body2'} align={'center'}>
                 Follow Us
            </Typography>
            <SocialBox>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            </SocialBox>
            </Box>
        </Stack>
    </Box>
  )
}

export default Footer