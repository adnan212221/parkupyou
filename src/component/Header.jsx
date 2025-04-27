import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../component/Header.scss';
import logo from '../assets/mainimage.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        expand="md"
        style={{ backgroundColor: '#f1c40f' }}
        className="py-2"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
            <img
              src={logo} // Replace with actual logo path
              alt="NeoPark"
              style={{ height: '40px' }}
            />
          </Navbar.Brand>

          {/* Toggler for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible Nav Items */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-semibold">
              <Nav.Link as={Link} to="/" className="fw-bold" onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>Services</Nav.Link>
              <Nav.Link href="#segment" onClick={() => setExpanded(false)}>Segment</Nav.Link>
              <Nav.Link href="#about" onClick={() => setExpanded(false)}>About Us</Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;