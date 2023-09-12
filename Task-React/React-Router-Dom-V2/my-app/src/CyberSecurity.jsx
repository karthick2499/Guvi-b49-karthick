import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css'

function CyberSecurity() {
  return (
    <div className="container">
    <div className="card-container">
 <div className="card">
 <Row xs={1} md={3} className="g-4">
 <Col>
   <Card >
   <a href="https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/"><Card.Img variant="top" src="./image/CS1.png" />
   </a><Card.Body>
     <Card.Title>Cybersecurity Vs Ethical Hacking: Top 10 Differences</Card.Title>
     <Card.Text>
     Cybersecurity & Ethical hacking and have been key in making sure that your data online
     </Card.Text>
     <a href="https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">27 December 2022  No Comments</Card.Footer>
 </Card>
 </Col>
<Col>
 <Card>
 <a href="https://www.guvi.in/blog/what-is-cybersecurity/"><Card.Img variant="top" src="./image/CS2.png" /></a>
   <Card.Body>
     <Card.Title>What is Cybersecurity? Importance and its uses & the growing challenges in 2023!</Card.Title>
     <Card.Text>
     Look around today, you will witness that we are more reliant on technology and devices
     </Card.Text>
     <a href="https://www.guvi.in/blog/what-is-cybersecurity/"  style={{ textAlign: 'left',color:"green" }}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">20 December 2022  No Comments</Card.Footer>
 </Card>
 </Col>
<Col>
 <Card >
 <a href="https://www.guvi.in/blog/best-ethical-hacking-books/"><Card.Img variant="top" src="./image/CS3.png" /></a>
   <Card.Body>
     <Card.Title>Top 10 Ethical Hacking Books for Beginner to Advanced</Card.Title>
     <Card.Text>
     Did you know that according to the University of Maryland hackers attack every 39 seconds
     </Card.Text>
     <a href="https://www.guvi.in/blog/best-ethical-hacking-books/"  style={{ textAlign: 'left',color:"green" }}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">4 August 2023  No Comments</Card.Footer>
 </Card>
 </Col>
 </Row>
 <Row xs={1} md={3} className="g-4">
   <Col>
 <Card >
 <a href="https://www.guvi.in/blog/types-of-cybersecurity/"><Card.Img variant="top" src="./image/CS4.png" /></a>
   <Card.Body>
     <Card.Title>8 Different Types of Cybersecurity and Threats Involved</Card.Title>
     <Card.Text>
     Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from
     </Card.Text>
     <a href="https://www.guvi.in/blog/types-of-cybersecurity/"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">4 August 2023  No Comments</Card.Footer>
 </Card>
 </Col>
<Col>
 <Card >
 <a href="https://www.guvi.in/blog/coding-for-cybersecurity/" > <Card.Img variant="top" src="./image/CS5.png" /></a>
   <Card.Body>
     <Card.Title>Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?</Card.Title>
     <Card.Text>
     Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,
     </Card.Text>
     <a href="https://www.guvi.in/blog/coding-for-cybersecurity/"  style={{ textAlign: 'left' ,color:"green" }}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">3 August 2023  No Comments</Card.Footer>
 </Card>
 </Col>
 <Col>
 <Card >
 <a href="https://www.guvi.in/blog/cyber-security-attacks-in-real-life/" ><Card.Img variant="top" src="./image/CS6.png" /></a>
   <Card.Body>
     <Card.Title>Top 7 Cyber Security Attacks in Real Life</Card.Title>
     <Card.Text>
     Cyber security attacks are the type of actions that are designed to destroy, steal, modify,
     </Card.Text>
     <a href="https://www.guvi.in/blog/cyber-security-attacks-in-real-life/"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">29 July 2023  No Comments</Card.Footer>
 </Card></Col></Row>
 </div></div></div>
  );
}

export default CyberSecurity