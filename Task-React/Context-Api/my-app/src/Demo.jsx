import React, { useContext, useState } from 'react'
import {Common } from './Common '
import './demo.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Demo() {
    const { data, add, minus, count } = useContext(Common);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
          {
            data.map((detail,index)=>(
                <>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <Card style={{ width: '20rem' }} key={detail.id}>
                      <Card.Img variant="top" src={detail.thumbnail} className='card-img'/>
                      <Card.Body className='card-body'>
                        <Card.Title>{detail.title}</Card.Title>
                        <Card.Text>
                          <p className='brand'>Brand: {detail.brand}</p>
                          <p className='des'>{detail.description}</p>
                          <h6 className='price'>Price: {detail.price}</h6>
                        </Card.Text>
                        <div className="btns">
                          <ButtonGroup aria-label="Basic example">
                            <Button onClick={()=>add(detail.id)}variant="dark" className='btn'>+</Button>
                            <input type='text' id='card-value' value={count[index]}></input>
                            <Button onClick={()=>minus(detail.id)} variant="dark" className='btn'>-</Button>
                          </ButtonGroup>
                          </div>
                      </Card.Body>
                    </Card>
                  </div>
                
                </>
            ))
        }
            </div>
          </div>
         
        </div>
      </div>
       
    </div>
  )
}

export default Demo