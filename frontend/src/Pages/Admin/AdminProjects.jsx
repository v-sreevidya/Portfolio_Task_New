import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "../../Components/Sidebar";
import "./AdminProjects.css";

const AdminProjects = () => {
    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTitle("");
        setDetails("");
        setImage(null);
        setPreview(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("title", title);
        formData.append("details", details);
        formData.append("image", image);

        try {
            await axios.post("http://localhost:8080/api/projects", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            const response = await axios.get('http://localhost:8080/api/projects/get');
            setProjects(response.data);
        } catch (error) {
            console.error("Error adding project:", error);
            alert("Error adding project!");
        }
    };

    return (
        <div className="admin-container">
          
            <div className="projects-container1">
                <div className="projects-header3">
                    <h2 className="section-title">Projects List</h2>
                    <button className="add-project-btn" onClick={openModal}>Add Project</button>
                </div>

                <div className="projects-table-container1">
                    <table className="projects-table1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Details</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project.id}>
                                    <td>{project.id}</td>
                                    <td>{project.title}</td>
                                    <td>{project.details}</td>
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

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add New Project</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Title:
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Details:
                                <textarea
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                    required
                                ></textarea>
                            </label>
                            <label>
                                Image:
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required
                                />
                            </label>
                            {preview && <img src={preview} alt="Preview" width="100" />}
                            <div className="modal-buttons">
                                <button type="submit">Add Project</button>
                                <button type="button" onClick={closeModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProjects;
