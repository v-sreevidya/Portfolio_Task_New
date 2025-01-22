import React from "react";
import ProjectsPage from "./ProjectPage"; 
import NavbarComponent from "../Components/NavbarComponent"; 
import "./HomePage.css"; 
import HomeSectionPage from "./HomeSectionPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <div className="scrollable-container">
      <section id="home-section" className="home-section">
        <HomeSectionPage />
      </section>

      <section id="about-section" className="about-section">
        <AboutPage />
      </section>

      <section id="projects-section" className="projects-section">
        <ProjectsPage />
      </section>

      <section id="contact-section" className="contact-section">
        <ContactPage />
      </section>
    </div>
  );
};

export default HomePage;
