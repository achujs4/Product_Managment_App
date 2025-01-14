import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import ProductDashboard from "./components/ProductDashboard";
import AddProductForm from "./components/AddProductForm";


const App =() =>{
return(
  <>
  <Navbar />
  <Routes>
    <Route path="/" element={<ProductDashboard />} />
    <Route path="/add-products" element={<AddProductForm />} /> 
  </Routes>
 </>
)
}

export default App;
