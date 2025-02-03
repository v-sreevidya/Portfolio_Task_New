import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    navigate("/admin");
  };

  return (
    <div className="dashboard">
      <h1>Welcome, Admin</h1>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  );
};

export default AdminDashboard;
