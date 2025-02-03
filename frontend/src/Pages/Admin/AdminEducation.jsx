import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Swal from "sweetalert2";
import "./AdminEducation.css";

const AdminEducation = () => {
    const [educationList, setEducationList] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get('http://localhost:8080/api/educations/get')
            .then(response => {
                setEducationList(response.data);
            })
            .catch(error => {
                console.error("Error fetching education data:", error);
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
                    await axios.delete(`http://localhost:8080/api/educations/delete/${id}`);
                    setEducationList(prevList => prevList.filter(item => item.id !== id));
                    Swal.fire("Deleted!", "The education entry has been deleted.", "success");
                } catch (error) {
                    Swal.fire("Error!", "Something went wrong.", "error");
                    console.error("Error deleting education entry:", error);
                }
            }
        });
    };

    
    const handleEdit = (id) => {
        navigate(`/admin/education/edit/${id}`);
    };

 
    const handleAddEducation = () => {
        navigate(`/admin/education/add`);
    };

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="education-container">
                
                <div className="education-header">
                    <h2 className="section-title">Education List</h2>
                    <button className="add-education-btn" onClick={handleAddEducation}>
                        Add Education
                    </button>
                </div>

                
                <div className="education-table-container">
                    <table className="education-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Degree</th>
                                <th>Institution</th>
                                <th>Year</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {educationList.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.degree}</td>
                                    <td>{item.institution}</td>
                                    <td>{item.year}</td>
                                    <td>
                                        <button className="edit-btn" onClick={() => handleEdit(item.id)}>Edit</button>
                                        <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
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

export default AdminEducation;
