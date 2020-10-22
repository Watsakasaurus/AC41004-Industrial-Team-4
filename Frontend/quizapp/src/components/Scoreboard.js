import React, { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';
import { Container } from 'react-bootstrap';

class Scoreboard extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            players: [],
            scores: [],
            streak:[],
            provisionalWinnerName:"",
            provisionalWinnerScore: 0
        }
    }

    componentDidMount() {
        // This fetch only requires roomcode, which is passed down
        var text = { "roomCode": this.props.roomCode};

        // Perform the fetch, get player results and store in arrays
        fetch('/history', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(text)
        }).then((result) => result.json()).then((info) => {
            console.log("/history return", info);
            info.players.forEach(element => {
                console.log("setting WINNER")

                console.table("Players",this.state.players);
                this.setState(state => {
                    const players = state.players.concat(element.name);
                    const scores = state.players.concat(element.totalScore);
                    const streak = state.streak.concat(element.streak);

                    return {
                        players,
                        streak
                    };
                });
            });

            for (var index = 0, len =  this.state.scores.length; index < len; index++) {

                console.log("FINDING WINNER")
    
                console.table("Players",this.state.players);
                console.table("Score", this.state.scores);
                console.table("Winner", this.state.provisionalWinnerName,this.state.provisionalWinnerScore);
    
    
                if(this.state.scores[index] < this.state.provisionalWinnerScore[1]){
                    console.log("Provisional Winner is greater then the current player");
    
                } else if(this.state.scores[index] > this.state.provisionalWinnerScore){
                    console.log("Provisional Winner is less then the current player");

                    this.setState({
                        provisionalWinnerName: this.state.players[index],
                        provisionalWinnerScore:  this.state.scores[index]
                    })
    
                } else if(this.state.scores === this.state.provisionalWinnerScore){
                    this.setState({
                        provisionalWinnerName: "tie",
                    })
                    console.log("Provisional Winner and the current player are equal");
                }
            }
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
                            <h1>{this.state.provisionalWinnerName}</h1>
                        </Row>
                        <Row className="Generic-center Scoreboard-stats-top">
                            <h4>Score : {this.state.provisionalWinnerScore}</h4>
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
                                <h4>Highest Streak</h4>
                            </Col>
                            <Col className="text-right">
                                <h4>Player Score</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        {this.state.players.map((name,index) =>
                            <Row key={name} className="Scoreboard-player-list-item">
                                <Col>
                                    <h4>{name}</h4>
                                </Col>
                                <Col className="text-right">
                                    <h4>{this.state.streak[index]}</h4>
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


