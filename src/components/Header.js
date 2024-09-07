import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Menu as MenuIcon, Notifications, AccountCircleSharp } from '@mui/icons-material'

const useStyles = {
  flexGrow:1, 
  fontSize:20, 
  textTransform:"uppercase", 
  justifyContent:"center", 
  fontFamily:"Montserrat",
}

const Header = () => {
  return (
    <>
      <Toolbar>
        <IconButton color='inherit'>
          <MenuIcon/>
        </IconButton>

        <Typography 
          variant='h6' 
          sx={useStyles}>
          Blogging Website
        </Typography>

        <IconButton>
          <Badge badgeContent={4} color="error">
            <Notifications/>
          </Badge> 
        </IconButton>

        <IconButton>
          <AccountCircleSharp/>
        </IconButton>

      </Toolbar>

        <Divider />

        <Toolbar sx={useStyles}>Express your emotions through words</Toolbar>
    
    </>
  )
}

export default Header
