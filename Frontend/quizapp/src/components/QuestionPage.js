import React, {Component} from "react";
import Button from 'react-bootstrap/Button';



function onButtonClick(identifier){
    console.log(identifier);
}


// function that simply creates and returns a button with text and onclick funciton
function makeButton(text, onClick){
    return(<Button
        // style={}
        onClick={() => onButtonClick(onClick)}>
            {text}
        </Button>);
}

class QuestionPage extends Component {
    constructor(props) {
        super(props);
        var cars = ["Which of these is not a car","Saab", "Volvo", "BMW","Dog"];
        const map1 = cars.map(x => makeButton(x,x));
        this.state = {bog: "bog", questions: cars, buttonMap: map1};
      }

    render() {
        const element = makeButton("1")
        return (
            <div>
                <h1>{this.state.questions[0]}</h1>
                {this.state.buttonMap[1]}
                {this.state.buttonMap[2]}
                <br/>
                {this.state.buttonMap[3]}
                {this.state.buttonMap[4]}
            </div>
        );
    }

}

export default QuestionPage