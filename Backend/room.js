var quiz = require('./quiz.js')
var query = require('./querries')
module.exports = class room {

    constructor(id, passcode, roomName, maxPlayers) {
        this.roomID = id;
        this.roomCode = passcode;
        this.roomName = roomName
        this.players = [];
        this.defaultQuiz = ["animals"];
        this.currentQuiz = this.newQuiz(this.defaultQuiz, 10);
        this.active = true;
        this.status = 0;
        this.maxtime = 5;
        this.maxPlayers = maxPlayers;
    }
    

    //returns the ID of the room
    getRoomId() {
        return this.roomID
    }

    //returns a welcome message
    showWelcomeMsg() {
        return "Welcome to the quiz room"
    }

    //creates a new quiz and sets the current quiz
    //inputs are the category and number of questions for the quiz
    newQuiz(category, numOfQuestions) {
        var newQuiz = new quiz(category, numOfQuestions);
        
        return newQuiz
    }

    //closes a room by setting active to false
    //returns the active property
    closeRoom() {
        this.active = false;
        return this.active;
    }

    //tests the connection to the database
    testDatabaseConnection()
    {
        var testQuery = new query();
        //testQuery.getTestData();
    }

}

