import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; 
import Sidebar from "../../Components/Sidebar";
import "./EditEducation.css";

const EditEducation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [degree, setDegree] = useState("");
    const [institution, setInstitution] = useState("");
    const [year, setYear] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/api/educations/get/${id}`)
            .then(response => {
                setDegree(response.data.degree);
                setInstitution(response.data.institution);
                setYear(response.data.year);
            })
            .catch(error => {
                console.error("Error fetching education details:", error);
            });
    }, [id]);

    
    const validateForm = () => {
        let newErrors = {};

        if (!degree.trim()) {
            newErrors.degree = "Degree is required";
        }

        if (!institution.trim()) {
            newErrors.institution = "Institution is required";
        }

        if (!year.trim()) {
            newErrors.year = "Year is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleDegreeChange = (e) => {
        setDegree(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, degree: e.target.value.trim() ? "" : "Degree is required" }));
    };

    const handleInstitutionChange = (e) => {
        setInstitution(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, institution: e.target.value.trim() ? "" : "Institution is required" }));
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, year: e.target.value.trim() ? "" : "Year is required" }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!validateForm()) return; // Stop if validation fails

        const updatedEducation = { degree, institution, year };

        try {
            await axios.put(`http://localhost:8080/api/educations/update/${id}`, updatedEducation, {
                headers: { "Content-Type": "application/json" }
            });

            //pop up messages
            Swal.fire({
                title: "Success!",
                text: "Education updated successfully!",
                icon: "success",
                confirmButtonText: "OK",
                timer: 2500,
                showConfirmButton: false
            });

            setTimeout(() => {
                navigate("/admin/education");
            }, 2600);
        } catch (error) {
            console.error("Error updating education:", error);

            
            Swal.fire({
                title: "Error!",
                text: "Failed to update education. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="edit-education-container">
                <h2>Edit Education</h2>
                <form onSubmit={handleUpdate}>
                    <label>Degree:</label>
                    <input
                        type="text"
                        value={degree}
                        onChange={handleDegreeChange}
                        required
                    />
                    {errors.degree && <p className="error-message">{errors.degree}</p>}

                    <label>Institution:</label>
                    <input
                        type="text"
                        value={institution}
                        onChange={handleInstitutionChange}
                        required
                    />
                    {errors.institution && <p className="error-message">{errors.institution}</p>}

                    <label>Year:</label>
                    <input
                        type="text"
                        value={year}
                        onChange={handleYearChange}
                        required
                    />
                    {errors.year && <p className="error-message">{errors.year}</p>}

                    <button type="submit" className="save-btn">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default EditEducation;
