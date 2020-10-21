import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Select from 'react-select';
import { Button, Form, Dropdown } from 'react-bootstrap'



export class QuizConfigure extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedChoice: [],
            questionCount: 1,
            questionTime: 10
        };

        this.updateQuestionCount = this.updateQuestionCount.bind(this);
        this.updateQuestionTime = this.updateQuestionTime.bind(this);
    }

    handleCategoryChange = selectedChoice => {
        this.setState({ selectedChoice });
    };

    updateQuestionCount(event) {
        this.setState({ questionCount: event.target.value });
    };

    updateQuestionTime(event) {
        this.setState({ questionTime: event.target.value });
    };


    displaySelectedCategory(selectedChoice) {
        return selectedChoice.map(choice => {
            return choice.value + ", ";
        });
    };

    handleSubmit(){
        
        console.log("QuizConfig Submitting")
        this.props.onClick(this.state.selectedChoice, this.state.questionCount, this.state.questionTime, this.props.playerNickname, this.props.roomcode);
    }

    // handleSubmit = (event) => {
    //     //do your onsubmit work
    //     event.preventDefault();
    //     console.log("QuizConfig Submitting")
    //     this.props.onClick(this.state.selectedChoice, this.state.questionCount, this.state.questionTime);
    //     // do your button click work
    // }

    render() {


        return (
            // onSubmit={this.props.onClick(this.state.selectedChoice, this.state.questionCount, this.state.questionTime)}
            <form onSubmit={() => this.handleSubmit()}>
                <div className="container-fluid">

                    <Container className="Menu-container">
                        <Container>
                            <h1 className="Menu-title">Configure Quiz</h1>
                        </Container>

                        <Container>
                        <div className="Room-prop">
                                <h4>Select Categories :</h4>
                                <Select
                                    className="Nickname-inputbox"
                                    options={this.props.testCategorys}
                                    isMulti
                                    value={this.state.selectedChoice}
                                    onChange={this.handleCategoryChange} />
                            </div>
                            <div className="Room-prop">
                                <h4>Question Count :{this.state.questionCount}</h4>
                                <input type="range" className="custom-range" min="1" max="100" id="Qcount" value={this.state.questionCount} onChange={this.updateQuestionCount} />
                            </div>
                            <div className="Room-prop">
                                <h4>Question Time :{this.state.questionTime}</h4>
                                <input type="range" className="custom-range" min="5" max="60" id="Qcount" value={this.state.questionTime} onChange={this.updateQuestionTime} />
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
                                    <Button className="Menu-button Menu-green-circles" form="nickname-form" type="submit" block variant="success" onClick={() => this.handleSubmit()}>
                                        <h1 className="Splash-button">
                                            Next
                                        </h1>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </div>
            </form>
        )
    }
}

export default QuizConfigure