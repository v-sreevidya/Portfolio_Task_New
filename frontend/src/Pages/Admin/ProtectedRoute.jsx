import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Authentication";
import Sidebar from "../../Components/Sidebar";

const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  return isAuthenticated ? (
    <>
      <Sidebar />
      <Component />
      
    </>
  ) : (
    <Navigate to="/admin" />
  );
};

export default ProtectedRoute;
