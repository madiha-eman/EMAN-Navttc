import React, { useState } from "react";
import { Button, ListGroup, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import '../style.css'

function Add() {
 const [name,setName]=useState('')
 const [email,setEmail]=useState('')
 const [pwd,setPwd]=useState('')
 const history = useHistory();

const handleSubmit=(e)=>{
  e.preventDefault();
  let user = {name, email, pwd}
  console.log(user)
      axios.post('http://localhost:4000/api/users/add', user)
      .then(res => {
        console.log(res.data)
        history.push('/login');
      })
      .catch(err=>console.log(err,'error'));


}
  return (

    <form onSubmit={handleSubmit}>
      <Row className="mt-5" >
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <ListGroup>
            <ListGroup.Item  className="col-headers">
              Register New User
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              <Row>
                <Col>
                  <input type="text" name='name' placeholder='Name' onChange={(e)=>setName(e.target.value)} required />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="text" name='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="password" name='pwd' placeholder='Password' onChange={(e)=>setPwd(e.target.value)} required/>
                </Col>
              </Row>
              <Row className="my-2">
                <Col className="text-center">
                  <Button type='submit' className='color-btn' size="md">
                    Register User
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
      </Row>
    </form>
  );
}

export default Add;
