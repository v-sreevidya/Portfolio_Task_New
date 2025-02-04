import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddUsers.css";

const AddUsers = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const encodedPassword = btoa(password);

    const userData = {
      name,
      username,
      email,
      password: encodedPassword, 
    };

    try {
      
      const response = await axios.post("http://localhost:8080/api/admin/register", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        
        navigate("/admin/dashboard");
      }
    } catch (error) {
      if (error.response) {
        
        console.error("Error response:", error.response.data);
        alert(error.response.data); 
      } else {
        console.error("Error adding user:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="add-user-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUsers;
