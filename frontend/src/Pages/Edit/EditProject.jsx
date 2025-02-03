import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; 
import Sidebar from "../../Components/Sidebar";
import "./EditProject.css";

const EditProject = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/api/projects/get/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setDetails(response.data.details);
                if (response.data.image) {
                    setImagePreview(`data:image/jpeg;base64,${response.data.image}`);
                }
            })
            .catch(error => {
                console.error("Error fetching project details:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to fetch project details.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            });
    }, [id]);

    
    const validateForm = () => {
        let newErrors = {};

        if (!title.trim()) newErrors.title = "Title is required";
        if (!details.trim()) newErrors.details = "Details are required";
        if (!image && !imagePreview) newErrors.image = "Image is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, title: e.target.value.trim() ? "" : "Title is required" }));
    };

    const handleDetailsChange = (e) => {
        setDetails(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, details: e.target.value.trim() ? "" : "Details are required" }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        if (file) {
            const fileReader = new FileReader();
            fileReader.onloadend = () => setImagePreview(fileReader.result);
            fileReader.readAsDataURL(file);
            setErrors((prevErrors) => ({ ...prevErrors, image: "" }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, image: "Image is required" }));
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!validateForm()) return; 

        const formData = new FormData();
        formData.append("title", title);
        formData.append("details", details);
        if (image) formData.append("image", image);

        try {
            await axios.put(`http://localhost:8080/api/projects/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            Swal.fire({
                title: "Success!",
                text: "Project updated successfully!",
                icon: "success",
                timer: 2500,
                showConfirmButton: false,
            });

            setTimeout(() => navigate("/admin/projects"), 2600);
        } catch (error) {
            console.error("Error updating project:", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to update project. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="edit-project-container">
                <h2>Edit Project</h2>
                <form onSubmit={handleUpdate}>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                    {errors.title && <p className="error-message">{errors.title}</p>}

                    <label>Details:</label>
                    <textarea
                        value={details}
                        onChange={handleDetailsChange}
                        required
                    />
                    {errors.details && <p className="error-message">{errors.details}</p>}

                    <label>Image:</label>
                    {imagePreview && <img src={imagePreview} alt="Project Preview" className="image-preview" />}
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {errors.image && <p className="error-message">{errors.image}</p>}

                    <button type="submit" className="save-btn">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default EditProject;
