import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuestionTimer from "./QuestionTimer";
import Container from "react-bootstrap/Container";
import Results from "./Results";

// time between questions in ms
const timeBetweenQs = 2500;

//function that simply creates and returns a button with text and onclick funciton
// function

class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: props.questions,
            currentQuestion: props.questions[0],
            questionsIterator: 0,
            maxQuestions: props.numOfQuestions,
            answers: [],
            layout: 1,
            currentTime: props.maxTime,
            answerData: false,
            allplayerdata: []
        };
    }

    fetchQuestion() {
        var text = {
            roomCode: this.props.roomcode,
            nickname: this.props.nickname,
            questionNumber: this.state.questionsIterator+1
    
        };
        console.log("Question Send:", text);

        fetch("/question", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(text),
        })
            .then((result) => result.json())
            .then((info) => {
                this.formatFetchedQuesiton(info);
            });
    }

    formatFetchedQuesiton(info){
        console.log("Question Return", info);
        var newQ = [info.question];
        for(var x = 0; x<info.options.length; x++){
            newQ.push(info.options[x]);
        }
        console.log("newQ: ", newQ)
        this.setState({currentQuestion: newQ})
    }

    componentDidMount() {
        this.fetchQuestion();
    }

    //Createes a question button, currently contains code to make the button red if needed
    makeButton(text, onClick, colour) {
        if (colour) {
            return (
                <Button
                    className="Question-button"
                    onClick={() => this.onButtonClick(onClick)}
                >
                    {text}
                </Button>
            );
        } else {
            return (
                //adds different css class so colour can be changed independently of other buttons
                <Button
                    className="Question-button Question-button-red"
                    onClick={() => this.onButtonClick(onClick)}
                >
                    {text}
                </Button>
            );
        }
    }

    //indicates that one of the answer buttons has been pressed. Identifier tells which button has been pressed 1-4
    onButtonClick(identifier) {
        //TODO  Send answer to backend
        this.setState({ layout: 0,
                        answerData: false})
        var text = {
            roomCode: this.props.roomcode,
            nickname: this.props.nickname,
            response: this.state.currentQuestion[identifier],
            individualtime: this.state.currentTime.toFixed(1),
            questionnumber: this.state.questionsIterator+1,
        };
        console.log("Question Page Send:", text);
        fetch("/questionresponse", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(text),
        })
            .then((result) => result.json())
            .then((info) => {
                console.log("Question Page Return", info);
            });

        //set the state to display the results page until the timeout is complete
        this.setState({ layout: 0 })
        this.waitforResults(identifier)
    }


    waitforResults(identifier){
        this.refreshTimer = setInterval(() => {
            console.log("LOOP");
                    var text = {
                        roomCode: this.props.roomcode,
                    };
                    // console.log("Question Page Send:", text);
                    fetch("/roomallplayers", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify(text),
                    }).then((result) => result.json()).then((info) => {this.checkResults(info, identifier)});
                if(this.state.answerData){
                   this.stopWait();
                   return;
                }
      
          }, 500);
    }

    stopWait(){
        clearInterval(this.refreshTimer);
    }

    checkResults(info, identifier){
        this.setState({allplayerdata: info})
        var allPlayersAnswered = true;
        for(var x=0; x<info.players.length;x++){
            if(info.players[x].responses.length!=this.state.questionsIterator+1){
                allPlayersAnswered = false;
            }
        }
        console.log("Roomallplayers", info);
        this.setState({answerData: allPlayersAnswered})
        if(allPlayersAnswered){
            this.stopWait();
        setTimeout(
            function () {
                this.setState({ layout: 1 });
                //checks if all questions have been disaplayed, if not moves current question on
                if (this.state.questionsIterator + 1 <this.state.maxQuestions) {
                    this.setState({
                        questionsIterator: this.state.questionsIterator + 1,
                        answers: this.state.answers.concat(identifier),
                    });
                    this.fetchQuestion();
                } else {
                    //round over
                    console.log(this.state.answers);
                    this.props.endQuiz();
                }
            }.bind(this),timeBetweenQs);
        }
    }



    componentWillUnmount(){
        this.stopWait();
    }

    timeOut(father) {
        // When question timer reaches 0, act as through a button was pressed
        //(will always register incorrect as 5 is passed)
        console.log("Timer reached 0");
        father.onButtonClick(5);
    }

    updateTime(time) {
        this.setState({ currentTime: time });
    }

    buttonLayout() {
        var questionTimer = (
            <QuestionTimer
                startCount={this.props.maxTime}
                timeFinished={this.timeOut}
                updateTime={this.updateTime.bind(this)}
                parent={this}
            />
        );

        return (
            <Container>
                {questionTimer}
                <Row className="Question-row">
                    <Col>
                        {this.makeButton(this.state.currentQuestion[1], 1, 1)}
                    </Col>
                    <Col>
                        {this.makeButton(this.state.currentQuestion[2], 2, 1)}
                    </Col>
                </Row>
                <Row className="Question-row">
                    <Col>
                        {this.makeButton(this.state.currentQuestion[3], 3, 1)}
                    </Col>
                    <Col>
                        {this.makeButton(this.state.currentQuestion[4], 4, 1)}
                    </Col>
                </Row>
                {/* <h1>{this.state.currentTime.toFixed(2)}</h1> */}
            </Container>
        );
    }

    answerLayout() {
        if(this.state.answerData){
            return (
                // <h1>Answered</h1>
                <Results
                    result="Incorrect"
                    points={50}
                    score={100}
                    players={["Andrew", "Alfie", "Sophie", "Callum"]}
                    colours={["primary", "success", "danger", "warning"]}
                    plyr_score={["100", "85", "45", "20"]}
                    nickname={this.props.nickname}
                    questionNumber={this.state.questionsIterator}
                    allplayerdata = {this.state.allplayerdata}
                ></Results>
            );
        }else{
            return (
                    <h1>Waiting for other players</h1>
                );
        }
    }

    render() {
        // Displays the question number and question. Either displays the answer buttons or the results page
        //depending on layout
        return (
            <Container className="Question-container">
                <Container>
                    <h1 className="Question-indicator">
                        Question {this.state.questionsIterator + 1}/
                        {this.state.maxQuestions}
                    </h1>
                    <hr />
                    <h3 className="Question-indicator">
                        {this.state.currentQuestion[0]}
                    </h3>
                </Container>
                {/* <QuestionTimer startCount={10} timeFinished={this.timeOut} parent = {this}/> */}
                {(this.state.layout && this.buttonLayout()) ||
                    this.answerLayout()}
            </Container>
        );
    }
}

export default QuestionPage;
