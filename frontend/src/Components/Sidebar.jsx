import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Pages/Authentication";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate(); // for navigation without page reload

    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        localStorage.setItem("isAuthenticated", "false");
        setIsAuthenticated(false);
        navigate("/admin"); 
    };

    return (
        <>
            
            <button className="hamburger-btn" onClick={toggleSidebar}>
                ☰ {/* Hamburger Icon */}
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="list-group list-group-flush">
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action">
                        <i className="bi bi-speedometer2 me-2"></i> Dashboard
                    </Link>
                    <Link to="/admin/skills" className="list-group-item list-group-item-action">
                        <i className="bi bi-lightbulb me-2"></i> Skills
                    </Link>
                    <Link to="/admin/projects" className="list-group-item list-group-item-action">
                        <i className="bi bi-kanban me-2"></i> Projects
                    </Link>
                    <Link to="/admin/education" className="list-group-item list-group-item-action">
                        <i className="bi bi-mortarboard me-2"></i> Education
                    </Link>
                    <Link to="/admin/user" className="list-group-item list-group-item-action">
                        <i className="bi bi-person-add me-2"></i> Add Users
                    </Link>
                    <button
                        className="list-group-item list-group-item-action logout-btn"
                        onClick={handleLogout}
                    >
                        <i className="bi bi-box-arrow-right me-2"></i> Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
