import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ErrorModal from "../../Components/ErrorModal";
import "./AdminEducation.css";


const AdminEducation = () => {
    const [educationList, setEducationList] = useState([]);
    const [degree, setDegree] = useState("");
    const [institution, setInstitution] = useState("");
    const [year, setYear] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(""); 
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
        const confirmDeletion = window.confirm("Are you sure you want to delete this education?");
        if (confirmDeletion) {
            try {
                await axios.delete(`http://localhost:8080/api/educations/delete/${id}`);
                setEducationList(prevList => prevList.filter(item => item.id !== id));
                alert("Deleted successfully!");
            } catch (error) {
                setErrorMessage("Error deleting education entry. Please try again.");
                setIsErrorModalOpen(true);
                console.error("Error deleting education entry:", error);
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/education/edit/${id}`);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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

            setIsModalOpen(false); 
            alert("Education added successfully!");
            setDegree(""); 
            setInstitution("");
            setYear("");
            
            const response = await axios.get('http://localhost:8080/api/educations/get');
            setEducationList(response.data);
        } catch (error) {
            setErrorMessage("Error adding education. Please try again.");
            setIsErrorModalOpen(true);
            console.error("Error adding education:", error);
        }
    };

    const closeErrorModal = () => {
        setIsErrorModalOpen(false); 
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

           
            <ErrorModal 
                isOpen={isErrorModalOpen} 
                onClose={closeErrorModal} 
                message={errorMessage} 
            />
        </div>
    );
};

export default AdminEducation;
