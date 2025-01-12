import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
