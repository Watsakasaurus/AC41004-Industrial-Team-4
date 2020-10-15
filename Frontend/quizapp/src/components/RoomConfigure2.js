import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import RubberSlider from '@shwilliam/react-rubber-slider';
import '@shwilliam/react-rubber-slider/dist/styles.css';

class RoomConfigure2 extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            roomName: '',
            roomPass: '',
            playerCount: '8'
        };

        this.updateRoomName = this.updateRoomName.bind(this);
        this.updateRoomPass = this.updateRoomPass.bind(this);
        this.updatePlayerCount = this.updatePlayerCount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This will update the room name state
    updateRoomName(event) {
        this.setState({ roomName: event.target.value });
    }

    // This will update the room name state
    updateRoomPass(event) {
        this.setState({ roomPass: event.target.value });
    }

    // This will update the room name state
    updatePlayerCount(value) {
        this.setState({ playerCount: value });
    }

    // When the button to submit the form is pressed, pass the form input as a prop up to parent via the passed down function
    handleSubmit(event) {
        event.preventDefault() // Prevent default prevents the page refreshing
    }

    render() {
        return (
            <div className="Menu">

                <Container className="Menu-container">

                    <Container>
                        <h1 className="Menu-title">Configure Room</h1>
                    </Container>
                    <form id="nickname-form" onSubmit={this.handleSubmit}>
                        <Container className="Room-code-input-con">
                            <div className="Room-prop">
                                <h4>Room Name</h4>
                                <Form.Control size="lg" type="text" placeholder="TheBestRoom" className="Nickname-inputbox" maxLength="24" value={this.state.roomName} onChange={this.updateRoomName} />
                            </div>
                            <div className="Room-prop">
                                <h4>Room Password</h4>
                                <Form.Control size="lg" type="pass" placeholder="qwerty(dont use this example)" className="Nickname-inputbox" maxLength="24" value={this.state.roomPass} onChange={this.updateRoomPass} />
                            </div>
                            <div className="Room-prop">
                                <h4>Player Count</h4>
                                <RubberSlider width={250} />
                            </div>
                            
                        </Container>

                        <Container className="Menu-container">
                            <Row className="Menu-row">
                                <Col>
                                    <Button className="Menu-button" block variant="danger" onClick={() => this.props.onClick(2)}>
                                        <h1 className="Menu-cancel">
                                            x
                                    </h1>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button className="Menu-button Menu-green-circles" form="nickname-form" type="submit" block variant="success" onClick={() => this.props.onClick(1)}>
                                        <h1 className="Splash-button">
                                            Join!
                                        </h1>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </form>
                </Container>
            </div>
        );

    }
}

export default RoomConfigure2;