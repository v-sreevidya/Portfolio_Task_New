import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import Project1 from "./Pages/Project1";




function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname.includes("/project");

  return (
    <div>
      
      {!hideNavbar && <NavbarComponent />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<Project1 />} />
      
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
