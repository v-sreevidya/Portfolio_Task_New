import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Project1.css';

const Project1 = () => {
  const { id } = useParams();  
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/projects/${id}`);
        setProject(response.data); 
        setLoading(false);
      } catch (err) {
        console.error('Error fetching project data:', err);
        setError('Error loading project data');
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="project-details-container">
      <h2>{project.title}</h2>

      
      {project.details ? (
        <div className="project-details-text">
          <p>{project.details}</p> 
        </div>
      ) : (
        <div>No details available</div>
      )}
      
      
      {project.image ? (
        <img
          src={`data:image/jpeg;base64,${project.image}`} 
          alt={project.title}
          className="project-image"
        />
      ) : (
        <div>No image available</div>
      )}
    </div>
  );
};

export default Project1;
