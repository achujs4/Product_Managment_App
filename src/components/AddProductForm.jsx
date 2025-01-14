import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Addproducts = () => {
    const [form,setForm]=useState({
        product:'',
        image:'',
        price:'',
        rating:''
    })

    const navigate=useNavigate();          // redirecting or navigating to a different page
    
      function capValue(){
       console.log(form);
       axios.post('https://fakestoreapi.com/products',form).then((res)=>{
        
        navigate('/home');
       
    
       }).catch((error)=>{
        alert('Invalid Login');
       })
      }
   return (
       <div style={{margin:'7%'}}>
    <Grid container spacing={2}>
  <Grid size={{ xs: 6, md: 6 }}>
    <TextField fullWidth label='Product Name' variant='outlined' name='title' onChange={(e)=>{
          setForm({...form,title:e.target.value}) 
  }} required></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Price' variant='outlined' name='price' onChange={(e)=>{
          setForm({...form,price:e.target.value})
  }} required></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Rating' variant='outlined' name='rating' onChange={(e)=>{
          setForm({...form,rating:e.target.value})
  }} required></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Image' variant='outlined' name='image' onChange={(e)=>{
          setForm({...form,image:e.target.value})
  }} required></TextField>
  </Grid>
  <Button color='secondary' variant='contained' onClick={capValue}>AddProduct</Button> <br />
  
</Grid>

    </div>
  )
}

export default Addproducts