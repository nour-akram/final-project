import React from "react";
// import "./Phones.css";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import {db} from '../firebase/config'
import { collection } from "firebase/firestore";
import {getDocs} from 'firebase/firestore'

function Phones() {
  const  [phones,setPhones]= useState([]);
  const phonesCollectionRef= collection(db, 'home');

  useEffect(() => {
    const getPhone =async() =>{
    const data = await getDocs (phonesCollectionRef) ;
     console.log (data);
     setPhones(data.docs.map(doc =>({...doc.data(),id: doc.id})));
    };
    getPhone();
  },)

  return (
    <>
         {phones.map(phone => {
          return (
            <Container>
              <Row  >
                <Col  lg={2}  key={phone.id} >
                  <Card>
                  <h2>{phone.discount}</h2>
                    <Card.Img variant="top" src={phone.imageurl} />
                    <Card.Body>
                    <p> Brand :{phone.brand}</p>
                      <Card.Title>{phone.description}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                      <h1>EGP {phone.price}</h1>
                      <h1> <del> {phone.old}</del></h1>
                     
                        <p>({phone.rating})</p>
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          )
         })}
    </>
  )
}

export default Phones;
