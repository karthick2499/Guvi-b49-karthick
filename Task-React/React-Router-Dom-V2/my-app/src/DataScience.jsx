import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css'

function DataScience() {
  return (
    <div className="container">
    <div className="card-container">
 <div className="card">
 <Row xs={1} md={3} className="g-4">
 <Col>
   <Card >
   <a href="https://www.guvi.in/blog/best-data-science-courses-for-beginners/"> <Card.Img variant="top" src="./image/DS1.png" /></a>
   <Card.Body>
     <Card.Title>10 Best Data Science Online Courses for Beginners | 2023</Card.Title>
     <Card.Text>
     In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most
     </Card.Text>
     <a href="https://www.guvi.in/blog/best-data-science-courses-for-beginners/"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">14 August 2023  No Comments</Card.Footer>
 </Card>
 </Col>
<Col>
 <Card>
 <a href="https://www.guvi.in/blog/data-science-webinars-and-workshops/"><Card.Img variant="top" src="./image/DS2.png" /></a>
   <Card.Body>
     <Card.Title>Data Science Webinars and Workshops</Card.Title>
     <Card.Text>
     In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data
     </Card.Text>
     <a href="https://www.guvi.in/blog/data-science-webinars-and-workshops/"  style={{ textAlign: 'left',color:"green" }}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">9 August 2023  No Comments</Card.Footer>
 </Card>
 </Col>
<Col>
 <Card >
 <a href="https://www.guvi.in/blog/10-best-data-science-frameworks/" ><Card.Img variant="top" src="./image/DS3.png" />
 </a> <Card.Body>
     <Card.Title>10 Best Data Science Frameworks in 2023</Card.Title>
     <Card.Text>
     Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.
     </Card.Text>
     <a href="https://www.guvi.in/blog/10-best-data-science-frameworks/"  style={{ textAlign: 'left',color:"green" }}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">5 August 2023  No Comments</Card.Footer>
 </Card>
 </Col>
 </Row>
 <Row xs={1} md={3} className="g-4">
   <Col>
 <Card >
 <a href="https://www.guvi.in/blog/top-7-must-watch-data-science-youtube-channels/"><Card.Img variant="top" src="./image/DS4.png" /></a>
   <Card.Body>
     <Card.Title>7 Must-Watch Data Science Focused YouTube Channels for Effective Learning</Card.Title>
     <Card.Text>
     ‍Data science has become one of the most sought-after skills in the current job market.
     </Card.Text>
     <a href="https://www.guvi.in/blog/top-7-must-watch-data-science-youtube-channels/"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">5 August 2023  No Commentss</Card.Footer>
 </Card>
 </Col>
<Col>
 <Card >
 <a href="https://www.guvi.in/blog/everything-about-data-scientist-salary-in-india/"> <Card.Img variant="top" src="./image/DS5.png" /></a>
   <Card.Body>
     <Card.Title>Everything about Data Scientist Salary in India | 2023</Card.Title>
     <Card.Text>
     Are you curious about the highly sought-after field of data science and the potential it
     </Card.Text>
     <a href="https://www.guvi.in/blog/everything-about-data-scientist-salary-in-india/"  style={{ textAlign: 'left' ,color:"green" }}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">5 August 2023  No Comments</Card.Footer>
 </Card>
 </Col>
 <Col>
 <Card >
 <a href="https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/" ><Card.Img variant="top" src="./image/DS6.png" /></a>
   <Card.Body>
     <Card.Title>How Long Would It Take to Learn Data Science?</Card.Title>
     <Card.Text>
     Have you ever wondered how much time it takes to learn data science? It’s an
     </Card.Text>
     <a href="https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">29 July 2023  No Comments</Card.Footer>
 </Card></Col></Row>
 </div></div></div>
  );
}

export default DataScience