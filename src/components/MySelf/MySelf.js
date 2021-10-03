import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import myself from "../../utilitis/img/myself.png";

const MySelf = () => {
  return (
    <div>
      <Container className="mt-5">
        <h2 className="text-center fw-bold mt-3 mb-4">About Me</h2>
        <Row>
          <Card style={{ width: "140rem" }} className="shadow ">
            <Card.Img variant="top" src={myself} height="300px" />
            <Card.Body className="mb-4">
              <Card.Title>My Self</Card.Title>
              <Card.Text>
                My name is Raton Kumar Das. I am from Bangladesh,Dhaka,Rajshahi.
                I am a website Designer and Developer. I know
                Html,Css,Js,React,Django,Wordpress. I complete my Bsc in Cse
                from Varendra Universite. I am also a freelacer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default MySelf;
