import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import "./AdminProjects.css";
import Swal from "sweetalert2";

const AdminProjects = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/projects/get')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
            });
    }, []);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:8080/api/projects/del/${id}`);
                    setProjects((prevProjects) => prevProjects.filter(project => project.id !== id));
                    Swal.fire("Deleted!", "The project has been deleted.", "success");
                } catch (error) {
                    Swal.fire("Error!", "Something went wrong.", "error");
                    console.error("Error deleting project:", error);
                }
            }
        });
    };

    const handleEdit = (id) => {
        navigate(`/admin/projects/edit/${id}`);
    };

    const handleAddProject = () => {
        navigate(`/admin/projects/add`);
    };

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="projects-container">
                
                <div className="projects-header">
                    <h2 className="section-title">Projects List</h2>
                    <button className="add-project-btn" onClick={handleAddProject}>
                        Add Project
                    </button>
                </div>

                <div className="projects-table-container">
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                
                               
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project.id}>
                                    <td>{project.id}</td>
                                    <td>{project.title}</td>
                                    
                                    

                                    <td>
                                        <button className="edit-btn" onClick={() => handleEdit(project.id)}>Edit</button>
                                        <button className="delete-btn" onClick={() => handleDelete(project.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminProjects;
