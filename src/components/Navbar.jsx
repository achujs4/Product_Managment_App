import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
	<Box sx={{ flexGrow: 1 }}>
	<AppBar position="static" style={{backgroundColor:"primary"}}>
	  <Toolbar>
		<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
		  Product React App
		</Typography>
		<Link to='/'><Button style={{color:'white'}}>Home</Button></Link>
		<Link to='/addproducts'><Button style={{color:'white'}}>ADDProduct</Button></Link>

	  </Toolbar>
	</AppBar>
  </Box>
  )
}

export default Navbar
