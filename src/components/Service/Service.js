import React from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

const watch = <FontAwesomeIcon icon={faStopwatch} />;

const Service = (props) => {
  const { courseName, title, price, duration, img } = props.service;
  return (
    <Card style={{ width: "20rem" }} className="me-4 ms-4 shadow">
      <Card.Img variant="top" src={img} height="200px" />
      <Card.Body>
        <Card.Title>{courseName}</Card.Title>
        <Card.Text>{title}</Card.Text>
        <div className="d-flex ">
          <Col>
            <Alert
              variant="primary"
              className="me-2 ms-2 mt-3"
              height="40px"
              style={{ padding: "0" }}
            >
              <p className="mb-0">Fee: {price} $</p>
            </Alert>
          </Col>
          <Col>
            <Alert
              variant="danger"
              className="me-2 ms-2 mt-3 "
              height="40px"
              style={{ padding: "0" }}
            >
              <p className="mb-0">
                {watch} {duration}
              </p>
            </Alert>
          </Col>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Service;
