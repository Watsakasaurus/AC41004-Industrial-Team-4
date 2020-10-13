import React, { Component } from 'react';
import Menu from './components/Menu';
import Splash from './components/Splash';
import EnterNickname from './components/EnterNickname';
import QuestionPage from './components/QuestionPage';
import ResultsPage from './components/Results';
import {RoomConfigure} from './components/RoomConfigure'   

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nickname: "",
      inApp: false,
      inQs: false,
      response: '',
      post: '',
    }
  }

  // setNickname - Function Purpose : 
  // Passed down as a prop to the EnterNickname component to allow that component to pass the nickname up.
  // Sets the nickname into app.js state
                      
  setNickname(newNickname) {
    console.log(newNickname);
    this.setState({nickname: newNickname})

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

  // Using this for testing :)
  onClick(){
    this.setState({inApp: true})
  }

  onMenuClick(id){
    switch(id) {
      //Create room button
      case 1:
        //TODO ask for code from backend
        console.log("Create Room")
        this.setState({inQs: true})
        break;
      //Room code button
      case 2:
        console.log("Enter room code")
        break;
      // O button
      case 3:
        console.log("O Button")
        break;
      // X button
      case 4:
        console.log("X Button")
        this.setState({nickname: false})
        break;
      default:

    }
  }

  returnComponent(compID){
    switch(compID) {
      case 1:
        return(
          <Splash onClick={this.onClick.bind(this)}/>
        );
      case 2:
        return(
          <EnterNickname changeValue={this.setNickname.bind(this)}/>
        );
      case 3:
        return(
          <RoomConfigure/>
        ); 
      case 4:
        return(
          <ResultsPage></ResultsPage>
        );
      case 5:
        return(
          <Menu playerNickname ={this.state.nickname} onClick={this.onMenuClick.bind(this)} />
        );
      default:
        return(
          <h1>You probably shouldnt be seeing this </h1>
        );
    }
    
  }

  

  // Yes the code below this is an utter mess, its for testing, dont panic ;)
  render() {

    var compNo = -1;
    if(!this.state.inApp){
      compNo = 1;
    }else if(this.state.inApp && !this.state.nickname){
      compNo = 2;
    }else if(this.state.nickname && !this.state.inQs){
      compNo = 5; 
    }else if(this.state.inQs){
      compNo = 3;
    }


    return (
      <div>
        {this.returnComponent(compNo)}                        
      </div>
         
         
    )

  };
}


export default App;


