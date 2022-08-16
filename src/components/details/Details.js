import { Box, CardMedia, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import RightBar from '../rightbar/RightBar'

const Details = () => {
  return (
    <Box>
        <Box sx={{
            backgroundImage:'url("https://media.istockphoto.com/photos/stylish-business-clothing-for-businessman-picture-id504742864?k=20&m=504742864&s=612x612&w=0&h=nuy8uRAuB6xVTfuXeTOd8wFSBWwNNGZ0nK1qViA-Nv0=")',
            backgroundPosition:'center',
            backgroundSize:'cover',
            height:'250px',
        }}>
            <Typography
            align='center'
            color={"black"}
            variant="h2"
            sx={{fontWeight:900,padding:10}}>
                Clicked Post Title
            </Typography>
        </Box>
        <Container>
            <hr/>
            <Stack 
            direction={{xs:"column",md:"row"}}
            spacing ={{xs:1,sm:2,md:8}}
            mt={8}>
                <Box flex={3} sx={{padding:"18px 100px 100px 100px"}}>
                    <Typography
                    m={4}
                    align="center"
                    color={"gray"}
                    variant="body1"
                    sx={{fontWeight:900}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged.
                    </Typography>
                    <CardMedia
                    component="img"
                    height="300px"
                    image="https://images.pexels.com/photos/7598170/pexels-photo-7598170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    />
                    <Typography  align='center' variant="h4" mt={2}>
                        Wait for it
                    </Typography>
                    <Typography
                    m={4}
                    align="center"
                    color={"gray"}
                    variant="body1"
                    sx={{fontWeight:900}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged.
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged.
                    </Typography>
                </Box>
                <Box flex={1}>
                    <RightBar/>
                </Box>
            </Stack>
        </Container>
    </Box>
  )
}

export default Details