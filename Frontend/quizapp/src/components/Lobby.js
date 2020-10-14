import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// This code should recieve one prop, 'playerNickname' which is displayed in the hello message.

function Lobby(props) {

    // Saves having to type 'this.props', instead just 'props'
    const { playerNickname } = props;

    return (
        <div className="Menu">
            <Container className="Menu-container">
                <Container>
                    <h1 className="Menu-title">Waiting For Players</h1>
                    <h4>Use the room code '1234' to join!</h4>
                </Container>

                <Container fluid>
                    <Row className="Menu-row">
                        <Col>
                            <h1>Current Player's</h1>
                        </Col>
                    </Row>
                    <Row className="Menu-row Lobby-list">
                        <Col>
                            <Container className="Lobby-player-container">
                                <h1 className="Lobby-player-text">Alfie</h1>
                            </Container>
                            <Container className="Lobby-player-container">
                                <h1 className="Lobby-player-text">Alfie</h1>
                            </Container>
                            <Container className="Lobby-player-container">
                                <h1 className="Lobby-player-text">Alfie</h1>
                            </Container>
                            <Container className="Lobby-player-container">
                                <h1 className="Lobby-player-text">Alfie</h1>
                            </Container>
                            <Container className="Lobby-player-container">
                                <h1 className="Lobby-player-text">Alfie</h1>
                            </Container>
                            <Container className="Lobby-player-container">
                                <h1 className="Lobby-player-text">Alfie</h1>
                            </Container>
                            <Container className="Lobby-player-container">
                                <h1 className="Lobby-player-text">Alfie</h1>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="Menu-row">
            <Col>
              <Button className="Menu-button" block variant="danger">
                <h1 className="Menu-cancel">
                  x
                </h1>
              </Button>
            </Col>
            <Col>
              <Button className="Menu-button Menu-green-circles" block variant="success">
                <h1 className="Splash-button">
                  Begin!
                </h1>
              </Button>
            </Col>
          </Row>
                </Container>
            </Container>

        </div>
    );
}

export default Lobby;
