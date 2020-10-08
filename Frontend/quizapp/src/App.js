import React, { Component } from 'react';
import Menu from './components/Menu';
import Splash from './components/Splash';

class App extends Component {   

  constructor(props) {
    super(props);
    
    this.state = {
      inApp: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log();
    this.setState({inApp: true});
  }

  render() {

    return (
      <div>
        {this.state.inApp ? 
        <Menu playerNickname = "Alfie" onClick={this.handleClick}/>
        : 
        <Splash onClick={this.handleClick} />}
      </div>
    )

  };
}


export default App;
