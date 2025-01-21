import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link"; 
import './NavbarComponent.css';
const NavbarComponent = () => {
  return (
    <div>
      <Navbar className="NavbarComponent" fixed="top">
        <Navbar.Brand className="mx-5" as={HashLink} to="#home-section">
          My Portfolio
        </Navbar.Brand>
        <Nav className="ms-auto">
          <HashLink
            to="#home-section"
            className="mx-3 nav-link"
            activeClassName="active-link"
          >
            Home
          </HashLink>
          <HashLink
            to="#about-section"
            className="mx-3 nav-link"
            activeClassName="active-link"
          >
            About
          </HashLink>
          <HashLink
            to="#projects-section"
            className="mx-3 nav-link"
            activeClassName="active-link"
          >
            Projects
          </HashLink>
          <HashLink
            to="#contact-section"
            className="mx-3 nav-link"
            activeClassName="active-link"
          >
            Contact Me
          </HashLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
