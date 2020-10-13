import React, { Component } from 'react';
import Menu from './components/Menu';
import Splash from './components/Splash';
import EnterNickname from './components/EnterNickname';
import QuestionPage from './components/QuestionPage';
import ResultsPage from './components/Results';
import {RoomConfigure} from './components/RoomConfigure'   

const testQuestions = [["This drink contains caffeine.","A Mineral water","B Orange juice","C Coffee","D Beer",3],
                      ["Finish the proverb:","Poets are born, ________.","A ...not made.","B ...but can also be made.","C ...but thats not for sure.","D ..., long live the poets!",1],
                      ["If a TV program is rated G then this is true.","A It contains moderate violence.","B It contains mild sexual situations.","C It is suitable for all audiences.","D It is suitable for young children.",3],
                      ["The theory of relativity was introduced in physics by this man.","A Galileo Galilei","B Albert Einstein","C Archimedes","D Isaac Newton",2],
                      ["The symbol for the chemical element iron is this.","A I","B Fe","C Zn","D Br",2],
                      ["He author of the novel A Portrait of the Artist as a Young Man is this writer.","A T. S. Eliot","B Samuel Beckett","C William Faulkner","D James Joyce",4],
                      ["The capital of Mongolia is this city.","A Davao","B Islamabad","C Quezon","D Ulaanbaatar",4],
                      ["The US bought Alaska in this year.","A 1942","B 1882","C 1854","D 1867",4],
                      ["The 23rd US President was in office during this period.","A 1909 - 1913","B 1889 - 1893","C 1837 - 1841","D 1877 - 1881",2],
                      ["Mitochondrias function in cells is to perform this.","A To control chemical reactions within the cytoplasm","B To store information needed for cellular division","C To convert organic materials into energy","D To process proteins targeted to the plasma membrane",3]]


const components = {
  SPLASH: 1,
  NICKNAME: 2,
  QUESTION: 3,
  RESULTS: 4,
  MENU: 5,
  ROOMCONF: 6
}


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nickname: "",
      currentComp: components.SPLASH,
      response: '',
      post: '',
    }
  }

  // setNickname - Function Purpose : 
  // Passed down as a prop to the EnterNickname component to allow that component to pass the nickname up.
  // Sets the nickname into app.js state           
  setNickname(newNickname) {
    console.log(newNickname);
    this.setState({nickname: newNickname, currentComp: components.MENU})

    //Pass username to server
    fetch('/username' , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({post: newNickname})
    })
    .then((result) => result.json())
    .then((info) => { console.log(info); })

  }

  // called by roomConfigure component when the user presses the submit button
  roomConfigureSubmit(data){
    this.setState({currentComp: components.QUESTION})
  }

  // called by Splash component when user presses begin button
  onClick(){
    this.setState({currentComp: components.NICKNAME})
  }

  // called by Menu component user pressed a button
  onMenuClick(id){
    // switch statement depending on which button was pressed
    switch(id) {
      //Create room button
      case 1:
        //TODO ask for code from backend
        console.log("Create Room")
        this.setState({currentComp: components.ROOMCONF})
        break;
      //Room code button
      case 2:
        console.log("Enter room code")
        break;
      // O button
      case 3:
        console.log("O Button")
        break;
      // X button, returns user to nickname screen
      case 4:
        console.log("X Button")
        this.setState({nickname: false, currentComp: components.NICKNAME});
        break;
      default:

    }
  }

  // returns the JSX of a component depending on compID value passed in
  returnComponent(compID){
    switch(compID) {
      case components.SPLASH:
        return(
          <Splash onClick={this.onClick.bind(this)}/>);
      case components.NICKNAME:
        return(
          <EnterNickname changeValue={this.setNickname.bind(this)}/>);
      case components.QUESTION:
        return(
          <QuestionPage questions={testQuestions}
        ></QuestionPage>); 
      case components.RESULTS:
        return(
          <ResultsPage></ResultsPage>);
      case components.MENU:
        return(
          <Menu playerNickname ={this.state.nickname} onClick={this.onMenuClick.bind(this)} />);
      case components.ROOMCONF:
        return(
          <RoomConfigure submit={this.roomConfigureSubmit.bind(this)}/>);
      default:
        return(
          <h1>An Error has occured, please refresh your page.</h1>);
    }
    
  }

  

  // Render a component based on the state variable currentComp
  render() {
    return (
      <div>
        {this.returnComponent(this.state.currentComp)}                        
      </div>
    )
  };
}


export default App;


