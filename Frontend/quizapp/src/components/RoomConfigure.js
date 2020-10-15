import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export class RoomConfigure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: "",
            roomPass: "",
            playerCount: "",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        console.log(data);
        this.props.submit();
    };

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        const { roomName } = this.state

        return (
            <Container className="Menu-container">
            <form onSubmit={this.handleSubmit}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                        </div>

                        <div className="col-md-4">
                            <h1 className="Menu-title">
                                Configure Room
                            </h1>
                        </div>

                        <div className="col-md-4">
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="Room">
                                    Room Name
                                </label>

                                <input type="text" name="roomName" className="form-control"
                                    placeholder="Room 1" onChange={this.handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label for="RoomPass">
                                    Room Password
                                </label>

                                <input type="text" name="roomPass" className="form-control"
                                    placeholder="Qwerty" onChange={this.handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label for="Player Count">
                                    Player Count
                                </label>

                                <input type="range" name="playerCount" className="custom-range"
                                min="0" max="5" id="customRange2" onChange={this.handleInputChange} />
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                </div>
                                <div className="col-md-6">
                                </div>
                                <div className="col-md-3">

                                    <button type="submit" className="btn btn-success">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
            </form>
        </Container>
        )
    }
}

export default RoomConfigure;