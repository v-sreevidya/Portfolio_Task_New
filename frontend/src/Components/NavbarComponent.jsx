import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom"; 
import { useAuth } from "../Pages/Authentication";
import './NavbarComponent.css';

const NavbarComponent = () => {
  const isOnHomepage = window.location.pathname === "/";
  const { isAuthenticated } = useAuth();

  const handleAdminLinkClick = (e) => {
    e.preventDefault();
    
    const isAuth = localStorage.getItem("isAuthenticated") === "true";
   
    const url = isAuth ? "/admin/dashboard" : "/admin";
    
    window.open(url, "_blank");
  };

  return (
    <div>
      <Navbar className="NavbarComponent" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand className="mx-5" as={HashLink} to="#home-section">
            SREEVIDYA V
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
                to="#skills-section"
                className="mx-3 nav-link"
                activeClassName="active-link"
              >
                Skills
              </HashLink>
              {isOnHomepage ? (
                <HashLink
                  to="/#projects-section"
                  className="mx-3 nav-link"
                  activeClassName="active-link"
                >
                  Projects
                </HashLink>
              ) : (
                <Link to="/#projects-section" className="mx-3 nav-link">
                  Projects
                </Link>
              )}
              <HashLink
                to="#contact-section"
                className="mx-3 nav-link"
                activeClassName="active-link"
              >
                Contact Me
              </HashLink>
              <a
                href="/admin"
                rel="noopener noreferrer"
                className="mx-3 nav-link"
                onClick={handleAdminLinkClick}
              >
                Admin
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
