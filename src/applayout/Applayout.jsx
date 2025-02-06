import React from "react";
import Navbar from "../pages/navbar/Navbar";
import About from "../pages/About/About";
import Footer from "../pages/footer/Footer";
import Content from "../pages/Content/Content";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home/Home";




function Applayout() {
  const name = "hari";
  const age = "19";
  const dept = "CSE";
  
  return (
    <>
    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Applayout;
