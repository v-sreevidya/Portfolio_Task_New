import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link"; 
import './NavbarComponent.css';
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const isOnHomepage = window.location.pathname === "/";
  return (
    <div>
      <Navbar className="NavbarComponent" fixed="top">
        <Navbar.Brand className="mx-5" as={HashLink} to="#home-section">
          My Portfolio
        </Navbar.Brand>
        <Nav className="ms-auto">
          <HashLink to="#home-section" className="mx-3 nav-link" activeClassName="active-link">Home</HashLink>
          <HashLink to="#about-section" className="mx-3 nav-link" activeClassName="active-link">About</HashLink>
          <HashLink to="#skills-section" className="mx-3 nav-link" activeClassName="active-link">Skills</HashLink>
          {isOnHomepage ? (
            // If on homepage, use HashLink to scroll to the #projects-section
            <HashLink to="/#projects-section" className="mx-3 nav-link" activeClassName="active-link">Projects</HashLink>
          ) : (
            // If on ProjectPage, use Link to navigate to /projects
            <Link to="/#projects-section" className="mx-3 nav-link">Projects</Link>
            
            
          )}
          <HashLink to="#contact-section" className="mx-3 nav-link" activeClassName="active-link">Contact Me</HashLink>
        </Nav>
       
      </Navbar>
    </div>
  );
};

export default NavbarComponent;