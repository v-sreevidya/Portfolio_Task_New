import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import Sidebar from "../../Components/Sidebar";
import "./EditSkill.css";

const EditSkill = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/api/skills/get/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setImagePreview(`data:image/jpeg;base64,${response.data.image}`);
            })
            .catch(error => {
                console.error("Error fetching skill details:", error);
            });
    }, [id]);

    // Validation function
    const validateForm = () => {
        let newErrors = {};

        if (!title.trim()) {
            newErrors.title = "Title is required";
        }

        if (!image && !imagePreview) {
            newErrors.image = "Image is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, title: e.target.value.trim() ? "" : "Title is required" }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        if (file) {
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                setImagePreview(fileReader.result);
            };
            fileReader.readAsDataURL(file);
            setErrors((prevErrors) => ({ ...prevErrors, image: "" }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, image: "Image is required" }));
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!validateForm()) return; // Stop if validation fails

        const formData = new FormData();
        formData.append("title", title);

        if (image) {
            formData.append("image", image);
        }

        try {
            await axios.put(`http://localhost:8080/api/skills/put/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            // Show SweetAlert2 Success Message
            Swal.fire({
                title: "Success!",
                text: "Skill updated successfully!",
                icon: "success",
                confirmButtonText: "OK",
                timer: 2500,
                showConfirmButton: false
            });

            setTimeout(() => {
                navigate("/admin/skills");
            }, 2600); // Navigate after a short delay
        } catch (error) {
            console.error("Error updating skill:", error);

            // Show SweetAlert2 Error Message
            Swal.fire({
                title: "Error!",
                text: "Failed to update skill. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="edit-skill-container">
                <h2>Edit Skill</h2>
                <form onSubmit={handleUpdate}>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                    {errors.title && <p className="error-message">{errors.title}</p>}

                    <label>Image:</label>
                    {imagePreview && <img src={imagePreview} alt="Skill Preview" className="image-preview" />}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {errors.image && <p className="error-message">{errors.image}</p>}

                    <button type="submit" className="save-btn">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default EditSkill;
