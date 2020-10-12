import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import QuestionTimer from '../components/QuestionTimer';
import Container from 'react-bootstrap/Container';
import Results from '../components/Results';




// time between questions in ms
const timeBetweenQs = 3000;


//function that simply creates and returns a button with text and onclick funciton
// function

class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {questions: props.questions,
                    currentQuestion: props.questions[0],
                    questionsIterator: 0,
                    maxQuestions: props.questions.length,
                    answers: [],
                    layout: 1};
                    
      }

    makeButton(text, onClick, colour){
        if(colour){
            return(
                <Button className="Question-button"
                onClick={() => this.onButtonClick(onClick)}>
                    {text}
                </Button>
            );
        }else{
            return(
                <Button className="Question-button Question-button-red"
                onClick={() => this.onButtonClick(onClick)}>
                    {text}
                </Button>
            );
        }
    }

    onButtonClick(identifier){
        // Send answer to backend
        this.setState({layout: 0})
        if(identifier==this.state.currentQuestion[5]){
            console.log("Correct");
        }else{
            console.log("Incorrect");
        }
        setTimeout(function() { //Start the timer
            this.setState({layout: 1}) //After 1 second, set render to true
            if(this.state.questionsIterator+1<this.state.maxQuestions){
                this.setState( {currentQuestion: this.state.questions[this.state.questionsIterator+1],
                                questionsIterator: this.state.questionsIterator+1,
                                answers: this.state.answers.concat(identifier),
                                });
            }else{
                //round over
                console.log(this.state.answers);
            }
        }.bind(this), timeBetweenQs);

        console.log(identifier);
    }

    timeOut(father){
        console.log("Timer reached 0");
        // console.log(this);
        father.onButtonClick(5)        // QuestionPage.onButtonClick(5);
        // father.setState({timerKey: father.state.timerKey+1})
        // this.setState({questionsIterator: this.state.questionsIterator+1,
        //                answers: this.state.answers.concat(5)});
    }

    buttonLayout(){
    var timmyTheTimer = (<QuestionTimer startCount={5} timeFinished={this.timeOut} parent = {this}/>);
    
        return(
        <Container>
            {timmyTheTimer}
            <Row className="Question-row" mx-auto>
                <Col>
                    {this.makeButton(this.state.currentQuestion[1],1,1)}
                </Col>
                <Col>
                    {this.makeButton(this.state.currentQuestion[2],2,1)}
                </Col>
            </Row> 
            <Row className="Question-row">
                <Col>
                    {this.makeButton(this.state.currentQuestion[3],3,1)}
                </Col>
                <Col>
                    {this.makeButton(this.state.currentQuestion[4],4,1)}
                </Col>
            </Row>
            
        </Container>
        );
    }

    answerLayout(){
        return(
            // <h1>Answered</h1>
            <Results result="Incorrect" points={50} score={100}></Results>

        );
    }

    render() {
        // const element = this.makeButton("1")
        // var layout = 1;
            return (
                <Container className="Question-container">
                    <Container>
                        <h1 className="Question-indicator">Question {this.state.questionsIterator+1}/{this.state.maxQuestions}</h1>
                        <hr/>
                        <h3 className="Question-indicator">{this.state.questions[this.state.questionsIterator][0]}</h3>
                        
                    </Container>
                    {/* <QuestionTimer startCount={10} timeFinished={this.timeOut} parent = {this}/> */}
                    {(this.state.layout && this.buttonLayout()) || this.answerLayout()}
                   
                </Container> 
            );

    }

}

export default QuestionPage