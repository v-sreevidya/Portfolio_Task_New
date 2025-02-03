import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Authentication";

const AdminLogin = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // If the user is already authenticated, redirect them to the dashboard.
  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const credentials = btoa(`${username}:${password}`);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/login",
        {},
        {
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        }
      );

      if (response.status === 200) {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
        navigate("/admin/dashboard");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      localStorage.setItem("isAuthenticated", "false");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: "400px" }}>
        <h2 className="text-center mb-3">Admin Login</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="usernameInput">Username</label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
