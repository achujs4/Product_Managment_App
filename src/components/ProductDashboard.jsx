import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
	const [ data ,setData]=useState([])
	useEffect(()=>{
		axios.get('https://fakestoreapi.com/products').then((res)=>{
			setData(res.data)
		})
	},[])
  return (
	<div>
		<Box
        sx={{
          padding: 5, // Padding on all sides
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // 3 cards per row
          gap: 3, // Space between cards
        }}
      >
		{data.map((item)=>(
		 <Card sx={{ maxWidth: 345 }} key={item.id}>
       <CardMedia
     sx={{ height: 340 }}
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
			Price : {item.price}
        </Typography>
		<Typography variant="body2" sx={{ color: 'text.secondary' }}>
			Rating : {item.rating.rate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Add to Cart</Button>
        <Button size="small" variant='contained'>Buy Now</Button>
      </CardActions>
    </Card>
	))}
	</Box>
	</div>
  )
}

export default Home