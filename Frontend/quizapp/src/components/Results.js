import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import ProgressBar from "react-bootstrap/ProgressBar";

import Badge from "react-bootstrap/Badge";

function Result(props) {
  
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
      colour: "#28A745",
      result: "",
      score: 0,
      players:[],
      scores:[],
      tscores:[]
     


    };
    
  }

  // componentDidMount(){
  //   var text = { "roomCode": this.props.roomCode };
  //   //perform the fetch
  //   fetch('/roomallplayers', {
  //     method: "POST",
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(text)
  //   }).then((result) => result.json()).then((info) => {
      
  //         this.setState({players: info.nicknames, players: info.score})
    
  //     return this.state.players;
  //       });
  //       // console.log(this.state.players)
  // }
 
  correct(players,nickname){
    
    for(var x in players){
      console.log("RESULTS nick:", nickname, players[x].name);
      console.log("RESULTS corr:", players[x].correct[this.props.questionNumber]);
      if (nickname === players[x].name){
        this.setState()
        if(players[x].correct[this.props.questionNumber] === true){

          this.setState({ colour: "#28A745",
                          score: Math.round(players[x].score),
                          result: "Correct"}); 
          return this.state.result;
        }
        else if(players[x].correct[this.props.questionNumber] === false){
          this.setState({ colour: "#FF0100",
                          score: 0,
                          result: "Incorrect"})
          return this.state.result;
            }
        }
     
          
                         }
    }
  

  renderBars(players, colours){
    console.log(players);
    var items = []
    for(var x in players){
      // console.log("BAR: " + x)
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


  componentDidMount(){
    var players = [];
    var scores = [];
    var tscores = [];

    let playerd = this.props.allplayerdata.players;
    for(var x; x<playerd.length; x++){
      players.push(playerd[x].name);
      scores.push(playerd[x].score);
      tscores.push(playerd[x].totalScore);
    }

    this.setState({players: players,
                  scores:scores,
                  tscores:tscores,
                  })
                  this.correct(playerd,this.props.nickname)
                }
  


  render() {
    let playerd = this.props.allplayerdata.players;
   
    
    // let colours = this.props.colours;
    let plyr_score = this.props.plyr_score;
    // let nickname = this.props.nickname;
    
    return (
      <Container className="p-3">
        <div>
          <Jumbotron className="jumbotron" style={{ backgroundColor: this.state.colour }}>
            <Container className="Results-part1">
              <Result result = {this.state.result} />
            </Container>

            <Container className="Results-part1">
              <Points points={this.state.score} />
            </Container>
          </Jumbotron>
        </div>

       {this.renderBars(playerd, this.props.colours)}

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
