import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; 
import Sidebar from "../../Components/Sidebar";
import "./EditUser.css";

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/get/${id}`)
            .then(response => {
                setName(response.data.name);
                setUsername(response.data.username);
                setEmail(response.data.email);
                setPassword(response.data.password); // In a real-world app, you should not fetch and display password like this.
            })
            .catch(error => {
                console.error("Error fetching user details:", error);
            });
    }, [id]);

    const validateForm = () => {
        let newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!username.trim()) {
            newErrors.username = "Username is required";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, name: e.target.value.trim() ? "" : "Name is required" }));
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, username: e.target.value.trim() ? "" : "Username is required" }));
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, email: e.target.value.trim() ? "" : "Email is required" }));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, password: e.target.value.trim() ? "" : "Password is required" }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const updatedUser = {
            name,
            username,
            email,
            password
        };

        try {
            await axios.put(`http://localhost:8080/api/users/put/${id}`, updatedUser);

            Swal.fire({
                title: "Success!",
                text: "User updated successfully!",
                icon: "success",
                confirmButtonText: "OK",
                timer: 2500,
                showConfirmButton: false
            });

            setTimeout(() => {
                navigate("/admin/users");
            }, 2600);
        } catch (error) {
            console.error("Error updating user:", error);

            Swal.fire({
                title: "Error!",
                text: "Failed to update user. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="edit-user-container">
                <h2>Edit User</h2>
                <form onSubmit={handleUpdate}>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}

                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                    {errors.username && <p className="error-message">{errors.username}</p>}

                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}

                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}

                    <button type="submit" className="save-btn">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
