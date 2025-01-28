import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ProjectPage.css';

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/projects/get");
        setProjects(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects.");
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    
    <div className="project-page-container">
     
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="styling-card">
          <Link to={`/projects/${project.id}`}>
            <h2 className="card-title">{project.title}</h2>
          </Link>
        </div>
        
      ))}
    </div>
    </div>
  );
};

export default ProjectPage;