import React, { Component } from 'react';
import Menu from './Components/Menu';
import Splash from './Components/splash';
import EnterNickname from './Components/EnterNickname';
import QuestionPage from './Components/QuestionPage';
import ResultsPage from './Components/Results';

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
          <QuestionPage questions={[["This drink contains caffeine.","A Mineral water","B Orange juice","C Coffee","D Beer",3],
          ["Finish the proverb:","Poets are born, ________.","A ...not made.","B ...but can also be made.","C ...but thats not for sure.","D ..., long live the poets!",1],
          ["If a TV program is rated G then this is true.","A It contains moderate violence.","B It contains mild sexual situations.","C It is suitable for all audiences.","D It is suitable for young children.",3],
          ["The theory of relativity was introduced in physics by this man.","A Galileo Galilei","B Albert Einstein","C Archimedes","D Isaac Newton",2],
          ["The symbol for the chemical element iron is this.","A I","B Fe","C Zn","D Br",2],
          ["He author of the novel A Portrait of the Artist as a Young Man is this writer.","A T. S. Eliot","B Samuel Beckett","C William Faulkner","D James Joyce",4],
          ["The capital of Mongolia is this city.","A Davao","B Islamabad","C Quezon","D Ulaanbaatar",4],
          ["The US bought Alaska in this year.","A 1942","B 1882","C 1854","D 1867",4],
          ["The 23rd US President was in office during this period.","A 1909 - 1913","B 1889 - 1893","C 1837 - 1841","D 1877 - 1881",2],
          ["Mitochondrias function in cells is to perform this.","A To control chemical reactions within the cytoplasm","B To store information needed for cellular division","C To convert organic materials into energy","D To process proteins targeted to the plasma membrane",3]]}
        ></QuestionPage>
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
