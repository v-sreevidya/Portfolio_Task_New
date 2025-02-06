import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Pages/Authentication";
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    // Toggle Sidebar Function
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Logout Function
    const handleLogout = () => {
        localStorage.setItem("isAuthenticated", "false");
        setIsAuthenticated(false);
        navigate("/admin");
    };

    // Close Sidebar When Clicking Outside
    const handleClickOutside = (event) => {
        if (!event.target.closest(".sidebar") && !event.target.closest(".hamburger-btn")) {
            setIsOpen(false);
        }
    };

    // Add event listener when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpen]);

    return (
        <>
            {/* Hamburger Menu Button */}
            <button className="hamburger-btn" onClick={toggleSidebar}>
                ☰
            </button>

            {/* Sidebar Container */}
            <nav className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="list-group list-group-flush">
                    <Link to="/admin/dashboard" className="list-group-item">Dashboard</Link>
                    <Link to="/admin/skills" className="list-group-item">Skills</Link>
                    <Link to="/admin/projects" className="list-group-item">Projects</Link>
                    <Link to="/admin/education" className="list-group-item">Education</Link>
                    <Link to="/admin/users" className="list-group-item">Add Users</Link>
                    <button className="list-group-item logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;