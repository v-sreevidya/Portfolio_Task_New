
import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
           
            <div className="sidebar-header">
                <i className="bi bi-person-circle me-2 fs-4"></i>
                <span className="brand-name">Sreevidya V</span>
            </div>

            <hr className="text-light" />

            
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
                <button className="list-group-item list-group-item-action" onClick={() => handleLogout()}>
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                </button>
            </div>
        </div>
    );
};

const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    window.location.href = "/admin";  
};

export default Sidebar;
