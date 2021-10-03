import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="">
        <Container>
          <Navbar.Brand href="/home">ProgrammersPoint</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto item ">
              <Link to="/home">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/aboutus">About Us</Link>
              <Link to="/myself">My Self</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
