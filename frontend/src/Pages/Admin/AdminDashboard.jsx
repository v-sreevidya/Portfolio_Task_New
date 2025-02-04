import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../Components/Sidebar";
import "./AdminDashboard.css"; // Importing dark theme CSS

const AdminDashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [skillCount, setSkillCount] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Fetch counts on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersResponse = await axios.get("http://localhost:8080/api/users/get");
                setUserCount(usersResponse.data.length); 

                const projectsResponse = await axios.get("http://localhost:8080/api/projects/get");
                setProjectCount(projectsResponse.data.length); 

                const skillsResponse = await axios.get("http://localhost:8080/api/skills/get");
                setSkillCount(skillsResponse.data.length); 
            } catch (error) {
                console.error("Error fetching counts:", error);
            }
        };

        fetchData();
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="admin-dashboard-container">
            <Sidebar isOpen={sidebarOpen} />
            <div className={`hamburger-menu ${sidebarOpen ? "open" : ""}`} onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="dashboard-content">
                <h2 className="dashboard-title">Admin Dashboard</h2>
                <div className="dashboard-cards">
                    <div className="dashboard-card">
                        <h3 className="head">Users</h3>
                        <p>{userCount}</p>
                    </div>
                    <div className="dashboard-card">
                        <h3 className="head">Projects</h3>
                        <p>{projectCount}</p>
                    </div>
                    <div className="dashboard-card">
                        <h3 className="head">Skills</h3>
                        <p>{skillCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
