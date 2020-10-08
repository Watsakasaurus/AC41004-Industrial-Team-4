import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'

class EnterNickname extends React.Component {

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
    handleSubmit(event) {
        event.preventDefault() // Prevent default prevents the page refreshing
        this.props.changeValue(this.state.value);
    }

    render() {
        return (
            <div className="Splash">

                <Container className="Menu-container">
                    <h1 className="Generic-center-title">Welcome!</h1>
                </Container>

                <Container className="Menu-container">
                    <Row className="justify-content-center">
                        <Col xl={8} xs={10}>
                            <Row className="justify-content-center">
                                <h4>Please choose a Nickname</h4>
                            </Row>
                            <Row className="justify-content-center">
                                <form id="nickname-form" onSubmit={this.handleSubmit}>
                                    <Form.Control size="lg" type="text" placeholder="Enter Nickname" className="Nickname-inputbox" value={this.state.value} onChange={this.handleChange} />
                                </form>
                            </Row>
                            <Row className="justify-content-center">
                                <p className="Disclaimer Generic-center">Please do not choose a Nickname that could reveal personal infomation about yourself.</p>
                                <p>eg AnnoyingSeagull69</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <Container className="Menu-container">
                    <Row className="justify-content-center">
                        <Button className="Menu-green-circles" form="nickname-form" type="submit" variant="success">
                            <div className="Menu-button-text">
                                Next
                        </div>
                        </Button>
                    </Row>
                </Container>

            </div>
        );

    }
}

export default EnterNickname;
