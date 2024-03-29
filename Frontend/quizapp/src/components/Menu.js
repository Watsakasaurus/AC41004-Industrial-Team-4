import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// This code should recieve one prop, 'playerNickname' which is displayed in the hello message.

function Menu(props) {

  // Saves having to type 'this.props', instead just 'props'
  const { playerNickname } = props;

  return (
    <div className="Menu">
      <Container className="Menu-container">
        <Container>
          <h1 className="Menu-title">Hello <span role="img" aria-label="Waving hand emoji">👋</span><br />{playerNickname}</h1>
        </Container>

        <Container fluid>
          <Row className="Menu-row">
            <Col>
              <Button className="Menu-button Menu-green-circles" block variant="success" onClick = {() => props.onClick(1)}>
                <Row>
                  <Col sm={8}>
                    <div className="Menu-button-text">
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
              <Button className="Menu-button Menu-blue-circles" block onClick = {() => props.onClick(2)}>
                <Row>
                  <Col sm={8}>  
                    <div className="Menu-button-text">
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
            {/* <Col>
              <Button className="Menu-button" block variant="warning" onClick = {() => props.onClick(3)}>
                <h1 className="Menu-cancel">
                  o
                </h1>
              </Button>
            </Col> */}
            <Col>
              <Button className="Menu-button" block variant="danger" onClick = {() => props.onClick(4)}>
                <h1 className="Menu-cancel">
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
