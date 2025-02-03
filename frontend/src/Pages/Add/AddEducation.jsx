import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AddEducation.css';

const AddEducation = () => {
    const [degree, setDegree] = useState("");
    const [institution, setInstitution] = useState("");
    const [year, setYear] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const educationData = { degree, institution, year };

        try {
            await axios.post("http://localhost:8080/api/educations/create", educationData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            navigate("/admin/education"); // Redirect to Education list after adding
        } catch (error) {
            console.error("Error adding education:", error);
        }
    };

    return (
        <div className="add-education-container">
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
                <button type="submit">Add Education</button>
            </form>
        </div>
    );
};

export default AddEducation;
