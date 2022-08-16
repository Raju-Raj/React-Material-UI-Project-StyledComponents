import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Card from '../card/Card'

const RightBar = () => {
  return (
    <Box>
        <Typography align='center' bgcolor={'black'} color='white'>Most Popular Post</Typography>
    <List sx={{ width: '100%', height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-end">
      <ListItemAvatar>
        <Avatar sx={{height:80,width:80}} variant="square" alt="Remy Sharp" src="https://images.pexels.com/photos/10508388/pexels-photo-10508388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </ListItemAvatar>
      <ListItemText
        secondary={" — I'll be in your neighborhood doing errands this…"}
      />
    </ListItem>
    <ListItem alignItems="flex-end">
      <ListItemAvatar>
        <Avatar sx={{height:80,width:80}} variant="square" alt="Remy Sharp" src="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </ListItemAvatar>
      <ListItemText
        secondary={" — I'll be in your neighborhood doing errands this…"}
      />
    </ListItem>
    <ListItem alignItems="flex-end">
      <ListItemAvatar>
        <Avatar sx={{height:80,width:80}} variant="square" alt="Remy Sharp" src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </ListItemAvatar>
      <ListItemText
        secondary={" — I'll be in your neighborhood doing errands this…"}
      />
    </ListItem>
    <ListItem alignItems="flex-end">
      <ListItemAvatar>
        <Avatar sx={{height:80,width:80}} variant="square" alt="Remy Sharp" src="https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </ListItemAvatar>
      <ListItemText
        secondary={" — I'll be in your neighborhood doing errands this…"}
      />
    </ListItem>
    <Divider variant='inset' component={'li'}/>
  </List>
  <Typography align='center' bgcolor={'black'} color='white'>About Us</Typography>
  <Card cardImage="https://images.pexels.com/photos/7598170/pexels-photo-7598170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
  </Box>
  )
}

export default RightBar