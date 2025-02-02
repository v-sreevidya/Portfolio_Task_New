import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./Components/NavbarComponent";
import HomePage from "./Pages/HomePage";
import Skills from "./Pages/Skills";
import Project1 from "./Pages/Project1"; 
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminSkills from "./Pages/Admin/AdminSkills";  
import Sidebar from "./Components/Sidebar";
import EditSkill from "./Pages/Edit/EditSkill";
import AddSkill from "./Pages/Add/AddSkill";

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Listen for changes in authentication status
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Portfolio Routes */}
        <Route
          path="/"
          element={
            <>
              <NavbarComponent />
              <HomePage />
            </>
          }
        />
        <Route
          path="/skills/:id"
          element={
            <>
              <NavbarComponent />
              <Skills />
            </>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <>
              <NavbarComponent />
              <Project1 />
            </>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={isAuthenticated ? (
            <>
              <Sidebar />
              <AdminDashboard />
            </>
          ) : (
            <Navigate to="/admin" />
          )}
        />
        <Route
          path="/admin/skills"
          element={isAuthenticated ? (
            <>
              <Sidebar />
              <AdminSkills />
            </>
          ) : (
            <Navigate to="/admin" />
          )}
        />
        <Route path="/admin/skills/edit/:id" element={<EditSkill />} />
        <Route path="/admin/skills/add" element={<AddSkill />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
