import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid2 from "@mui/material/Grid2"; 
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div style={{marginLeft:'8%',marginTop:'5%',marginBottom:'5%'}}>
      <Grid2 container spacing={2}>
        {data.map((item) => (
          <Grid2 xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                height: "400px",
                width:"400px", 
                display: "flex",
                flexDirection: "column", 
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={item.image}
                title="Product image"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  ${item.price}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Rating: {item.rating?.rate} ({item.rating?.count} reviews)
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default Products;
