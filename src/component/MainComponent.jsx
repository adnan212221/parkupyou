import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../component/Maincomponent.scss'
import image1 from '../assets/image1.png'

const MainComponent = () => {
  return (
    <>
 {/* <Container className='main-comp'>
      <Row>
        <Col sm={8}>
        <div className='firstcomponent'>
            <h1 className='mainHeading'>Find, Reserve & Park</h1>
            <h1 className='subheading'>All In One Place</h1>
        </div>
        <div className='secondsubhead'>
            <h4 className='subwelcome'>Welcome to <span>NeoPark</span></h4>
            <p>At NeoPark, we are revolutionizing parking management by seamlessly integrating cutting-edge parking solutions with advanced technology. Our innovative parking management and guidance systems make parking both easy and secure for individuals, businesses, and organizations alike. Through our user-friendly app, you can simplify and streamline your parking experience, making it easier than ever to find, reserve, and access parking spaces. We are committed to providing efficient services that not only simplify parking but also enhance the overall experience for our clients and their customers.</p>
        </div>
        <Button variant="warning">Learn More</Button>
        </Col>
        <Col sm={4}>
        <img className='carimage1' src={image1} alt="image1"/>
        </Col>
      </Row>
    </Container> */}

<div style={{ backgroundColor: '#0d0221', color: '#fff', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Text Column */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 style={{ color: '#f1c40f', fontWeight: 'bold' }}>Find, Reserve & Park</h2>
            <h3 style={{ fontWeight: 'bold' }}>All In One Place</h3>
            <p className="mt-3 fs-5">
              Welcome to <span style={{ color: '#f1c40f', fontWeight: 'bold' }}>NeoPark</span>
            </p>
            <p style={{ lineHeight: '1.8', fontSize: '15px' }}>
              At NeoPark, we are revolutionizing parking management by seamlessly integrating cutting-edge parking solutions with advanced technology. Our innovative parking management and guidance systems make parking both easy and secure for individuals, businesses, and organizations alike.
              <br /><br />
              Through our user-friendly app, you can simplify and streamline your parking experience, making it easier than ever to find, reserve, and access parking spaces. We are committed to providing efficient services that not only simplify parking but also enhance the overall experience for our clients and their customers.
            </p>
            <Button variant="warning" className="mt-3 fw-semibold px-4 py-2">
              Learn More
            </Button>
          </Col>

          {/* Image Column */}
          <Col md={6} className="text-center">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src={image1} // Replace with your actual image path
                alt="Parking Lot"
                className="img-fluid rounded"
                style={{
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                }}
              />
              {/* Add pseudo-stack effect if needed */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '100%',
                height: '100%',
                border: '6px solid #fff',
                borderRadius: '0.375rem',
                zIndex: -1,
              }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default MainComponent