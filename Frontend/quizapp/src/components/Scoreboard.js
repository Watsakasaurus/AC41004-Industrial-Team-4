import React, { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';
import { Container } from 'react-bootstrap';

let winnerName = "Bob"
let players = ["Andrew", "Alfie", "Sophie", "Callum"]
let playersScore = ["100", "85", "45", "20"]
let noOfQuestions = "20"
let winnerCorrectAnswers = "15"
let winnerScore = "65";
let playerCorrectAnswers = "6"
let playerScore = "23";
let position = "3rd";

class Scoreboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            scores: [22]
        }
    }

    componentDidMount() {
        // This fetch only requires roomcode
        var text = { "roomCode": this.props.roomCode};

        // Perform the fetch, savePlayersToState is called to store the response 
        fetch('/history', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(text)
        }).then((result) => result.json()).then((info) => {
            info.players.forEach(element => {
                this.setState(state => {
                    const players = state.players.concat(element.name);
                    const scores = state.scores.concat(element.scores);

                    return {
                        players,
                        scores
                    };
                });
            });
        });
    }

    render() {
        return (
            <Container className="Menu-container">

                <Container className="Menu-title">
                    <h1>The Results are in! </h1>
                </Container>

                <Container className="Scoreboard Scoreboard-shadow">
                    <Col>
                        <Row className="Generic-center Scoreboard-winner-title">
                            <h2>Winner</h2>
                        </Row>
                        <Row className="Generic-center Scoreboard-winner-player">
                            <h1>Sophie1234</h1>
                        </Row>
                        <Row className="Generic-center Scoreboard-stats-top">
                            <h4>Score : 12345</h4>
                        </Row>
                        <Row className="Generic-center Scoreboard-stats-bottom">
                            <h4>Questions : 14/18</h4>
                        </Row>
                    </Col>
                </Container>

                <Container className="Scoreboard-player-list Scoreboard-shadow">
                    <Col>
                        <Row className="Scoreboard-player-list-title">
                            <Col>
                                <h4>Player Name</h4>
                            </Col>
                            <Col className="text-right">
                                <h4>Player Score</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        {this.state.players.map((name,index) =>
                            <Row className="Scoreboard-player-list-item">
                                <Col key={name}>
                                    <h4>{name}</h4>
                                </Col>
                                <Col className="text-right">
                                    <h4>{this.state.scores[index]}</h4>
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Container>


                <Container className="Menu-container">
                    <Button className="Menu-button Menu-green-circles" form="nickname-form" type="submit" block variant="success">
                        <h1 className="Splash-button">
                            Next
                            </h1>
                    </Button>
                </Container>

            </Container>
        );
    }
}


export default Scoreboard;


