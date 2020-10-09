import React, { Component } from "react";

import Container from "react-bootstrap/Container";

import Jumbotron from "react-bootstrap/Jumbotron";
import ProgressBar from "react-bootstrap/ProgressBar";

import Badge from "react-bootstrap/Badge";

import "./Results.css";

var jumbo = document.getElementById("jumbotron")
var question_right = null

function Result(props) {

  //if (question_right ==  1)
    return <h1 className="Ques_result"> {props.result}!</h1>;
 
}

function Points(props) {
  return <h2 className="user_points"> {props.points} Points! </h2>;
}

function Score(props) {
  return (
    <ProgressBar>
      <ProgressBar  variant={props.user_clr} now={props.score} label={`${props.score} points`} key={1} />
      
    </ProgressBar>
  );
}
function UserBadge(props) {
  return (
    <Badge className="user_badge" pill variant = {props.user_clr}>
      {" "}
      {props.name}{" "}
    </Badge>
  );
}


window.onload = function(){
  setInterval(count, 1000);
};

let counter = 0;
function count(){
  counter++;
  
  if (counter == 10)
    return
}

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: "Correct",
      incorrect: "Incorrect",
      colour: "#28A745"
    };
   // const { playerNickname } = props;

  }

  
  setclr = () => {
    if (Result === this.state.correct) {
      this.setState({ colour: "green" });
    }
    else if (Result === this.state.incorrect) {
      this.setState({ colour: "red"});
    
  }
      
  };

   

 
  render() {


    let players = ["Andrew", "Alfie", "Sophie", "Callum"];
    let colours = ["primary", "success", "danger" , "warning"]
    let plyr_score = ["100", "85" , "45" , "20"]
     

    return (
      <Container className="p-3">

        <div> 
          <Jumbotron className="jumbotron" style={{backgroundColor: this.state.colour}}>
            <div>
              <Result result={this.state.correct} />
            </div>

            <div>
              <Points points="100" />
            </div>
          </Jumbotron>
        </div>

        <div>
          <UserBadge name = {players[0]} user_clr = {colours[0]} />

          <Score  score = {plyr_score[0]} user_clr = {colours[0]} />
        </div>

        <div>
        <UserBadge name = {players[1]} user_clr = {colours[1]} />

        <Score  score = {plyr_score[1]} user_clr = {colours[1]}/>   
        </div>

        <div>
          <UserBadge name = {players[2]} user_clr = {colours[2]}/>
          <ProgressBar>
            <ProgressBar  variant={colours[2]} now={plyr_score[2]} key={1} />
          </ProgressBar>
        </div>

        <div>
        <UserBadge name = {players[3]} user_clr = {colours[3]}/>
          <ProgressBar>
            <ProgressBar  variant={colours[3]} now={plyr_score[3]} key={1} />
          </ProgressBar>
        </div>
      </Container>
    );
  }
}
export default ResultsPage;
