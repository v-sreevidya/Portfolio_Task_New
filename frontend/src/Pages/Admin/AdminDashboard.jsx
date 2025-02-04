import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../Components/Sidebar";
import "./AdminDashboard.css"; // Importing dark theme CSS

const AdminDashboard = () => {
    
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userCount, setUserCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [skillCount, setSkillCount] = useState(0);

    // Fetch counts on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get the count of users
                const usersResponse = await axios.get("http://localhost:8080/api/users/get");
                setUserCount(usersResponse.data.length); // Assuming the data is an array

                // Get the count of projects
                const projectsResponse = await axios.get("http://localhost:8080/api/projects/get");
                setProjectCount(projectsResponse.data.length); // Assuming the data is an array

                // Get the count of skills
                const skillsResponse = await axios.get("http://localhost:8080/api/skills/get");
                setSkillCount(skillsResponse.data.length); // Assuming the data is an array
            } catch (error) {
                console.error("Error fetching counts:", error);
            }
        };

        fetchData();
    }, []); // Empty array ensures it only runs once after component mounts

    return (
        
             <div className={`admin-dashboard-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
             <Sidebar isSidebarOpen={isSidebarOpen} />
            
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
