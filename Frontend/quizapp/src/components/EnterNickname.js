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
            <div className="Menu">

                <Container className="Menu-container">  

                    <Container>
                        <h1 >Welcome!</h1>
                    </Container>

                    <Container className="Room-code-input-con">
                                <h4>Please choose a Nickname</h4>

                                <form id="nickname-form" onSubmit={this.handleSubmit}>
                                    <Form.Control size="lg" type="text" placeholder="Enter Nickname" className="Nickname-inputbox" pattern="^\S+$" maxLength="15" value={this.state.value} onChange={this.handleChange} />
                                </form>
                                
                                <p>No Spaces, 15 Characters Max, No Personal Infomation</p>
                    </Container>

                    <Container className="Menu-container">
                        <Row className="Menu-row">
                            <Col>
                                <Button className="Menu-button Menu-green-circles" form="nickname-form" type="submit" block variant="success">
                                    <h1 className="Splash-button">
                                        Next
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

export default EnterNickname;
