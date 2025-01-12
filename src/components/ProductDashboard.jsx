import React, { useEffect, useState } from "react";

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating?.rate} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDashboard;
