import React, { Component } from 'react';
import Menu from './components/Menu';
import Splash from './components/Splash';
import EnterNickname from './components/EnterNickname';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nickname: "",
      inApp: false
    }
  }

  // setNickname - Function Purpose : 
  // Passed down as a prop to the EnterNickname component to allow that component to pass the nickname up.
  // Sets the nickname into app.js state
                      
  setNickname(newNickname) {
    console.log(newNickname);
    this.setState({nickname: newNickname})
  }

  onClick(){
    this.setState({inApp: true})
  }

  render() {
    return (
      <div>
        {!this.state.inApp ?
          <Splash onClick={this.onClick.bind(this)} />
          :
          <div></div>}
        
        {this.state.inApp && !this.state.nickname ?
          <EnterNickname changeValue={this.setNickname.bind(this)}/>
          :
          <div></div>}

        {this.state.nickname ?
          <Menu playerNickname ={this.state.nickname} onClick={this.onClick.bind(this)} />
          :
          <div></div>}


        
      </div>
    )

  };
}


export default App;
