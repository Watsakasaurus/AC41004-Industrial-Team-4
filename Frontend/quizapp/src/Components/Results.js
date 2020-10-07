import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinners from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';

import './Results.css';
import { Row } from "react-bootstrap";

function Result(props) {
    return <h1 className="header"> {props.result}!</h1>;
  }
  
  function Points(props){
    return <h2 className="header"> {props.points} Points! </h2>
  }

const Results = () => (

<Container className="p-3">


    <Jumbotron >
        <div>
            <Result result="" />
        </div>

        <div>
            <Points points="" />
        </div>
    </Jumbotron>


    <div>
        <Badge pill variant="primary" >Name 1 </Badge>{' '}
    
        <ProgressBar>
        <ProgressBar animated variant="success" now={35} key={1} />
        </ProgressBar>
    </div>

    <div>
        <Badge pill variant="secondary" >Name 2 </Badge>{' '}
   
        <ProgressBar>
        <ProgressBar animated variant="success" now={35} key={1} />
        </ProgressBar>
    </div>
  
  </Container>
);

export default Results;