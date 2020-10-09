import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import Logo from '../assets/logo.png';


function Splash(props) {

  return (
    <div className="Splash">
      <Container className="Menu-container">
        <Row>
          <Col xs={1} className="Splash-logo-container">
            <Image className="Splash-logo" src={Logo}></Image>
          </Col>
          <Col xs={true}>
            <Row>
              <h1 className="Menu-title">Quizzy</h1>
            </Row>
            <Row>
              <h3>The Ultimate Quiz App!</h3>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="fixed-bottom Splash-low-container">
        <Button className="Menu-button Menu-blue-circles" block onClick={() => props.onClick()}>
          <Row>
            <Col sm={8}>
              <div className="Menu-button-text">
                Begin!
              </div>
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
        </Button>
      </Container>
    </div>
  );
}

export default Splash;
