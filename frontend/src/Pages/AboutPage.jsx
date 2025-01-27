import React from "react";
import './AboutPage.css';
import profileimg from './../Assets/Images/Anna.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
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
          <div className="row">
        <div className="col-10">
          
          <div className="education-container">
          <div className="education-item">
              <FontAwesomeIcon icon={faBusinessTime} className="education-icon" />
              <p className="education-title">Tarento</p>
              <p className="education-year">Associate Software Engineer (Trainee)</p>
            </div>
            <div className="education-item">
              <FontAwesomeIcon icon={faGraduationCap} className="education-icon" />
              <p className="education-title">B.Tech in ECE</p>
              <p className="education-year">NSS College of Engineering (2020 - 2024)</p>
            </div>
            <div className="education-item">
              <FontAwesomeIcon icon={faGraduationCap} className="education-icon" />
              <p className="education-title">High School</p>
              <p className="education-year">Kendriya Vidyalaya Kanjikode (2017 - 2019)</p>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>

     
    </div>
   
  );
};

export default AboutPage;
