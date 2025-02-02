import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AddSkill.css';

const AddSkill = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState(""); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);

        try {
            await axios.post("http://localhost:8080/api/skills", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/admin/skills"); // Redirect to Skills list after adding
        } catch (error) {
            console.error("Error adding skill:", error);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name); 
    };

    return (
        <div className="add-skill-container">
            <h2>Add New Skill</h2>
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
                    Image:
                    <input
                        type="file"
                        onChange={handleImageChange}
                        required
                    />
                    {imageName && <p className="image-name">{imageName}</p>}
                </label>
                <button type="submit">Add Skill</button>
            </form>
        </div>
    );
};

export default AddSkill;
