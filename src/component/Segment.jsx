import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../component/Segment.scss'
import segment1 from '../assets/segment1.png'

const Segment = () => {
  const segments = [
    {
      id: 1,
      title: 'Shopping Malls',
      content:
        'NeoPark enhances the shopping experience with seamless parking solutions, including a loyalty program, real-time availability updates, and app-based payments. Our AI-driven technology helps malls manage foot traffic, optimize parking spaces, and reduce congestion, ensuring a smoother and more convenient visit for customers.',
      image: segment1,
    },
    {
      id: 2,
      title: 'Airports',
      content:
        'NeoPark streamlines airport parking with smart solutions like pre-booking, contactless entry through license plate recognition (LPR), and valet services. Our AI-powered technology predicts peak hours, optimizes space allocation, and integrates EV charging, ensuring smooth access and fast, hassle-free experience for travelers.',
        image: segment1,
      },
    {
      id: 3,
      title: 'Plotted Area Parking',
      content:
        'NeoPark simplifies parking in plotted areas with smart management solutions, including digital reservations, automation, and real-time space updates. Our AI-driven system optimizes space usage, enhances security, and supports dynamic pricing—ensuring a seamless and organized parking experience for residents and visitors.',
        image: segment1,
    },
  ];
  return (
    // <div className='segmentdiv'>
    //     <div className='segmenttext'>
    //         <h2>Segments</h2>
    //         <h5>Customized Parking Solutions for Every Spacewith NeoPark</h5>
    //     </div>
    //     <div>
    //     <Container>
    //   <Row>
    //     <Col>
    //     <Card className='cardsegment' style={{ width: '30rem' }}>
    //   <Card.Body className='cardbodysegment'>
    //     <Card.Title>1. Shopping Malls</Card.Title>
    //     {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    //     <Card.Text>
    //     NeoPark enhances the shopping experience with seamless parking solutions, including a loyalty program, real-time availability updates, and app-based payments. Our AI-driven technology helps malls manage foot traffic, optimize parking spaces, and reduce congestion, ensuring a smoother and more convenient visit for customers.
    //     </Card.Text>
    //     {/* <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link> */}
    //   </Card.Body>
    // </Card>
    //     </Col>
    //     <Col>
    //     <Card className='cardsegment1' style={{ width: '30rem' }}>
    //     <Card.Img src={segment1} alt="Card image" />
    //   <Card.ImgOverlay>
    //   </Card.ImgOverlay>
    // </Card>
    // {/* </Card> */}
    //     </Col>
    //   </Row>
    //   </Container>
    //   <Container>
    //   <Row>
    //     <Col>
    //     <Card className='cardsegment1' style={{ width: '30rem' }}>
    //     <Card.Img src={segment1} alt="Card image" />
    //   <Card.ImgOverlay>
    //   </Card.ImgOverlay>
    // </Card>
    // {/* </Card> */}
    //     </Col>

    //     <Col>
    //     <Card className='cardsegment' style={{ width: '30rem' }}>
    //   <Card.Body className='cardbodysegment'>
    //     <Card.Title>1. Shopping Malls</Card.Title>
    //     {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    //     <Card.Text>
    //     NeoPark enhances the shopping experience with seamless parking solutions, including a loyalty program, real-time availability updates, and app-based payments. Our AI-driven technology helps malls manage foot traffic, optimize parking spaces, and reduce congestion, ensuring a smoother and more convenient visit for customers.
    //     </Card.Text>
    //     {/* <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link> */}
    //   </Card.Body>
    // </Card>
    //     </Col>
    //   </Row>
    //   </Container>
    //   <Container>
    //   <Row>
    //     <Col>
    //     <Card className='cardsegment' style={{ width: '30rem' }}>
    //   <Card.Body className='cardbodysegment'>
    //     <Card.Title>1. Shopping Malls</Card.Title>
    //     {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    //     <Card.Text>
    //     NeoPark enhances the shopping experience with seamless parking solutions, including a loyalty program, real-time availability updates, and app-based payments. Our AI-driven technology helps malls manage foot traffic, optimize parking spaces, and reduce congestion, ensuring a smoother and more convenient visit for customers.
    //     </Card.Text>
    //     {/* <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link> */}
    //   </Card.Body>
    // </Card>
    //     </Col>
    //     <Col>
    //     <Card className='cardsegment1' style={{ width: '30rem' }}>
    //     <Card.Img src={segment1} alt="Card image" />
    //   <Card.ImgOverlay>
    //   </Card.ImgOverlay>
    // </Card>
    // {/* </Card> */}
    //     </Col>
    //   </Row>
    //   </Container>
    //     </div>
    // </div>

    <div className="segments-section">
      <Container>
        <h2 className="text-center section-title">Segments</h2>
        <p className="text-center section-subtitle">
          Customized Parking Solutions for Every Space with NeoPark
        </p>

        {segments.map((seg, idx) => (
          <Row className="segment-row" key={seg.id}>
            <Col
              md={6}
              className={`d-flex ${idx % 2 === 1 ? 'order-md-2' : ''}`}
            >
              <div className="segment-card text-card">
                <h5>
                  <strong>{seg.id}. {seg.title}</strong>
                </h5>
                <p>{seg.content}</p>
              </div>
            </Col>

            <Col
              md={6}
              className={`d-flex ${idx % 2 === 1 ? 'order-md-1' : ''}`}
            >
              <div className="segment-card image-card">
                <img src={seg.image} alt={seg.title} />
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default Segment