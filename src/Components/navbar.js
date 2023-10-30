import React from "react";
import "./style.css";
import { Navbar as Navigation, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Navigation bg="light" expand="lg" fixed="top">
      <div className="container-fluid mx-4">
        <Navigation.Brand href="https://infotech.umm.ac.id/">
          <img src="/img/logo-ilab.png" alt="logo-ilab" draggable="false" />
        </Navigation.Brand>
        <Navigation.Toggle aria-controls="navbarSupportedContent" />
        <Navigation.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto nav-item">
            <Link className="nav-link fw-medium" to="/" aria-current="page">
              HOME
            </Link>
            <Link className="nav-link fw-medium" to="/about">
              ABOUT US
            </Link>
            <Link className="nav-link fw-medium" to="/contact">
              CONTACT
            </Link>
          </Nav>
          <Nav className="gap-2 custom-btn">
            <Button className="custom-signup" variant="outline-dark">
              SIGN UP
            </Button>
            <Button className="custom-login" variant="light">
              LOG IN
            </Button>
          </Nav>
        </Navigation.Collapse>
      </div>
    </Navigation>
  );
};

export default Navbar;
