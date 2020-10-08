import React, {Component} from "react";
import Button from 'react-bootstrap/Button';






//function that simply creates and returns a button with text and onclick funciton
// function

class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {bog: "bog",
                    questions: props.questions,
                    questionsIterator: 0,
                    maxQuestions: props.questions.length,
                    answers: []};
                    
      }

    makeButton(text, onClick){
        return(
            <Button
             // style={}
             onClick={() => this.onButtonClick(onClick)}>
                {text}
            </Button>
        );
    }

    onButtonClick(identifier){
        // Send answer to backend
        console.log(identifier);
        if(this.state.questionsIterator+1<this.state.maxQuestions){
            this.setState( {questionsIterator: this.state.questionsIterator+1,
                            answers: this.state.answers.concat(identifier)})
        }else{
            //round over
            console.log(this.state.answers)
        }
    }

    render() {
        // const element = this.makeButton("1")
        var layout = 0;
        if(layout){
            return (
                <div>
                    <h1>{this.state.questions[this.state.questionsIterator][0]}</h1>
                    {this.makeButton(this.state.questions[this.state.questionsIterator][1],1)}
                    {this.makeButton(this.state.questions[this.state.questionsIterator][2],2)}
                    <br/>
                    {this.makeButton(this.state.questions[this.state.questionsIterator][3],3)}
                    {this.makeButton(this.state.questions[this.state.questionsIterator][4],4)}
                </div>
            );
        }else{
            return (
                <div>
                    <h1>{this.state.questions[this.state.questionsIterator][0]}</h1>
                    {this.makeButton(this.state.questions[this.state.questionsIterator][1],1)}<br/>
                    {this.makeButton(this.state.questions[this.state.questionsIterator][2],2)}<br/>
                    {this.makeButton(this.state.questions[this.state.questionsIterator][3],3)}<br/>
                    {this.makeButton(this.state.questions[this.state.questionsIterator][4],4)}<br/>
                </div>
            );
        }
    }

}

export default QuestionPage