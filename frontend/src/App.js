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

import AdminProjects from "./Pages/Admin/AdminProjects";
import AddProject from "./Pages/Add/AddProject";
import EditProject from "./Pages/Edit/EditProject";

import './App.css';
import { AuthProvider } from "./Pages/Authentication";
import ProtectedRoute from "./Pages/Admin/ProtectedRoute";
import AdminEducation from "./Pages/Admin/AdminEducation";
import AddEducation from "./Pages/Add/AddEducation";
import EditEducation from "./Pages/Edit/EditEducation";
import AdminUsers from "./Pages/Admin/AdminUsers";
import AddUsers from "./Pages/Add/AddUsers";
import EditUser from "./Pages/Edit/EditUser";

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
            element={<><ProtectedRoute component={AdminDashboard} />
           
            </>}
          />
          <Route
            path="/admin/skills"
            element={<><ProtectedRoute component={AdminSkills} />
             <Sidebar />
            </>}
          />
          <Route
            path="/admin/projects"
            element={<><ProtectedRoute component={AdminProjects} />
            <Sidebar />
            </>}
          />
          <Route path="/admin/skills/edit/:id" element={<div className="admin-container">
            <Sidebar />
            <ProtectedRoute component={EditSkill} /> </div>} />
          
          <Route path="/admin/projects/add" element={ <div className="admin-container">
            <Sidebar />
            <ProtectedRoute component={AddProject} />
          </div>} />
          <Route path="/admin/projects/edit/:id" element={ <div className="admin-container">
            <Sidebar />
            <ProtectedRoute component={EditProject} />
          </div>} />
          <Route path="/admin/education" element={ <div className="admin-container">
            <Sidebar />
            <ProtectedRoute component={AdminEducation} />
          </div>} />
          <Route path="/admin/education/add" element={ <div className="admin-container">
            <Sidebar />
            <ProtectedRoute component={AddEducation} />
          </div>} />
          <Route path="/admin/education/edit/:id" element={ <div className="admin-container">
            <Sidebar />
            <ProtectedRoute component={EditEducation} />
          </div>} />
          <Route path="/admin/users" element={ <div className="admin-container">
            <Sidebar />
            <ProtectedRoute component={AdminUsers} />
          </div>} />
          <Route path="/admin/users/add" element={ <div className="admin-container">
            <Sidebar />
            <ProtectedRoute component={AddUsers} />
          </div>} />
          <Route path="/admin/users/edit/:id" element={ <div className="admin-container">
            <Sidebar />
            <ProtectedRoute component={EditUser} />
          </div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
