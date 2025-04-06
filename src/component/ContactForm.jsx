import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import formimg from '../assets/formimg.png'
import '../component/Contactform.scss'

const ContactForm = () => {
  return (
    // <div className='contactformdiv'>
    //     <div className='parksmarter'>
    //         <h2>We're Here to Help You <span>Park Smarter</span></h2>
    //     </div>

    //     <div style={{ backgroundColor: '#0d0221', minHeight: '100vh', padding: '2rem' }}>
    //   <Container className="d-flex justify-content-center align-items-center">
    //     <Row className="w-100" style={{ maxWidth: '900px' }}>
    //       {/* Form Section */}
    //       <Col md={6} style={{ backgroundColor: '#f1c40f', borderRadius: '10px', padding: '2rem' }}>
    //         <h3 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Contact Us</h3>
    //         <Form>
    //           <Form.Group controlId="formName" className="mb-3">
    //             <Form.Control type="text" placeholder="Enter Name" className="bg-dark text-white border-0" />
    //           </Form.Group>

    //           <Form.Group controlId="formMobile" className="mb-3">
    //             <Form.Control type="text" placeholder="Enter Mobile Number" className="bg-dark text-white border-0" />
    //           </Form.Group>

    //           <Form.Group controlId="formEmail" className="mb-3">
    //             <Form.Control type="email" placeholder="Enter Email" className="bg-dark text-white border-0" />
    //           </Form.Group>

    //           <Form.Group controlId="formMessage" className="mb-3">
    //             <Form.Control as="textarea" rows={4} placeholder="Enter Your Message" className="bg-dark text-white border-0" />
    //           </Form.Group>

    //           <div className="text-center">
    //             <Button variant="dark" style={{ borderRadius: '20px', padding: '0.5rem 2rem', fontWeight: 'bold' }}>
    //               Submit
    //             </Button>
    //           </div>
    //         </Form>
    //       </Col>

    //       {/* Image Section */}
    //       <Col md={6} className="d-flex align-items-center justify-content-center mt-4 mt-md-0">
    //         <img
    //           src={formimg} // Replace with actual image path
    //           alt="Contact Support"
    //           className="img-fluid rounded"
    //           style={{ maxHeight: '450px' }}
    //         />
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    // </div>

    <section className="contact-section">
      <Container>
        <h2>
          We're Here to Help You <span className="highlight">Park Smarter</span>
        </h2>
        <div className="contact-box">
          <Row className="align-items-center gx-4 gy-4">
            <Col md={7}>
              <div className="form-card">
                <h4>Contact Us</h4>
                <Form>
                  <Form.Control type="text" placeholder="Enter Name" />
                  <Form.Control type="text" placeholder="Enter Mobile Number" />
                  <Form.Control type="email" placeholder="Enter Email" />
                  <Form.Control as="textarea" rows={4} placeholder="Enter Your Message" />
                  <Button className="submit-btn mt-3">Submit</Button>
                </Form>
              </div>
            </Col>
            <Col md={5}>
              <div className="image-wrapper">
                <img src={formimg} alt="Contact" className="contact-img" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default ContactForm