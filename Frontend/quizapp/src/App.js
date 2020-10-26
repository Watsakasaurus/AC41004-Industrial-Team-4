import React, { Component } from 'react';
import Menu from './components/Menu';
import Splash from './components/Splash';
import EnterNickname from './components/EnterNickname';
import QuestionPage from './components/QuestionPage';
import ResultsPage from './components/Results';
import RoomConfigure from './components/RoomConfigure';
import EnterRoomNumber from './components/EnterRoomNumber';
import Lobby from './components/Lobby';
import QuizConfigure from './components/QuizConfigure';
import Scoreboard from './components/Scoreboard';


const testQuestions =
  [["This drink contains caffeine.", "A Mineral water", "B Orange juice", "C Coffee", "D Beer", 3],
  ["Finish the proverb:", "Poets are born, ________.", "A ...not made.", "B ...but can also be made.", "C ...but thats not for sure.", "D ..., long live the poets!", 1],
  ["If a TV program is rated G then this is true.", "A It contains moderate violence.", "B It contains mild sexual situations.", "C It is suitable for all audiences.", "D It is suitable for young children.", 3],
  ["The theory of relativity was introduced in physics by this man.", "A Galileo Galilei", "B Albert Einstein", "C Archimedes", "D Isaac Newton", 2],
  ["The symbol for the chemical element iron is this.", "A I", "B Fe", "C Zn", "D Br", 2],
  ["He author of the novel A Portrait of the Artist as a Young Man is this writer.", "A T. S. Eliot", "B Samuel Beckett", "C William Faulkner", "D James Joyce", 4],
  ["The capital of Mongolia is this city.", "A Davao", "B Islamabad", "C Quezon", "D Ulaanbaatar", 4],
  ["The US bought Alaska in this year.", "A 1942", "B 1882", "C 1854", "D 1867", 4],
  ["The 23rd US President was in office during this period.", "A 1909 - 1913", "B 1889 - 1893", "C 1837 - 1841", "D 1877 - 1881", 2],
  ["Mitochondrias function in cells is to perform this.", "A To control chemical reactions within the cytoplasm", "B To store information needed for cellular division", "C To convert organic materials into energy", "D To process proteins targeted to the plasma membrane", 3]]

const testPlayers = ['Alfie', 'Callum', 'Sophie', 'Andrew', 'Peter', 'Arran', 'Nicole', 'Callum2', 'Ross', 'Aylin']

const testCategorys = [{ value: "animals", label: "Animals" },
{ value: "Brain Teasers", label: "Brain Teasers" },
{ value: "celebrities", label: "Celebrities" },
{ value: "literature", label: "Literature" }/*,
{ value: "general", label: "General" },
{ value: "science-technology", label: "Science & Tech" },
{ value: "people", label: "Famous People" }*/]

const components = {
  SPLASH: 1,
  NICKNAME: 2,
  QUESTION: 3,
  RESULTS: 4,
  MENU: 5,
  ROOMCONF: 6,
  LOBBY: 7,
  ROOMCODE: 8,
  QUIZCONFIG: 9,
  SCOREBOARD: 10
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nickname: "",
      currentComp: components.SPLASH,
      response: '',
      post: '',
      roomCode: '12345678910',
      currentInfo: [],
      players: [],

      host: false,
      gameState: 0,
      questions: testQuestions,
      numOfQuestions: 10,
      maxTime: 5
    }
  }

  handleSubmit() {
    console.log("what are you doing")
  }
  // setNickname - Function Purpose : 
  // Passed down as a prop to the EnterNickname component to allow that component to pass the nickname up.
  // Sets the nickname into app.js state           
  setNickname(newNickname) {
    console.log(newNickname);
    this.setState({ nickname: newNickname, currentComp: components.MENU })
  }

  // Called by roomConfigure component when the user presses the submit button
  roomConfigureSubmit(data) {
    this.setState({ currentComp: components.LOBBY })
    let post = "post"
    fetch('/username', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(
        { post: this.state.nickname }
      ),
    }).then((result) => result.json()).then((info) => { console.log(info); })

  }

  // Called by Splash component when user presses begin button
  onSplashClick() {
    this.setState({ currentComp: components.NICKNAME })
  }

  // Called by Lobby component when user presses a button
  onLobbyClick(id) {

    // switch statement depending on which button was pressed
    switch (id) {
      // Create start game button
      case 1:
        var text = { "roomCode": this.state.roomCode };
        //Pass startroom to server
        fetch('/startroom', {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(text)
        }).then((result) => result.json()).then((info) => this.saveResToState(info))
        break;
      // Exit lobby button
      case 2:
        return (
          this.setState({ currentComp: components.MENU })
        )
    }
  }

  // Called by RoomCode component when user presses a button
  onRoomClick(id, roomcode) {

    // switch statement depending on which button was pressed
    switch (id) {

      // Green button
      case 1:
        this.lobbyWaitRefresh();
        return (
          this.setState({ 
            roomCode: roomcode,
            currentComp: components.LOBBY,
            host: false
          })
        );

      // Exit button
      case 2:
        return (
          this.setState({ currentComp: components.MENU })
        )
    }
  }

  saveResToState(data) {
    console.log("Room Config Return:", data);
    // console.log(data);
    this.setState({ roomCode: data.roomCode });
  }

  onRoomConfClick(id, roomName, playerCount) {
    // switch statement depending on which button was pressed
    // var stuff;
    switch (id) {

      // Create next button
      case 1:
        var text = {
          "post": this.state.nickname,
          "roomName": roomName,
          "playerCount": playerCount
        };
        console.log("Room Config Send:", text);
        //Pass username to server
        fetch('/username', {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(text)
        }).then((result) => result.json()).then((info) => this.saveResToState(info))
        // ).then((info) => { this.setState({currentInfo: info})})

        // response.text();
        // console.log(stuff);
        console.log("Info:" + this.state.currentInfo);


        return (
          this.setState({ currentComp: components.QUIZCONFIG })
        );

      // Exit button
      case 2:
        return (
          this.setState({ currentComp: components.MENU })
        )
    }
  }

  onQuizConfigClick(categorys, qCount, qTime, nickname, roomcode) {
    // switch statement depending on which button was pressed
    // console.log(this.props);
    // console.log(categorys);
    var catVals = [];
    for (var x in categorys) {
      catVals.push(categorys[x].value)
    }

    // this.setState({numOfQuestions: qCount,
    //   maxTime: qTime})
    var text = {
      roomCode: roomcode,
      categorys: catVals,
      numOfQuestions: qCount,
      maxTime: qTime
    };
    console.log("Quiz Config Send:", text);

    // console.log("Sending")
    // console.log(text)

    fetch("/configurequiz", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(text),
    })
      .then((result) => result.json())
      .then((info) => {
        console.log("Quiz Config Return: ", info);
      });

    this.lobbyWaitRefresh();

    this.setState({ currentComp: components.LOBBY })
    this.setState({ host: true })

  }

  savePlayersToState(data) {
    console.log("Players Return:", data);
    // console.log(data);
    this.setState({
      players: data.nicknames
    });
    console.log(this.state.players)
  }

  lobbyWaitRefresh() {

    this.refreshTimer = setInterval(() => {

      // This fetch only requires roomcode
      var text = { "roomCode": this.state.roomCode };

      // Perform the fetch, savePlayersToState is called to store the response 
      fetch('/roomallnicknames', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(text)
      }).then((result) => result.json()).then((info) => {this.setState({
          players: info.nicknames,
          gameState: info.status,
          maxTime: info.maxTime,
          numOfQuestions: info.numOfQuestions
        });
        console.log(info)}
      )

      console.log("gameState: " +this.state.gameState)
      console.log(this.state.numOfQuestions)
      console.log(this.state.maxTime)

      if (this.state.gameState == 6){
        this.stopLobbyRefresh()
      }

    }, 500);
  }

  stopLobbyRefresh() {
    
    clearInterval(this.refreshTimer);
    this.onQuizStart();
    // this.setState({ currentComp: components.QUESTION })
  }

  // called by Menu component user pressed a button
  onMenuClick(id) {

    // switch statement depending on which button was pressed
    switch (id) {

      //Create room button
      case 1:
        return (
          this.setState({ currentComp: components.ROOMCONF })
        );

      //Room code button
      case 2:
        return (
          this.setState({ currentComp: components.ROOMCODE })
        );

      // O button
      case 3:
        console.log("O Button")
        break;

      // X button, returns user to nickname screen
      case 4:
        console.log("X Button")
        this.setState({ nickname: false, currentComp: components.NICKNAME });
        break;

      default:
    }
  }

  onQuizStart(){
    // var text = { "roomCode" : this.state.roomCode}
    //     console.log("Questions Send:", text);
    //     fetch('/questions', {
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(text),
    //     }).then((result) => result.json()).then((info) => {  this.reformatQuestions(info) })
    this.fetchQuestion();
  }

  fetchQuestion() {
    var text = {
        roomCode: this.state.roomCode,
        nickname: this.state.nickname,
        questionNumber: 1

    };
    console.log("Question Send:", text);

    fetch("/question", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(text),
    })
        .then((result) => result.json())
        .then((info) => {
            this.formatFetchedQuesiton(info);
        });
}

formatFetchedQuesiton(info){
    console.log("Question Return", info);
    var newQ = [info.question];
    for(var x = 0; x<info.options.length; x++){
        newQ.push(info.options[x]);
    }
    console.log("newQ: ", newQ)
    this.setState({questions: [newQ],
                   currentComp: components.QUESTION })
}

onQuizEnd(){
  this.setState({ currentComp: components.SCOREBOARD })
}

onScoreboardClick(){

  // TODO Add Playagain end point

  this.setState({currentComp: components.MENU})
 
}


  // reformatQuestions(info){
  //   console.log("Questions Return", info);
  //   // [["This drink contains caffeine.", "A Mineral water", "B Orange juice", "C Coffee", "D Beer", 3],
  //   let reformedQs = []
  //   if(info.length){
  //     for(var x in info){
  //       // console.log(info[x]);
  //       reformedQs.push([info[x].question,info[x].option1,info[x].option2,info[x].option2,info[x].option4, 
  //         [info[x].option1,info[x].option2,info[x].option2,info[x].option4].indexOf(info[x].answer)+1]);
  //     }
  //   }else{
  //     reformedQs = testQuestions;
  //   }
    


  //   console.log(reformedQs)
  //   this.setState({ questions: reformedQs,
  //                   currentComp: components.QUESTION })
  // }


  // returns the JSX of a component depending on compID value passed in
  returnComponent(compID) {
    switch (compID) {
      case components.SPLASH:
        return (
          <Splash onClick={this.onSplashClick.bind(this)} />);
      case components.NICKNAME:
        return (
          <EnterNickname changeValue={this.setNickname.bind(this)} />);
      case components.QUESTION:
        return (
          <QuestionPage endQuiz={this.onQuizEnd.bind(this)} questions={this.state.questions} nickname={this.state.nickname} roomcode={this.state.roomCode} maxTime={this.state.maxTime} numOfQuestions={this.state.numOfQuestions}/>);
      case components.RESULTS:
        return (
          <ResultsPage></ResultsPage>);
      case components.MENU:
        return (
          <Menu playerNickname={this.state.nickname} onClick={this.onMenuClick.bind(this)} />);
      case components.ROOMCONF:
        return (
          <RoomConfigure onClick={this.onRoomConfClick.bind(this)} />);
      case components.ROOMCODE:
        return (
          <EnterRoomNumber onClick={this.onRoomClick.bind(this)} nickname={this.state.nickname} /> );
      case components.LOBBY:
        return (
          <Lobby onClick={this.onLobbyClick.bind(this)} host={this.state.host} players={this.state.players} roomCode={this.state.roomCode} /> );
      case components.QUIZCONFIG:
        return (
          <QuizConfigure testCategorys={testCategorys} onClick={this.onQuizConfigClick.bind(this)} playerNickname={this.state.nickname} roomcode={this.state.roomCode} /> );
      case components.SCOREBOARD:
        return (
          <Scoreboard roomCode = {this.state.roomCode} onClick={this.onScoreboardClick.bind(this)}/>);
      default:
        return (
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


