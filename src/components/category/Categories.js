import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react';


const StyledBox = styled(Box)({
    height:200,
    width:'100%',
    cursor:'pointer',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center',
    backgroundSize:'cover',
})
const StyledTypography = styled(Typography)({
    margin:'25% 50px 25% 50px',
    background:'white',
    opacity:'0.8'
})
const Categories = () => {
  return (
    <Box>
        <Stack direction={{xs:'column',sm:'row'}} spacing={{xs:1,sm:2,md:4}} mt={5}>
            <StyledBox sx={{backgroundImage:'url("https://media1.popsugar-assets.com/files/thumbor/XPa5D4YmRCbBytUt_Z0w1afYHkk/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2013/03/12/4/192/1922664/e102cb7bcd823acb_shutterstock_86249287.jpg")'}}>
                <StyledTypography align='center' variant='h3'>Kids</StyledTypography>
            </StyledBox>
            <StyledBox sx={{backgroundImage:'url("https://tiptopgents.com/wp-content/uploads/2022/04/PicsArt_12-20-06.34.46.jpg")'}}>
                <StyledTypography align='center' variant='h3'>Men</StyledTypography>
            </StyledBox>
            <StyledBox sx={{backgroundImage:'url("https://media.istockphoto.com/photos/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-picture-id1208148708?k=20&m=1208148708&s=612x612&w=0&h=rjZiAPCOpwREiTET21lTP3wM30BUqAG9PjocC-euJ98=")'}}>
               <StyledTypography align='center' variant='h3'>Women</StyledTypography>
            </StyledBox>
        </Stack>
    </Box>
  )
}

export default Categories