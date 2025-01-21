import React from "react";
import ProjectsPage from "./ProjectPage"; 
import NavbarComponent from "../Components/NavbarComponent"; 
import "./HomePage.css"; 

const HomePage = () => {
  return (
    <div className="scrollable-container">
      <section id="home-section" className="home-section">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a brief introduction to my work.</p>
      </section>

      <section id="about-section" className="about-section">
        <h1>About Me</h1>
        <p>This is where I tell you about myself and my experiences.</p>
      </section>

      <section id="projects-section" className="projects-section">
        <ProjectsPage />
      </section>

      <section id="contact-section" className="contact-section">
        <h1>Contact</h1>
        <p>Get in touch with me.</p>
      </section>
    </div>
  );
};

export default HomePage;
