import React, { useState, useEffect } from "react";
import axios from "axios";
import profileimg from "./../Assets/Images/Anna.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import './AboutPage.css';

const AboutPage = () => {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching education data from the backend
  useEffect(() => {
    const fetchEducationsData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/educations/get');
        setEducations(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching education data:", err);
        setError("Error loading education data");
        setLoading(false);
      }
    };

    fetchEducationsData();
  }, []);

  return (
    <div className="container my-5">
      <div className="row align-items-center mb-4">
        <div className="col-md-5">
          <img src={profileimg} alt="profile" className="round-img" />
        </div>
        <div className="col-md-7">
          <p className="aboutme">
            Hey there! This is Sreevidya, a budding Full-Stack Developer with a keen interest in creating efficient
            and user-friendly applications. I'm a proactive, dedicated, and disciplined individual, 
            who focuses on continuous improvement through adaptability and creativity. 
          </p>
          <div className="education-container">
            {loading ? (
              <div className="loading">Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              educations.length > 0 ? (
                educations.map((education) => (
                  <div key={education.id} className="education-item">
                    <FontAwesomeIcon icon={faBusinessTime} className="education-icon" />
                    <p className="education-title">{education.title}</p>
                    <p className="education-year">{education.year}</p>
                    <p className="education-institution">{education.institution}</p>
                    <p className="education-type">{education.type}</p>
                  </div>
                ))
              ) : (
                <div>No education data available</div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
