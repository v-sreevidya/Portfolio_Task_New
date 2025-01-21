import React from "react";
import "./NavbarComponent.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar className="NavbarComponent">
        <Navbar.Brand className="mx-5" as={Link} to="/">
          My Portfolio
        </Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink
            to="/"
            exact
            className="mx-3 nav-link"
            activeClassName="active-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="mx-3 nav-link"
            activeClassName="active-link"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="mx-3 nav-link"
            activeClassName="active-link"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="mx-3 nav-link"
            activeClassName="active-link"
          >
            Contact Me
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
