import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="text-light mt-4 ms-3">
          Jeremy Aubrey
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mt-4 me-3">
            <Nav.Link href="/about" className="text-light">
              About
            </Nav.Link>
            <Nav.Link href="/projects" className="text-light">
              Projects
            </Nav.Link>
            <Nav.Link href="/tools" className="text-light">
              Tools
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
