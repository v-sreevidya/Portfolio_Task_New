import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import "./AdminEducation.css";
import Swal from "sweetalert2";

const AdminEducation = () => {
    const [educationList, setEducationList] = useState([]);
    const [degree, setDegree] = useState("");
    const [institution, setInstitution] = useState("");
    const [year, setYear] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
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

    const openModal = () => {
        setIsModalOpen(true); // Open modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const educationData = {
            degree,
            institution,
            year,
        };

        try {
            await axios.post("http://localhost:8080/api/educations/create", educationData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setIsModalOpen(false); // Close modal after submitting
            alert("Education added successfully!");
            setDegree(""); // Clear the form
            setInstitution("");
            setYear("");
            // Re-fetch the education list
            const response = await axios.get('http://localhost:8080/api/educations/get');
            setEducationList(response.data);
        } catch (error) {
            console.error("Error adding education:", error);
            alert("Error adding education!");
        }
    };

    return (
        <div className="admin-container2">
            
            <div className="education-container2">
                <div className="education-header2">
                    <h2 className="section-title">Education List</h2>
                    <button className="add-education-btn" onClick={openModal}>
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

            {/* Add Education Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add New Education</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Degree:
                                <input
                                    type="text"
                                    value={degree}
                                    onChange={(e) => setDegree(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Institution:
                                <input
                                    type="text"
                                    value={institution}
                                    onChange={(e) => setInstitution(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Year:
                                <input
                                    type="text"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    required
                                />
                            </label>
                            <div className="modal-buttons">
                                <button type="submit">Add Education</button>
                                <button type="button" onClick={closeModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminEducation;
