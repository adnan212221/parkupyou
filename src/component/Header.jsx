import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import '../component/Header.scss'
import logo from '../assets/mainimage.png'

const Header = () => {
  return (
    <>
      {/* <Navbar className="bg-body-tertiary headerclass">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#segment">Segment</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   */}

<Navbar expand="md" style={{ backgroundColor: '#f1c40f' }} className="py-2">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
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
            <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#segment">Segment</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header