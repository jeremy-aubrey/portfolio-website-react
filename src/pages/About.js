import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Layout from "../components/Layout";
import headshot from "../images/me.jpg";

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <h5 className="display-5 my-5">Hello World...</h5>
        <Row>
          <Col xs={12} md={6}>
            <Image src={headshot} fluid rounded></Image>
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center pt-5 px-4">
            <p className="lead align">
              My name is Jeremy and I'm a software developer in Austin, TX.
              <br />
              <br />
              <br />
              Education:
              <br />
              <strong>BAS Software Development</strong> - Austin Community
              College
              <br />
              (2021 - Current)
              <br />
              <br />
              <strong>AAS Computer Programming</strong> - Austin Community
              College
              <br />
              (2019 - 2021)
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AboutPage;
