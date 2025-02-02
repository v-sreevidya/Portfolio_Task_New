import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import "./AdminSkills.css";
import Swal from "sweetalert2";

const AdminSkills = () => {
    const [skills, setSkills] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get("http://localhost:8080/api/skills/get")
            .then(response => {
                setSkills(response.data);
            })
            .catch(error => {
                console.error("Error fetching skills:", error);
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
                await axios.delete(`http://localhost:8080/api/skills/del/${id}`);
                setSkills(skills.filter(skill => skill.id !== id));
                Swal.fire("Deleted!", "The skill has been deleted.", "success");
            } catch (error) {
                Swal.fire("Error!", "Something went wrong.", "error");
                console.error("Error deleting skill:", error);
            }
        }
    });
};


    
    const handleEdit = (id) => {
        navigate(`/admin/skills/edit/${id}`);
    };

    
    const handleAddSkill = () => {
        navigate(`/admin/skills/add`);
    };

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="skills-container">
                {/* Fixed navbar-like section */}
                <div className="skills-header">
                    <h2 className="section-title">Skills List</h2>
                    <button className="add-skill-btn" onClick={handleAddSkill}>
                        Add Skill
                    </button>
                </div>

                {/* Table to show skills */}
                <div className="skills-table-container">
                    <table className="skills-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skills.map(skill => (
                                <tr key={skill.id}>
                                    <td>{skill.id}</td>
                                    <td>{skill.title}</td>
                                    <td>
                                        <img src={`data:image/png;base64,${skill.image}`} alt={skill.title} className="skill-image" />
                                    </td>
                                    <td>
                                        <button className="edit-btn" onClick={() => handleEdit(skill.id)}>Edit</button>
                                        <button className="delete-btn" onClick={() => handleDelete(skill.id)}>Delete</button>
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

export default AdminSkills;
