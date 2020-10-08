import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';






//function that simply creates and returns a button with text and onclick funciton
// function

class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {bog: "bog",
                    questions: props.questions,
                    questionsIterator: 0,
                    maxQuestions: props.questions.length,
                    answers: []};
                    
      }

    makeButton(text, onClick){
        return(
            <Button className="Question-button"
             onClick={() => this.onButtonClick(onClick)}>
                {text}
            </Button>
        );
    }

    onButtonClick(identifier){
        // Send answer to backend
        console.log(identifier);
        if(this.state.questionsIterator+1<this.state.maxQuestions){
            this.setState( {questionsIterator: this.state.questionsIterator+1,
                            answers: this.state.answers.concat(identifier)})
        }else{
            //round over
            console.log(this.state.answers)
        }
    }

    render() {
        // const element = this.makeButton("1")
        var layout = 1;
        if(layout){
            return (
                <Container className="Question-container">
                    <Container>
                        <h1>{this.state.questions[this.state.questionsIterator][0]}</h1>
                    </Container>
                    <Container className="Question-row-container">
                        <Row className="Question-row" mx-auto>
                            <Col>
  
                                {this.makeButton(this.state.questions[this.state.questionsIterator][1],1)}
                                {this.makeButton(this.state.questions[this.state.questionsIterator][2],2)}
                            

                            </Col>
                        </Row> 
                        <Row className="Question-row">
                            <Col>
                            {this.makeButton(this.state.questions[this.state.questionsIterator][3],3)}
                            {this.makeButton(this.state.questions[this.state.questionsIterator][4],4)}
                            </Col>
                        </Row>
                        
                    </Container>
                </Container> 
            );
        }else{
            return (
                <br/>
            );
        }
    }

}

export default QuestionPage