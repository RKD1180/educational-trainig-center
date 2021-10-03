import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./Home.css";
import img from "../../utilitis/img/girl.png";
import Course from "../Course/Course";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./home.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {/* Hero Section  */}
      <Container fluid>
        <Row>
          <Col className="hero bg-primary">
            <h2 className="text-center mt-5">Welcome Progremmers Point</h2>
            <InputGroup className="mb-3 w-50 mx-auto mt-5" size="lg">
              <FormControl
                placeholder="Search Your Cource"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      {/* DisCription */}
      <Container className="mt-4">
        <Row>
          <Col className="little-dis shadow rounded mt-3 me-4 p-4 ms-4">
            <div className="icon mt-2 ">
              <img src={img} height="120px" width="120px" alt="" />
            </div>
            <div className="discrp-">
              <h4 className="justify mt-3">
                Take computer science courses with personalized support
              </h4>
            </div>
          </Col>
          <Col className="little-dis shadow rounded mt-3 me-4 p-4 ms-4">
            <div className="icon mt-2 ">
              <img src={img} height="120px" width="120px" alt="" />
            </div>
            <div className="discrp-">
              <h4 className="justify mt-3">
                Build cool projects to showcase your skills
              </h4>
            </div>
          </Col>
          <Col className="little-dis shadow rounded mt-3 me-4 p-4 ms-4">
            <div className="icon mt-2 ">
              <img src={img} height="120px" width="120px" alt="" />
            </div>
            <div className="discrp-">
              <h4 className="justify mt-3">
                Earn certificates recognized by Industry
              </h4>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Show Course Course  */}
      <Container>
        <h2 className="text-center mt-5 mb-5">Our Course</h2>
        <Row xs={1} md={3} lg={2} className="g-4">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
