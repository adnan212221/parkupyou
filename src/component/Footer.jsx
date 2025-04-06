import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Envelope, Telephone } from 'react-bootstrap-icons';
import footerlogo from '../assets/footerlogo.png'
import '../component/footer.scss'

const Footer = () => {
  return (
    <div className='footersection'>

<footer>
      {/* Main Footer Section */}
      <div style={{ backgroundColor: '#f1c40f', padding: '2rem 0' }}>
        <Container>
          <Row className="text-center text-md-start">
            {/* About Section */}
            <Col md={4} className="mb-3 mb-md-0 ">
              <img
                src={footerlogo} // Replace with your logo path
                alt="NeoPark Logo"
                style={{ height: '60px' }}
                className="mb-2 bg-dark"
              />
              <p style={{ fontSize: '14px' }}>
                At NeoPark, we revolutionize parking with smart technology, making it easy and secure for individuals and businesses. Our user-friendly app simplifies finding, reserving, and accessing parking spaces, ensuring a seamless experience for all.
              </p>
            </Col>

            {/* Useful Links */}
            <Col md={4} className="mb-3 mb-md-0">
              <h6 className="fw-bold mb-3">Useful Links</h6>
              <ul className="list-unstyled" style={{ lineHeight: '2' }}>
                <li><a href="#services" className="text-dark text-decoration-none">services</a></li>
                <li><a href="#segments" className="text-dark text-decoration-none">segments</a></li>
                <li><a href="#about" className="text-dark text-decoration-none">About</a></li>
              </ul>
            </Col>

            {/* Contact */}
            <Col md={4}>
              <h6 className="fw-bold mb-3">Contact</h6>
              <p className="mb-1"><strong>Mohd Yousuf</strong></p>
              <p className="mb-1"><Telephone className="me-2" />+91 9175097028</p>
              <p><Envelope className="me-2" />shaikhyousuf1998@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#0d0221', color: '#fff', padding: '0.5rem 0', textAlign: 'center' }}>
        <small>Copyright © 2025 - NeoPark. All Rights Reserved.</small>
      </div>
    </footer>

    </div>
  )
}

export default Footer