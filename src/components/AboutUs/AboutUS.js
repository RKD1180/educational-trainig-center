import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import aboutImg from "../../utilitis/img/about.jpg";

const AboutUS = () => {
  return (
    <div>
      <Container className="mt-5">
        <h2 className="text-center fw-bold mt-3 mb-4">About This Website</h2>
        <Row>
          <Card style={{ width: "140rem" }} className="shadow ">
            <Card.Img variant="top" src={aboutImg} height="300px" />
            <Card.Body className="mb-4">
              <Card.Title>Know More?</Card.Title>
              <Card.Text>
                This website is build for practice purpuse. This website is a
                educational webiste. Here we can sell our services. This website
                is build With React js, react bootstrap. Thank you for vist this
                website. This website is build for practice purpuse. This
                website is a educational webiste. Here we can sell our services.
                This website is build With React js, react bootstrap. Thank you
                for vist this website. This website is build for practice
                purpuse. This website is a educational webiste. Here we can sell
                our services. This website is build With React js, react
                bootstrap. Thank you for vist this website. This website is
                build for practice purpuse. This website is a educational
                webiste. Here we can sell our services. This website is build
                With React js, react bootstrap. Thank you for vist this website.
                This website is build for practice purpuse. This website is a
                educational webiste. Here we can sell our services. This website
                is build With React js, react bootstrap. Thank you for vist this
                website. This website is build for practice purpuse. This
                website is a educational webiste. Here we can sell our services.
                This website is build With React js, react bootstrap. Thank you
                for vist this website.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUS;
