import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./AdminUsers.css";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [userData, setUserData] = useState({ username: "", password: "" });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/admin/all");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

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
                    await axios.delete(`http://localhost:8080/api/admin/delete/${id}`);
                    fetchUsers();
                    Swal.fire("Deleted!", "User has been deleted.", "success");
                } catch (error) {
                    Swal.fire("Error!", "Failed to delete user.", "error");
                    console.error("Error deleting user:", error);
                }
            }
        });
    };

    const handleEdit = (id) => {
        navigate(`/admin/edit/${id}`);
    };

    const openModal = () => {
        setUserData({ username: "", password: "" });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/admin/register", userData, {
                headers: { "Content-Type": "application/json" },
            });
            closeModal();
            Swal.fire("Success!", "User added successfully!", "success");
            fetchUsers();
        } catch (error) {
            console.error("Error adding user:", error);
            Swal.fire("Error!", "Failed to add user.", "error");
        }
    };

    return (
        <div className="admin-container">
            <div className="users-header">
                <h2 className="section-title">Users List</h2>
                <button className="add-user-btn" onClick={openModal}>Add User</button>
            </div>

            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button className="edit-btn" onClick={() => handleEdit(user.id)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add New User</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Username:
                                <input
                                    type="text"
                                    name="username"
                                    value={userData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Password:
                                <input
                                    type="password"
                                    name="password"
                                    value={userData.password}
                                    onChange={handleChange}
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
