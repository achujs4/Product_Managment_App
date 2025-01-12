import React, { useState } from "react";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    rating: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Product</h1>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="0"
          max="5"
          step="0.1"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProductForm;
