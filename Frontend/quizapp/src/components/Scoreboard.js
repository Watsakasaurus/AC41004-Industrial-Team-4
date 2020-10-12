import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Scoreboard.css';

    let winnerName = "Bob";
    let players = ["Andrew", "Alfie", "Sophie", "Callum"];
    let playersScore = ["100", "85" , "45" , "20"]
    /* let players = []; */
    let noOfQuestions = "20"
    let winnerCorrectAnswers = "15"
    let winnerScore = "65";
    let playerCorrectAnswers = "6"
    let playerScore = "23";
    let position = "3rd";

/* function buttonClick(){
        Scoreboard.winnerName = "Billy";
    } */

function Scoreboard(){
    

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
                            <th>{playersScore[0]}</th>
                        </tr>
                        <tr>
                            <td>{players[1]}</td>
                            <th>{playersScore[1]}</th>
                        </tr>
                        <tr>
                            <td>{players[2]}</td>
                            <th>{playersScore[2]}</th>
                        </tr>
                        <tr>
                            <td>{players[3]}</td>
                            <th>{playersScore[3]}</th>
                        </tr>
                    </table>
                  </Card.Text>
              </Card.Body>
          </Card>
        </Card>
        </Card>
        <div>
            <Button className="Scoreboard-button" onclick="buttonClick">
                <h1 className="Scoreboard-buttontext">
                  Next
                </h1>
            </Button>
        </div>

        </div>
   
    );
  }


export default Scoreboard;


