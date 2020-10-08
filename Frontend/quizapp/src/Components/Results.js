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
      <ProgressBar animated variant="success" now={props.score} label={`${props.score} points`} key={1} />
    </ProgressBar>
  );
}
function UserBadge(props) {
  return (
    <Badge className="user_badge" pill variant="primary">
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
    
  }

  setclr = () => {
    if (Result === this.state.correct) {
      this.setState({ colour: "green" });
      //jumbo.style.backgroundColor = this.state.colour;
  }
    else;

  };
  render() {
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
          <UserBadge name = "Andrew" />

          <Score  score="10" />
        </div>

        <div>
          <Badge pill variant="secondary">
            Alfie{" "}
          </Badge>{" "}
          <ProgressBar>
            <ProgressBar animated variant="success" now={80} key={1} />
          </ProgressBar>
        </div>

        <div>
          <Badge pill variant="secondary">
            Callum{" "}
          </Badge>{" "}
          <ProgressBar>
            <ProgressBar animated variant="success" now={50} key={1} />
          </ProgressBar>
        </div>

        <div>
          <Badge pill variant="secondary">
            Sophie{" "}
          </Badge>{" "}
          <ProgressBar>
            <ProgressBar animated variant="success" now={30} key={1} />
          </ProgressBar>
        </div>
      </Container>
    );
  }
}
export default ResultsPage;
