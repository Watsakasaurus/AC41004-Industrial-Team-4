var quiz = require('./quiz.js')

module.exports = class room {
    //quiz = require('./quiz.js')

    constructor(id, passcode/*, players, category, numOfQuestions, difficulty*/) {
        this.roomID = id;
        this.roomCode = passcode;
        this.players = [];
        //this.currentQuiz = newQuiz(category, numOfQuestions, difficulty);
        this.currentQuiz = null;
        this.active = true;
        //console.log("Room created");
        //console.log("roomID: " + this.roomID + " passcode: " + this.roomCode + " status: " + this.active);
    }

    getRoomId() {
        return this.roomID
    }

    showWelcomeMsg() {
        return "Welcome to the quiz room"
    }

    newQuiz(category, numOfQuestions, difficulty) {
        var newQuiz = new quiz(category, numOfQuestions, difficulty);
        //return quiz;
        this.currentQuiz = newQuiz;
    }

    closeRoom() {
        this.active = false;
        return this.active;
    }

    //module.exports = {
    //Room: Room
    //closeRoom(): closeRoom()
    //}
}

