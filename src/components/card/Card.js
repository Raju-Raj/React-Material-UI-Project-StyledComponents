import React from 'react';
import { Box, CardContent, Link, CardMedia, Typography } from '@mui/material'


const Card = ({cardImage}) => {
  return (
    <Box >
      <Link href="http://localhost:3000/details" sx={{textDecoration:'none'}}>
         <CardMedia
        component="img"
        height="100%"
        image={cardImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body1" color="tomato" component="div" align='center'>
          PERFUMES
        </Typography>
        <Typography gutterBottom variant="h5"  component="div" align='center'>
          Wearing this will make everyone love you
        </Typography>
        <Typography gutterBottom variant="body2"  component="div" align='center' color="text.secondary">
          It's women love
        </Typography>
        <Typography variant="body2" color="text.secondary" align='center'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      </Link>
    </Box>
  )
}

export default Card