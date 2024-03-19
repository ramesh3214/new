
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import Service from './component/pages/Services';
import Contact from './component/pages/Contact';
import Login from './component/pages/Login';
import ProductList from './component/Cart/ProductList';
import About from './component/pages/About';
import Coupan from './component/pages/Coupan';
import NewSaloon from './component/pages/NewSaloon';








function App() {
  
  

  return (
    <BrowserRouter>
    
    
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
       
        <Route path="contact" element={<Contact/>} />
        <Route path="services" element={<Service/>} />
        <Route path="productlist" element={<ProductList/>} />
        <Route path="about" element={<About/>} />
        <Route path="login" element={<Login/>} />
        <Route path="coupan" element={<Coupan/>} />
        <Route path="newsaloon" element={<NewSaloon/>} />
        

       


        
        
        

        
      </Route>
  
    </Routes>
  </BrowserRouter>
  

    
  
  );
}

export default App;