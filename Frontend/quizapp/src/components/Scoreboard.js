import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Scoreboard.css';


function Scoreboard() {

    let winnerName = "Bob";
    let players = ["player1", "player2", "player3", "player4"];
    let noOfQuestions = "20"
    let winnerCorrectAnswers = "14"
    let winnerScore = "65";
    let playerCorrectAnswers = "6"
    let playerScore = "23";
    let position = "3rd";

  return (

    <div className="Scoreboard">
      <Container align='center' className="Scoreboard-container">
        <Container>
            <h1 class="Scoreboard-title">Scoreboard </h1>
        </Container>

        <Container fluid className="Scoreboard-greencontainer">
          <Row>
            <Col>
              <p1 className="Scoreboard-med" block variant="success">
                <Row>
                    <Col>
                        <div>
                        Winner!
                        </div>
                    </Col>
                </Row>
              </p1>
            </Col>
          </Row>
          <Row className="Scoreboard-row">
            <Col>
              <p1 className="Scoreboard-big" block>
                <Row>
                  <Col>
                    <div>
                      {winnerName}
                    </div>
                  </Col>
                </Row>
              </p1>
              <p1 className="Scoreboard-small" block>
                <Row>
                  <Col>
                    <div>
                      <br /> Winning Score: {winnerScore} <br /> Questions: {winnerCorrectAnswers}/{noOfQuestions}
                    </div>
                  </Col>
                </Row>
              </p1>
            </Col>
          </Row>
        </Container>
        <Container fluid className="Scoreboard-greencontainer" >
          <Row>
            <Col>
              <p1>
                <Row>
                  <Col>
                    <div className="Scoreboard-med">
                    You came: {position}  
                    </div>
                  </Col>
                </Row>
              </p1>
            </Col>
          </Row>
          <Row className="Scoreboard-row">
            <Col>
              <p1 block>
                <Row>
                  <Col>
                    <div class="Scoreboard-small">
                     Your Score: {playerScore} <br /> Questions: {playerCorrectAnswers}/{noOfQuestions} <br />  <br />
                    </div>
                  </Col>
                </Row>
              </p1>
            </Col>
          </Row>
          </Container>
          <Container fluid className="Scoreboard-whitecontainer">
          <Row className="Scoreboard-row">
            <Col>
              <p1 block>
                <Row>
                    <Col>
                        <div class="Scoreboard-table">
                            <Col>
                                <table>
                                        <tr>
                                            <th>Player</th>
                                            <th>Score</th>
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
                                <br />
                            </Col>
                        </div>
                    </Col>
                </Row>
              </p1>
            </Col>
          </Row>
          </Container>
          <Container fluid>
          <Row className="Scoreboard-row">
            <Col>
              <Button className="Scoreboard-button">
                <h1 className="Scoreboard-buttontext">
                  Next
                </h1>
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Scoreboard;
