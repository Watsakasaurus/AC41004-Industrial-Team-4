import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionPage from './components/QuestionPage';

function App() {
  return (
    <div>
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
      >
      </QuestionPage>
      {/* <p>Look here mate</p> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
