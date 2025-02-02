import React from "react";
import { useNavigate } from "react-router-dom";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); 
    navigate("/admin"); 
  };

  
};

export default AdminDashboard;
