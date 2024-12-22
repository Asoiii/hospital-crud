"use client";

import { logout } from "@/lib/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar, Nav, Button, Container, Image } from "react-bootstrap";

const NavbarPatiens = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);
  }, []);

  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/patients">
            <div className="brand">
              <Image
                src="https://img.freepik.com/free-vector/face-mask-logo-template_23-2148690947.jpg?t=st=1734843685~exp=1734847285~hmac=b4a8300fcfb299a5cdc966e6acd7c242d6edfefb8524d36df862b368a0d4b816&w=740"
                alt="MEDArt Logo"
                width={40}
                height={40}
              />
              <span className="brandText">Manajemen Data Pasien</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Nav.Link href="/patients/create" className="navLink">
                Tambah Pasien
              </Nav.Link>
              <Nav.Link href="/patients/create" className="navLink">
                Contact
              </Nav.Link>
            </Nav>

            {username ? (
              <>
                {" "}
                <span>
                  Welcome {username}
                  {""}
                </span>
                <Button className="logout" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <a href="/auth/login">Login</a>
            )}

            {/* <Button className="callButton">
              <i className="bi bi-telephone-fill"> </i>
              <Link href="/" className="button-link">
                Logout
              </Link>
            </Button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPatiens;
