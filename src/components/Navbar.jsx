import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:"black"}}>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PRODUCT MANAGEMENT SYSTEM
          </Typography>
          <Link to={'/'}><Button style={{color:"white"}}>Home</Button></Link>
          <Link to={'/add-products'}><Button style={{color:"white"}}>Add products</Button></Link> 
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar