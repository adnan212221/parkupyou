import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import formimg from '../assets/formimg.png';
import '../component/Contactform.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe9jruAwtlKOcPxpb00z7rVU9BP1V_X1NPwY_6Q923o_QgP3g/formResponse";

    const formBody = new FormData();
    formBody.append('entry.1923783504', formData.name);   // Name field
    formBody.append('entry.511648640', formData.mobile);   // Mobile Number field
    formBody.append('entry.1509634895', formData.email);   // Email field
    formBody.append('entry.1128434652', formData.message); // Message field

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formBody
    })
    .then(() => {
      alert('Form submitted successfully!');
      setFormData({ name: '', mobile: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error!', error.message);
    });
  };

  return (
    <section className="contact-section" id='contact'>
      <Container>
        <h2>
          We're Here to Help You <span className="highlight">Park Smarter</span>
        </h2>
        <div className="contact-box">
          <Row className="align-items-center gx-4 gy-4">
            <Col md={7}>
              <div className="form-card">
                <h4>Contact Us</h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Control 
                    type="text" 
                    name="name"
                    placeholder="Enter Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required
                  />
                  <Form.Control 
                    type="text" 
                    name="mobile"
                    placeholder="Enter Mobile Number" 
                    value={formData.mobile} 
                    onChange={handleChange} 
                    required
                  />
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Enter Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                  />
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    name="message"
                    placeholder="Enter Your Message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  />
                  <Button type="submit" className="submit-btn mt-3">Submit</Button>
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
  );
};

export default ContactForm;
