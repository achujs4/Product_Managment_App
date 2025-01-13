import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import ProductDashboard from "./components/ProductDashboard";
import AddProductForm from "./components/AddProductForm";
import './App.css'

function App(){
  const [count, setCount] = useState(0)

return(
  <>
  <Navbar />
  <Routes>
    <Route path="/" element={<ProductDashboard />} />
    <Route path="/add-product" element={<AddProductForm />} /> 
  </Routes>
 </>
)
}

export default App;
