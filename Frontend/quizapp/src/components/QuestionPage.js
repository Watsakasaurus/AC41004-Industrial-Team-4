import React, {Component} from "react";
import Button from 'react-bootstrap/Button';



function onButtonClick(identifier){
    console.log(identifier);
}



function makeButton(text, callback){
    return(<Button
        // style={}
        onClick={() => onButtonClick(text)}>
            {text}
        </Button>);
}

class QuestionPage extends Component {



    render() {
        const element = makeButton("1")
        return (
            <div>
                    
                    {element}
                    {makeButton("2")}
                    {makeButton("3")}
                    {makeButton("4")}
                    {makeButton("5")}
            </div>
            
        );
    }

}

export default QuestionPage