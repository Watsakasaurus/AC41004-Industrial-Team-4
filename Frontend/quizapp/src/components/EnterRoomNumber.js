import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'

class EnterRoomNumber extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This will update the component state each input
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    // When the button to submit the form is pressed, pass the form input as a prop up to parent via the passed down function
    handleSubmit(event, id) {
        this.props.onClick(id)
        var text = { "roomCode" : this.state.value,
                     "nickname" : this.props.nickname,}
        console.log("Room Number Page Send", text)

        fetch('/roomadduser', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(text),
        }).then((result) => result.json()).then((info) => { console.log("Room Number Page Return", info); })
        event.preventDefault() // Prevent default prevents the page refreshing
    }

    render() {
        return (
            <div className="Menu">

                <Container className="Menu-container">

                    <Container>
                        <h1 className="Menu-title">Enter Room Code</h1>
                    </Container>

                    <Container className="Room-code-input-con">
                        <h4>To join a room please enter the 20 digit room code below!</h4>
                        <form id="nickname-form" onSubmit={this.handleSubmit}>
                            <Form.Control size="lg" type="text" placeholder="12345678910" className="Nickname-inputbox" maxLength="20" value={this.state.value} onChange={this.handleChange} />
                        </form>
                    </Container>

                    <Container className="Menu-container">
                        <Row className="Menu-row">
                            <Col>
                                <Button className="Menu-button" block variant="danger" onClick = {()=> this.handleSubmit}>
                                    <h1 className="Menu-cancel">
                                        x
                                    </h1>
                                </Button>
                            </Col>
                            <Col>
                                <Button className="Menu-button Menu-green-circles" form="nickname-form" type="submit" block variant="success" onClick = {()=> this.handleSubmit}>
                                    <h1 className="Splash-button">
                                        Join!
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

export default EnterRoomNumber;