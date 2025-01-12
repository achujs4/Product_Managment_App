import { useState } from 'react'
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import ProductDashboard from "./components/ProductDashboard";
import AddProductForm from "./components/AddProductForm";

import './App.css'

const App=() =>{
  <BrowserRouter>
  <Navbar />

  <Routes>
    <Route path="/" element={<ProductDashboard />} /> {/* Home page */}
    <Route path="/add-product" element={<AddProductForm />} /> {/* Add Product page */}
  </Routes>
</BrowserRouter>

};
export default App
