import React, { Component } from 'react';
import Menu from './components/Menu';
import Splash from './components/Splash';
import EnterNickname from './components/EnterNickname';
import QuestionPage from './components/QuestionPage';
import ResultsPage from './components/Results';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nickname: "",
      inApp: false,
      inQs: false,
    }
  }

  // setNickname - Function Purpose : 
  // Passed down as a prop to the EnterNickname component to allow that component to pass the nickname up.
  // Sets the nickname into app.js state
                      
  setNickname(newNickname) {
    console.log(newNickname);
    this.setState({nickname: newNickname})
  }

  // Using this for testing :)
  onClick(){
    this.setState({inApp: true})
  }

  onQClick(){
    this.setState({inQs: true})
  }

  returnComponent(compID){
    switch(compID) {
      case 1:
        return(
          <Splash onClick={this.onClick.bind(this)}/>
        );
        // code block
        break;
      case 2:
        return(
          <EnterNickname changeValue={this.setNickname.bind(this)}/>
        );
        break;
      case 3:
        return(
          <QuestionPage questions={[["Which of thghese is not a car","Saab", "Volvo", "BMW","Dog"],
                                ["Which of theghse is not a car","Saab", "Volvo", "BMW2","Dog2"],
                                ["Which of these is not a car","Saab", "Volvo", "BMW3","Dog3"],
                                ["Which of thesghjghe is not a car","Saab", "Volvo", "BMW4","Dog4"],
                                ["Which of these idfs not a car","Saab", "Volvo", "BMW5","Dog5"],
                                ["Which of these is not a car","Saab", "Volvo", "BMW4","Dog4"],
                                ["Which of these isgh not a car","Saab", "Volvo", "BMW4","Dodg4"],
                                ["Which of these ifs not a car","Saab", "Volvo", "BMW4","Dovdg4"],
                                ["Which of these isg not a car","Saab", "Volvo", "BMW4","Dosdg4"],
                                ["Which of these is hnot a car","Saab", "Volvo", "BMW4","Dovdg4"],
                                ["Which of these is njot a car","Saab", "Volvo", "BMW4","Dovdg4"],
                                ["Which of these is not a car","Saab", "Volvo", "BMW4","Doddg4"],
                                ["Which of these is nokt a car","Saab", "Volvo", "BMW4","Dosdg4"],
                                ["Which of these is notk a car","Saab", "Volvo", "BMW4","Dovgd4"],
                                ["Which of these is not kla car","Saab", "Volvo", "BMW4","Ddog4"],
                                ["Which of these is not a lcar","Saab", "Volvo", "BMW4","sDog4"],
                                ["Which of these is not a clar","Saab", "Volvo", "BMW4","Dog4fd"],
                                ["Which of these is not a calr","Saab", "Volvo", "BMW4","Dogcx4"],]}
        ></QuestionPage>
        );
        break;
      case 4:
        return(
          <ResultsPage></ResultsPage>
        );
            // code block
        break;
      case 5:
        return(
          <Menu playerNickname ={this.state.nickname} onClick={this.onQClick.bind(this)} />
        );
        break;
      default:
        return(
          <h1>You probably shouldnt be seeing this </h1>
        );
    }
    
  }

  

  // Yes the code below this is an utter mess, its for testing, dont panic ;)
  render() {


// <div>
//         {!this.state.inApp ?
//           <Splash onClick={this.onClick.bind(this)} />
//           :
//           <div></div>}
        
//         {this.state.inApp && !this.state.nickname ?
//           <EnterNickname changeValue={this.setNickname.bind(this)}/>
//           :
//           <div></div>}

//         {this.state.nickname ?

//           // When calling the menu, pass the player nick name as a prop
//           <Menu playerNickname ={this.state.nickname} onClick={this.onClick.bind(this)} />
//           :
//           <div></div>}


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
