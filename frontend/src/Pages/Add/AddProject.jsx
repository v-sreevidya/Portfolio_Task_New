import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AddProject.css';

const AddProject = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

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
            navigate("/admin/projects"); // Redirect to Projects list after adding
        } catch (error) {
            console.error("Error adding project:", error);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="add-project-container">
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
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="file"
                        onChange={handleImageChange}
                        required
                    />
                </label>
                {image && <p className="image-name">{image.name}</p>} {/* Display image name */}
                <button type="submit">Add Project</button>
            </form>
        </div>
    );
};

export default AddProject;
