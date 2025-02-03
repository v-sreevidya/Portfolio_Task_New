import React from "react";
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
import AdminProjects from "./Pages/Admin/AdminProjects";
import AddProject from "./Pages/Add/AddProject";
import EditProject from "./Pages/Edit/EditProject";
import { useAuth } from "./Pages/Authentication";
import './App.css';
import { AuthProvider } from "./Pages/Authentication";
import ProtectedRoute from "./Pages/Admin/ProtectedRoute";
import AdminEducation from "./Pages/Admin/AdminEducation";
import AddEducation from "./Pages/Add/AddEducation";
import EditEducation from "./Pages/Edit/EditEducation";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Portfolio Routes */}
          <Route path="/" element={<><NavbarComponent /><HomePage /></>} />
          <Route path="/skills/:id" element={<><NavbarComponent /><Skills /></>} />
          <Route path="/projects/:id" element={<><NavbarComponent /><Project1 /></>} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={<ProtectedRoute component={AdminDashboard} />}
          />
          <Route
            path="/admin/skills"
            element={<ProtectedRoute component={AdminSkills} />}
          />
          <Route
            path="/admin/projects"
            element={<ProtectedRoute component={AdminProjects} />}
          />
          <Route path="/admin/skills/edit/:id" element={<div className="admin-container">
            <Sidebar />
            <EditSkill /> </div>} />
          <Route path="/admin/skills/add" element={<div className="admin-container">
            <Sidebar />
            <AddSkill /> </div>} />
          <Route path="/admin/projects/add" element={ <div className="admin-container">
            <Sidebar />
            <AddProject />
          </div>} />
          <Route path="/admin/projects/edit/:id" element={ <div className="admin-container">
            <Sidebar />
            <EditProject />
          </div>} />
          <Route path="/admin/education" element={ <div className="admin-container">
            <Sidebar />
            <AdminEducation />
          </div>} />
          <Route path="/admin/education/add" element={ <div className="admin-container">
            <Sidebar />
            <AddEducation />
          </div>} />
          <Route path="/admin/education/edit/:id" element={ <div className="admin-container">
            <Sidebar />
            <EditEducation />
          </div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
