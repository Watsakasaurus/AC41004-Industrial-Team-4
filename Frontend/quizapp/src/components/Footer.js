import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/logo.png';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        return (
            <div className="Footer">
                <Row>
                    <Col>
                    </Col>
                    <Col className="Generic-center Footer-title">
                        <h1>Quizzy</h1>
                        <h4>The Ultimate Quiz App</h4>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </div>
        );

    }
}

export default Footer;
