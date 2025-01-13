import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddProductForm = () => {
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

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Validate input fields
  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!addData.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!addData.image.trim() || !isValidURL(addData.image)) {
      newErrors.image = 'Valid image URL is required';
      isValid = false;
    }

    if (!addData.price.trim() || isNaN(addData.price) || Number(addData.price) <= 0) {
      newErrors.price = 'Price must be a number greater than 0';
      isValid = false;
    }

    if (!addData.rating.trim() || isNaN(addData.rating) || Number(addData.rating) < 0 || Number(addData.rating) > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // URL validation
  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Product Details:', addData);
      alert('Product added successfully!');
      // Reset form after successful validation
      setAddData({
        title: '',
        image: '',
        price: '',
        rating: ''
      });
    }
  };

  return (
    <div style={{ margin: '50px auto', maxWidth: '600px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <Button color="primary" variant="contained" type="submit" fullWidth>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProductForm;
