import React, { useState } from 'react';
import { AppBar,styled,Toolbar,Box, Typography, InputBase, Menu, MenuItem } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between',
    })
    const SocialBox = styled(Box)({
        display:'flex',
        gap:10,
    })
    const MenuBox = styled(Box)({
        display:'flex',
        gap:30,
    })
    const SearchBox = styled(Box)({
        display:'flex',
        gap:5,
    })
    const MenuItems = [{Name:'Home',Link:'/'},
    {Name:'Products',Link:'#'},
    {Name:'Portfolio',Link:'#'},
    {Name:'Blog',Link:'#'},
    {Name:'Contact Us',Link:'#'},
    ]
    const [open,setOpen] = useState(false)
  return (
    <AppBar sx={{background:'black'}} position={'static'}>
        <StyledToolbar>

           <SocialBox>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            </SocialBox>

           <MenuBox sx={{display:{xs:'none',sm:'none',md:'flex'}}}>
              {
                MenuItems.map((item,index)=>(
                    <Typography sx={{cursor:'pointer',fontSize:'14px'}} key={index} Link={item.Link}>{item.Name}</Typography>
                ))
              }
            </MenuBox>

           <SearchBox>
             <InputBase placeholder='Search....' sx={{color:'white'}}/>
             <MenuIcon sx={{color:'white',display:{xs:'block',sm:'block',md:'none'}}} onClick={()=>setOpen(!open)}/>
           </SearchBox>
        </StyledToolbar>
        <Menu
        id="basic-menu"
        open={open}
        onClose={()=>setOpen(!open)}
        anchorOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'left'
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box sx={{width:350,height:"90vh"}}>
        {
                MenuItems.map((item,index)=>(
                    <MenuItem sx={{cursor:'pointer',fontSize:'14px'}} key={index} Link={item.Link}>{item.Name}</MenuItem>
                ))
              }
        </Box>
        
      </Menu>
    
    </AppBar>
  )
}

export default Navbar
