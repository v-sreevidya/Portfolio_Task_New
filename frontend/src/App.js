import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import HomePage from "./Pages/HomePage";
import Skills from "./Pages/Skills";
import Project1 from "./Pages/Project1"; 
import './App.css';

function ScrollToHash() {
  const { hash } = useLocation(); 

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]); 

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <ScrollToHash />  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills/:id" element={<Skills />} /> {/* Dynamic route */}
        <Route path="/projects/:id" element={<Project1 />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
