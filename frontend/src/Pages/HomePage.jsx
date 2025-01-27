import React from "react";
import "./HomePage.css";
import HomeSectionPage from "./HomeSectionPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import Skills from "./Skills"

const HomePage = () => {
  return (
    <div className="scrollable-container">
      <section id="home-section" className="home-section">
        <HomeSectionPage />
      </section>

      <section id="about-section" className="about-section">
        <AboutPage />
      </section>
      <section id="skills-section" className="skills-section">
        <Skills />
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
