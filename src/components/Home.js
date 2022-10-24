import React from "react";
import "./Home.css";
import { useFirestore } from "../firebase/useFirestore";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

function Home() {
  const { items } = useFirestore();

  return (
    <>
      <div>
        {" "}
        {items.map((item) => {
          return (
            <Container>
              <Row >
                <Col sm={3} key={item.id}>
                  <Card>
                    <span>{item.offer}</span>
                    <Card.Img variant="top" src={items.image} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        {" "}
                        <p>{item.old}</p>
                        <p>{item.new}</p>
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    </>
  );
}

export default Home;
