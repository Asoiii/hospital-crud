"use client";

import Link from "next/link";
import { Navbar, Nav, Button, Container, Image } from "react-bootstrap";

const NavbarHome = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/">
            <div className="brand">
              <Image
                src="https://img.freepik.com/free-vector/face-mask-logo-template_23-2148690947.jpg?t=st=1734843685~exp=1734847285~hmac=b4a8300fcfb299a5cdc966e6acd7c242d6edfefb8524d36df862b368a0d4b816&w=740"
                alt="MEDArt Logo"
                width={40}
                height={40}
              />
              <span className="brandText">Dev Benari</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Nav.Link href="/" className="navLink">
                Home
              </Nav.Link>
              <Nav.Link href="/" className="navLink">
                About
              </Nav.Link>
              <Nav.Link href="/" className="navLink">
                Contact
              </Nav.Link>
            </Nav>
            <Button className="callButton">
              <i className="bi bi-telephone-fill"> </i>
              <Link href="/auth/login" className="button-link">
                login
              </Link>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHome;
