import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Menu() {
  return (
    <div className="Menu">
      <Container className="Menu-container">
        <Container>
          <h1 class="Menu-title">Hello <span role="img" aria-label="Waving hand emoji">👋</span><br />Alfie1234</h1>
        </Container>

        <Container fluid>
          <Row className="Menu-row">
            <Col>
              <Button className="Menu-button Menu-green-circles" block variant="success">
                <Row>
                  <Col sm={8}>
                    <div class="Menu-button-text">
                      Create <br />New Room
                    </div>
                  </Col>
                  <Col sm={4}>
                  </Col>
                </Row>
              </Button>
            </Col>
          </Row>
          <Row className="Menu-row">
            <Col>
              <Button className="Menu-button Menu-blue-circles" block>
                <Row>
                  <Col sm={8}>
                    <div class="Menu-button-text">
                      Join Via <br />Room Code
                    </div>
                  </Col>
                  <Col sm={4}>
                  </Col>
                </Row>
              </Button>
            </Col>
          </Row>
          <Row className="Menu-row">
            <Col>
              <Button className="Menu-button" block variant="warning">
                <h1 class="Menu-cancel">
                  o
                </h1>
              </Button>
            </Col>
            <Col>
              <Button className="Menu-button" block variant="danger">
                <h1 class="Menu-cancel">
                  x
                </h1>
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>

    </div>
  );
}

export default Menu;
