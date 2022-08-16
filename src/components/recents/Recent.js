
import { Box, Grid } from '@mui/material'
import React from 'react'
import Card from '../card/Card'

const Recent = () => {
  return (
    <Box>
        <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2,md:1}}>
            <Grid item >
                <Card cardImage={"https://images.pexels.com/photos/7598170/pexels-photo-7598170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            </Grid>
            <Grid item md={6} xs={12}  >
            <Card cardImage={"https://images.pexels.com/photos/7598170/pexels-photo-7598170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            </Grid>
            <Grid item md={6} xs={12}  >
            <Card cardImage={"https://images.pexels.com/photos/7598170/pexels-photo-7598170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            </Grid>
            <Grid item md={6} xs={12}  >
            <Card cardImage={"https://images.pexels.com/photos/7598170/pexels-photo-7598170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            </Grid>
            <Grid item md={6} xs={12}  >
            <Card cardImage={"https://images.pexels.com/photos/7598170/pexels-photo-7598170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Recent