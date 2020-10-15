import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Lobby extends Component {

    constructor(props) {
        super(props);

        // This obviously will need to be passed down from app.js in the real thing
        this.state = {
            room_code: 1234,
            players: ['Alfie', 'Callum', 'Sophie', 'Andrew', 'Peter', 'Arran', 'Nicole', 'Callum', 'Ross', 'Aylin'],
        }
    }

    render() {
        return (
            <div className="Menu">
                <Container className="Menu-container">
                    <Container>
                        <h1 className="Menu-title">Waiting For Players</h1>
                        <h4>Friend's can use code '{this.state.room_code}' to join this room!</h4>
                    </Container>

                    <Container fluid>
                        <Row className="Menu-row">
                            <Col>
                                <h1>Current Player's</h1>
                            </Col>
                        </Row>
                        <Row className="Menu-row Lobby-list">
                            <Col>
                                {this.state.players.map(item => (
                                    <Container className="Lobby-player-container">
                                        <h1 className="Lobby-player-text" key={item}>{item}</h1>
                                    </Container>
                                ))}
                            </Col>
                        </Row>
                        <Row className="Menu-row">
                            <Col>
                                <Button className="Menu-button" block variant="danger" onClick = {()=> this.props.onClick(2)}>
                                    <h1 className="Menu-cancel">
                                        x
                                    </h1>
                                </Button>
                            </Col>
                            <Col>
                                <Button className="Menu-button Menu-green-circles" block variant="success" onClick = {()=> this.props.onClick(1)}>
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
}

export default Lobby;
