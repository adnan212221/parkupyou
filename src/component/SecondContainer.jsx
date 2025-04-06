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
      image: second1, // Replace with actual image path
    },
    {
      title: 'Automatic Boom Barrier',
      image: second2,
    },
    {
      title: 'Effortless System Integration',
      image: second3,
    },
  ];
  return (
    // <div className='secondcontainer'>
    //     <div className='headingsection'>
    //         <h1>Discover Our Top Parking <span>Services</span></h1>
    //         <h5>Enjoy effortless parking with NeoPark most popular services.</h5>
    //     </div>

    //     <div>
    //     <Container>
    //   <Row>
    //     <Col>
    //     <Card className="bg-dark text-white">
    //   <Card.Img src={second1} alt="Card image" />
    //   <Card.ImgOverlay>
    //     <Card.Title className='buttoncard'><Button variant="dark">Parking Guidance System</Button></Card.Title>
    //   </Card.ImgOverlay>
    // </Card>
    //     </Col>
    //     <Col className='middlecard'>
    //     <Card className="bg-dark text-white">
    //   <Card.Img src={second2} alt="Card image" />
    //   <Card.ImgOverlay>
    //   <Card.Title className='buttoncard'><Button variant="dark">Automatic Boom Barrier</Button></Card.Title>
    //   </Card.ImgOverlay>
    // </Card>
    //     </Col>
    //     <Col>
    //     <Card className="bg-dark text-white">
    //   <Card.Img src={second3} alt="Card image" />
    //   <Card.ImgOverlay>
    //   <Card.Title className='buttoncard'><Button variant="dark">Effortless System Integration</Button></Card.Title>
    //   </Card.ImgOverlay>
    // </Card>
    //     </Col>
    //   </Row>
    // </Container>
    // <Button className='learnmorebutton' variant="dark">Learn More</Button> 
    //      </div>
    //  </div>

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
                <div className="service-title">{service.title}</div>
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