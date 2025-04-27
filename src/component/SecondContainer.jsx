import React from 'react'
import Card from 'react-bootstrap/Card';
import '../component/Secondcontainer.scss'
import image1 from '../assets/image1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import second1 from '../assets/second1.png'
import second2 from '../assets/second2.png'
import second3 from '../assets/second4.png'


const SecondContainer = () => {
  const services = [
    {
      title: 'Parking Guidance System',
      title2: '( Coming Soon ! )',
      image: second1, // Replace with actual image path
    },
    {
      title: 'Automatic Boom Barrier',
      title2: '( Coming Soon ! )',
      image: second2,
    },
    {
      title: 'Effortless System Integration with app',
      title2: '',
      image: second3,
    },
  ];
  return (

    <div className="services-section">
      <Container>
        <h2 className="title text-center">
          Discover Our Top Parking <span className="highlight">Services</span>
        </h2>
        <p className="subtitle text-center">
          Enjoy effortless parking with NeoPark most popular services.
        </p>

        <Row className="mt-4 justify-content-center g-4">
          {services.map((service, index) => (
            <Col key={index} md={4} sm={6} xs={12}>
              <div className="service-card">
                <img src={service.image} alt={service.title} className="service-img" />
                <div className="service-title">{service.title} <p className='comingsoon'>{service.title2}</p></div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="warning" className="cta-btn">
            Learn More
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default SecondContainer