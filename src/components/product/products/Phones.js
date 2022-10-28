import React from "react";
import "./Phones.css";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import {db} from '../../../firebase/config'
import { collection } from "firebase/firestore";
import {getDocs} from 'firebase/firestore'

function Home() {
  const  [phones,setPhones]= useState([]);
  const phonesCollectionRef= collection(db, 'phones');

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
                <Col sm={2} key={phone.id} >
                  <Card>
                    <span>{phone.offer}</span>
                    <Card.Img variant="top" src={phone.image} />
                    <Card.Body>
                      <Card.Title>{phone.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                      
                        <p>{phone.old}</p>
                        <p>{phone.new}</p>
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          );
         })};
    </>
  );
}

export default Home;
