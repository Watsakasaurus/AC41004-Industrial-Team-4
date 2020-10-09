import React, { Component } from "react";

import Container from "react-bootstrap/Container";

import Jumbotron from "react-bootstrap/Jumbotron";
import ProgressBar from "react-bootstrap/ProgressBar";

import Badge from "react-bootstrap/Badge";

import "./Results.css";

var jumbo = document.getElementById("jumbotron")

function Result(props) {
  return <h1 className="Ques_result"> {props.result}!</h1>;
}

function Points(props) {
  return <h2 className="user_points"> {props.points} Points! </h2>;
}

function Score(props) {
  return (
    <ProgressBar>
      <ProgressBar  variant="success" now={props.score} label={`${props.score} points`} key={1} />
      <ProgressBar  variant="info" now={props.score} label={`${props.score} points`} key={2} />
      <ProgressBar  variant="danger" now={props.score} label={`${props.score} points`} key={1} />

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
  
  if (counter == 5)
    return
}

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: "Correct",
      incorrect: "Incorrect",
      colour: "green"
    };
   // const { playerNickname } = props;

  }

  
  setclr = () => {
    if (Result === this.state.correct) {
      this.setState({ colour: "green" });
      //jumbo.style.backgroundColor = this.state.colour;
  }
    else;

  };
  render() {


    let players = ["Andrew", "Alfie", "Sophie", "Callum"];
    let colours = ["primary", "success", "danger" , "warning"]
    let plyr_score = ["100", "85" , "45" , "20"]
     

    return (
      <Container className="p-3">
        <Jumbotron>
          <div>
            <Result result={this.state.correct} />
          </div>

          <div>
            <Points points="100" />
          </div>
        </Jumbotron>

        <div>
          <UserBadge name = {players[0]} user_clr = {colours[0]} />

          <Score  score = {plyr_score[0]} />
        </div>

        <div>
        <UserBadge name = {players[1]} user_clr = {colours[1]} />

        <Score  score = {plyr_score[1]} />   
        </div>

        <div>
          <UserBadge name = {players[2]} user_clr = {colours[2]}/>
          <ProgressBar>
            <ProgressBar  variant="success" now={plyr_score[2]} key={1} />
          </ProgressBar>
        </div>

        <div>
        <UserBadge name = {players[3]} user_clr = {colours[3]}/>
          <ProgressBar>
            <ProgressBar  variant="success" now={plyr_score[3]} key={1} />
          </ProgressBar>
        </div>
      </Container>
    );
  }
}
export default ResultsPage;
