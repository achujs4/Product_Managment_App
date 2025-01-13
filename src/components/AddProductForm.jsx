import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddProducts = () => {
  const [addData, setAddData] = useState({
    title: '',
    image: '',
    price: '',
    rating: ''
  });

  const [errors, setErrors] = useState({
    title: '',
    image: '',
    price: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {
      title: '',
      image: '',
      price: '',
      rating: ''
    };

    if (!addData.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!addData.image.trim() || !isValidURL(addData.image)) {
      newErrors.image = 'Valid image URL is required';
      isValid = false;
    }

    if (!addData.price.trim() || isNaN(addData.price) || Number(addData.price) <= 0) {
      newErrors.price = 'Valid price is required (greater than 0)';
      isValid = false;
    }

    if (!addData.rating.trim() || isNaN(addData.rating) || Number(addData.rating) < 0 || Number(addData.rating) > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Product Details:', addData);
      alert('Product added successfully!');
      // Optionally reset form
      setAddData({
        title: '',
        image: '',
        price: '',
        rating: ''
      });
    }
  };

  return (
    <div style={{ margin: '8%' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <TextField
              label="Title"
              name="title"
              variant="outlined"
              fullWidth
              value={addData.title}
              onChange={handleChange}
              error={!!errors.title}
              helperText={errors.title}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Image URL"
              name="image"
              variant="outlined"
              fullWidth
              value={addData.image}
              onChange={handleChange}
              error={!!errors.image}
              helperText={errors.image}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Price"
              name="price"
              variant="outlined"
              fullWidth
              value={addData.price}
              onChange={handleChange}
              error={!!errors.price}
              helperText={errors.price}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Rating"
              name="rating"
              variant="outlined"
              fullWidth
              value={addData.rating}
              onChange={handleChange}
              error={!!errors.rating}
              helperText={errors.rating}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button color="secondary" variant="contained" type="submit">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProducts;
