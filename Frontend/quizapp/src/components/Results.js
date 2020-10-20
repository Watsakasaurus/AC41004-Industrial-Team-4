import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import ProgressBar from "react-bootstrap/ProgressBar";

import Badge from "react-bootstrap/Badge";

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
      <ProgressBar variant={props.user_clr} now={props.score} label={`${props.score} points`} key={1} />
    </ProgressBar>
  );
}

function UserBadge(props) {
  return (
    <Badge className="user_badge Results-Larger-badge" variant={props.user_clr}>
      {" "}
      {props.name}{" "}
    </Badge>
  );
}

function TimeLeft(props) {
  return <h2 className="time_left">   Loading Next Question!</h2>;
}


window.onload = function () {
  //setInterval(count, 1000);
  
};

let counter = 0;

function count() {
  counter++;

  if (counter < 10)
    return <h1 className="counter"> 10 </h1>
  else if (counter === 10)
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

onload(props){
  var text = { "roomCode": this.props.roomCode };
  //perform the fetch
  fetch('/roomallplayers', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(text)
  }).then((result) => result.json()).then((info) =>  this.setState({players: info.nicknames, players: info.score}))

}
  
setclr() {
    if (Result === this.state.correct) {
      this.setState({ colour: "#28A745" });
    }
    else if (Result === this.state.incorrect) {
      this.setState({ colour: "#FF0100" });
    }
  };

renderBars(players, colours, scores){
  console.log(players);
  var items = []
  for(var x in players){
    console.log("BAR: " + x)
    items.push(
      <div>
        <div className="Result-div">
           <UserBadge name={players[x].name} user_clr={colours[x]} />
        </div>
        <div className="Result-div2">
          <Score score={players[x].totalScore} user_clr={colours[x]} />
        </div>
      </div>
    );
  }
  return items;

}


  render() {


    let players = this.props.players;
    let colours = this.props.colours;
    let plyr_score = this.props.plyr_score;


    return (
      <Container className="p-3">

      {this.setclr()} 
        <div>
          <Jumbotron className="jumbotron" style={{ backgroundColor: this.state.colour }}>
            <Container className="Results-part1">
              <Result result = {this.props.result} />
            </Container>

            <Container className="Results-part1">
              <Points points="100" />
            </Container>
          </Jumbotron>
        </div>

       {this.renderBars(players, colours, plyr_score)}

        <br>
        </br>

        <div>
          <Container className="Results-loading">
            <div>
              {count}
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>

            <div>
              <TimeLeft />
            </div>
          </Container>
        </div>
      </Container>
    );
  }
}
export default ResultsPage;
