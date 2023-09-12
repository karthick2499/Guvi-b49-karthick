import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css'

function All() {
  return (
    <div className="container">
       <div className="card-container">
    <div className="card">
    <Row xs={1} md={3} className="g-4">
    <Col>
      <Card className='card' >
      <Card.Img variant="top" src="./image/all1.png" />
      <Card.Body>
        <Card.Title>Top 10 Best Automation Testing Tools in 2023</Card.Title>
        <Card.Text>
        Automation testing tools have really become a great and important factor in building efficient web
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">17 August 2023  No Comments</Card.Footer>
    </Card>
    </Col>
<Col>
    <Card>
      <Card.Img variant="top" src="./image/all2.png" />
      <Card.Body>
        <Card.Title>Top Skills Required to Become a Digital Marketer</Card.Title>
        <Card.Text>
        Digital marketing is one of the most dynamic industries that has transformed how businesses connect
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left',color:"green" }}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">16 August 2023  No Comments</Card.Footer>
    </Card>
    </Col>
<Col>
    <Card >
      <Card.Img variant="top" src="./image/all3.png" />
      <Card.Body>
        <Card.Title>Career Opportunities in Digital Marketing | Digital Marketing Career</Card.Title>
        <Card.Text>
        As we move forward in today’s digital age, the need for businesses to engage with
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left',color:"green" }}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">17 August 2023  No Comments</Card.Footer>
    </Card>
    </Col>
    </Row>
    <Row xs={1} md={3} className="g-4">
      <Col>
    <Card >
      <Card.Img variant="top" src="./image/all1.png" />
      <Card.Body>
        <Card.Title>UI/UX Project Showcase: UX-perience Elevated</Card.Title>
        <Card.Text>
        Are you a professional UI/UX designer who finds it hard to attract your clients or
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">14 August 2023  No Comments</Card.Footer>
    </Card>
    </Col>
<Col>
    <Card >
      <Card.Img variant="top" src="./image/all2.png" />
      <Card.Body>
        <Card.Title>10 Best Data Science Online Courses for Beginners | 2023</Card.Title>
        <Card.Text>
        In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left' ,color:"green" }}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">17 August 2023  No Comments</Card.Footer>
    </Card>
    </Col>
    <Col>
    <Card >
      <Card.Img variant="top" src="./image/all3.png" />
      <Card.Body>
        <Card.Title>How to Become a UI/UX Designer: 10 Steps to Master the Craft</Card.Title>
        <Card.Text>
        Have you ever wondered what it takes to create captivating designs that leave users delighted
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">11 August 2023  No Comments</Card.Footer>
    </Card></Col></Row>
    </div></div></div>
    
  );
}

export default All