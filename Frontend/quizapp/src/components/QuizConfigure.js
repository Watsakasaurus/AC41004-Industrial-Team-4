import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class QuizConfigure extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedCategorys: [],
            questionCount: 10,
        };

        this.addCategory = this.addCategory.bind(this);
        this.removeCategory = this.removeCategory.bind(this);
    }

    // This will update the room name state

    addCategory = (item) => {
        // Does the selected category already exist?
        const selectedCategorys = this.state.selectedCategorys.find(selectedCategorys => selectedCategorys === item);

        // If yes, break
        if (selectedCategorys){
            alert("This category has already been added to the list");
            return;
        }

        // If not, continue concat to array
        this.setState(state => {
            const selectedCategorys = [...state.selectedCategorys, item];

            return {
                selectedCategorys
            };
        });
    }

    removeCategory = (index) => {
        this.setState(state => {
          const selectedCategorys = state.selectedCategorys.filter((item, j) => index !== j);
     
          return {
            selectedCategorys,
          };
        });
      };


    render() {
        return (
            <div className="Menu">

                <Container className="Menu-container">

                    <Container>
                        <h1 className="Menu-title">Configure Quiz</h1>
                    </Container>

                    <form id="nickname-form" onSubmit={this.handleSubmit}>
                        <Container className="Room-code-input-con">
                            <div className="Room-prop">
                                <h2>Select Category's!</h2>
                                <DropdownButton block id="dropdown-basic-button" title="Category">
                                    {this.props.testCategorys.map(item => (
                                        <Dropdown.Item href="#/action-1" onClick={() => this.addCategory(item)} key={item}>{item}</Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </div>
                            <div className="Room-prop">
                                <h4>Question Count</h4>
                                <Form.Control size="lg" type="password" placeholder="5" className="Nickname-inputbox" maxLength="24" value={this.state.roomPass} onChange={this.updateRoomPass} />
                            </div>
                            <div className="Room-prop">
                                <h4>Category's</h4>
                                <Row className="Menu-row Lobby-list">
                                    <Col>
                                        {this.state.selectedCategorys.map((item, index) => (
                                            <Container className="Lobby-player-container">
                                                <h1 className="Lobby-player-text" key={item}>
                                                    <Row>
                                                        <Col>
                                                            {item}
                                                        </Col>
                                                        <Col className ="Quiz-config-remove">
                                                            <Button variant="danger" onClick={() => this.removeCategory(index)}>Remove Category</Button>
                                                        </Col>
                                                    </Row>
                                                    </h1>
                                            </Container>
                                        ))}
                                    </Col>
                                </Row>
                            </div>

                        </Container>

                        <Container className="Menu-container">
                            <Row className="Menu-row">
                                <Col>
                                    <Button className="Menu-button" block variant="danger" onClick={() => this.props.onClick(2)}>
                                        <h1 className="Menu-cancel">
                                            x
                                    </h1>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button className="Menu-button Menu-green-circles" form="nickname-form" type="submit" block variant="success" onClick={() => this.props.onClick(1)}>
                                        <h1 className="Splash-button">
                                            Next
                                        </h1>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </form>
                </Container>
            </div>
        );

    }
}

export default QuizConfigure;