import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./AdminUsers.css";
import Swal from "sweetalert2";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/api/users/get")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This user will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:8080/api/users/del/${id}`);
                    setUsers(users.filter(user => user.id !== id));
                    Swal.fire("Deleted!", "User has been deleted.", "success");
                } catch (error) {
                    Swal.fire("Error!", "Failed to delete user.", "error");
                    console.error("Error deleting user:", error);
                }
            }
        });
    };

    const handleEdit = (id) => {
        navigate(`/admin/users/edit/${id}`);
    };

    const openModal = () => {
        setIsModalOpen(true); // Open modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name,
            username,
            email,
            password,
        };

        try {
            await axios.post("http://localhost:8080/api/admin/register", userData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setIsModalOpen(false); // Close modal after submitting
            alert("User added successfully!");
            setName(""); // Clear the form
            setUsername("");
            setEmail("");
            setPassword("");
            // Re-fetch the users list
            const response = await axios.get("http://localhost:8080/api/users/get");
            setUsers(response.data);
        } catch (error) {
            console.error("Error adding user:", error);
            alert("Error adding user!");
        }
    };

    return (
        <div className="admin-container">
            
            <div className="users-container">
                {/* Fixed navbar-like section */}
                <div className="users-header">
                    <h2 className="section-title">Users List</h2>
                    <button className="add-user-btn" onClick={openModal}>
                        Add User
                    </button>
                </div>

                {/* Table to show users */}
                <div className="users-table-container">
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>******</td> {/* Masked password for security */}
                                    <td>
                                        <button className="edit-btn" onClick={() => handleEdit(user.id)}>Edit</button>
                                        <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add User Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
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
                            <div className="modal-buttons">
                                <button type="submit">Add User</button>
                                <button type="button" onClick={closeModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminUsers;
