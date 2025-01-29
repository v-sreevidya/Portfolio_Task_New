import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/skills/get');
        setSkills(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching skills data:", err);
        setError("Error loading skills data");
        setLoading(false);
      }
    };

    fetchSkillsData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="skills-container">
      <h1 className="skills-heading">Skills</h1> {/* Heading for skills */}
      <div className="skill-card-container">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              {/* Display Base64-encoded image */}
              <img 
                src={`data:image/jpeg;base64,${skill.image}`} 
                alt={`Skill ${skill.id}`} 
                className="skill-image" 
              />
            </div>
          ))
        ) : (
          <div>No skills available</div>
        )}
      </div>
    </div>
  );
};

export default Skills;
