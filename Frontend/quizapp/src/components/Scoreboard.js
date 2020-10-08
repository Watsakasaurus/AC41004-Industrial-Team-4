import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Scoreboard.css';

class Scoreboard extends React.Component {

    
  render() {

    let winnerName = "Bob";
    let playerName = "Bobby";
    let players = ["player1", "player2", "player3", "player4"];
    let noOfQuestions = "20"
    let winnerCorrectAnswers = "14"
    let winnerScore = "65";
    let playerCorrectAnswers = "6"
    let playerScore = "23";
    let position = "3rd";

    return (
        <div>
          <Card fluid className="Scoreboard-title">
              <Card.Body>
                  <Card.Title>Scoreboard</Card.Title>
              </Card.Body>
          </Card>
          <Card fluid className="Scoreboard-greencontainer">
              <Card.Body className="body">
                  <Card.Title className="Scoreboard-tmed">Winner</Card.Title>
                  <hr></hr>
                  <Card.Subtitle className="Scoreboard-tbig">{winnerName}</Card.Subtitle>
                  <hr></hr>
                  <Card.Text className="Scoreboard-tsmall">Score:{winnerScore} <br/>
                      Question: {winnerCorrectAnswers}/{noOfQuestions}
                  </Card.Text>
              </Card.Body>
          </Card>
        <Card>
        <Card fluid className="Scoreboard-whitecontainer">
            <Card>
                <Card.Body>
                    <Card.Title className="Scoreboard-med">You came {position} </Card.Title>
                    <Card.Subtitle className="Scoreboard-big">{playerName}</Card.Subtitle>
                    <Card.Text className="Scoreboard-small">Score:{playerScore} <br/>
                        Question: {playerCorrectAnswers}/{noOfQuestions}
                    </Card.Text>
                </Card.Body>
            </Card>  
          <Card>
              <Card.Body>
                  <Card.Text>
                    <table className="Scoreboard-table">
                        <tr>
                            <th> </th>
                            <th> </th>
                        </tr>
                        <tr>
                            <td>{players[0]}</td>
                            <th>12</th>
                        </tr>
                        <tr>
                            <td>{players[1]}</td>
                            <th>8</th>
                        </tr>
                        <tr>
                            <td>{players[2]}</td>
                            <th>3</th>
                        </tr>
                        <tr>
                            <td>{players[3]}</td>
                            <th>1</th>
                        </tr>
                    </table>
                  </Card.Text>
              </Card.Body>
          </Card>
        </Card>
        </Card>
        <div>
            <Button className="Scoreboard-button">
                <h1 className="Scoreboard-buttontext">
                  Next
                </h1>
            </Button>
        </div>

        </div>
   
    );
  }
}

export default Scoreboard;


