import React, { Component } from "react";

import Container from "react-bootstrap/Container";

import Jumbotron from "react-bootstrap/Jumbotron";
import ProgressBar from "react-bootstrap/ProgressBar";

import Badge from "react-bootstrap/Badge";

import "./Results.css";

var jumbo = document.getElementById("jumbotron")

function Result(props) {
  return <h1 className="header"> {props.result}!</h1>;
}

function Points(props) {
  return <h2 className="header"> {props.points} Points! </h2>;
}

function Score(props) {
  return (
    <ProgressBar>
      <ProgressBar animated variant="success" now={props.score} key={1} />
    </ProgressBar>
  );
}
function UserBadge(props) {
  return (
    <Badge pill variant="primary">
      {"hh "}
      {props.name}{"hh "}
    </Badge>
  );
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
      this.setState({ color: "green" });
      jumbo.style.backgroundColor = this.state.color;
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
          <UserBadge name />

          <Score score="10" />
        </div>

        <div>
          <Badge pill variant="secondary">
            Name 2{" "}
          </Badge>{" "}
          <ProgressBar>
            <ProgressBar animated variant="success" now={80} key={1} />
          </ProgressBar>
        </div>

        <div>
          <Badge pill variant="secondary">
            Name 3{" "}
          </Badge>{" "}
          <ProgressBar>
            <ProgressBar animated variant="success" now={80} key={1} />
          </ProgressBar>
        </div>

        <div>
          <Badge pill variant="secondary">
            Name 4{" "}
          </Badge>{" "}
          <ProgressBar>
            <ProgressBar animated variant="success" now={80} key={1} />
          </ProgressBar>
        </div>
      </Container>
    );
  }
}
export default ResultsPage;
