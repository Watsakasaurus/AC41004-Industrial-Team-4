//Include expressJS

const express = require('express')
let room = require('./room.js')
//let quiz = require('./quiz.js')
let player = require('./player.js')
let crypto = require('crypto')
const app = express()
const PORT = 5000

var nonactivePlayers = [];
var rooms = [];

function addNewRoom() {
    //let code = Math.floor(Math.random() * 10000);
    let code = crypto.randomBytes(10).toString('hex');
    var check = findRoomByCode(code);
    while (check >= 0) {
        code = crypto.randomBytes(10).toString('hex');
        check = findRoomByCode(code);
    }
    var newRoom = new room(rooms.length, code);
    rooms.push(newRoom);
    const roomMsg = newRoom.showWelcomeMsg();
    //res.send(`<h1>${roomMsg}</h1>`);
    return newRoom.roomCode;
}

function addNewPlayer(newPlayerName) {
    var newPlayer = new player(newPlayerName);
    nonactivePlayers.push(newPlayer);
    console.log("new player: " + nonactivePlayers[0].name);
}

function findRoomByCode(code) {
    var found = rooms.findIndex(r => r.roomCode == code);
    return found;
}

function findNonactivePlayerByNickname(nickname) {
    var found = nonactivePlayers.findIndex(p => p.name == nickname);
    if (found >= 0) {
        return found;
    }
    console.log("Player with nickname '" + nickname + "' doesn't exist in nonactive players array.");
    return found;
}

function findPlayerByNickname(nickname, roomCode) {
    var i = findRoomByCode(roomCode);
    if (i >= 0) {
        var found = rooms[i].players.findIndex(p => p.name == nickname);
        console.log("players index: " + found);
        return found;
    }
    console.log("Room with passcode '" + roomCode + "' doesn't exist.");
    return i;
}

function addNewQuiz(roomCode, category, numOfQuestions, difficulty) {
    var index = findRoomByCode(roomCode);
    rooms[index].newQuiz(category, numOfQuestions, difficulty);
    console.log("Quiz category: " + rooms[index].currentQuiz.category + " num: " + rooms[index].currentQuiz.numOfQuestions + " difficulty: " + rooms[index].currentQuiz.difficulty);
}

function findNonactiveRooms() {
    var nonactive = [];
    for (i = 0; i < rooms.length; i++) {
        if (rooms[i].active === false) {
            nonactive.push(rooms[i].roomID);
            console.log("Removing room ID: " + rooms[i].roomID)
        }
    }
    return nonactive;
}

function removeNonactiveRooms() {
    var indexes = findNonactiveRooms();
    console.log(indexes)

    //https://stackoverflow.com/questions/3396088/how-do-i-remove-an-object-from-an-array-with-javascript
    for (i = 0; i < indexes.length; i++) {
        rooms = rooms.filter((item) => item.roomID !== indexes[i]);
    }
}

//moves a player from the nonactivePlayers array into the players array of the desired room
//inputs are the nickname of the player to be moved, and the passcode of the room the player should be added to
//returns false if the player isn't moved due to no room with the given passcode existing and returns true if the player is successfully moved
function movePlayerToRoom(nickname, roomCode) {
    var index = findRoomByCode(roomCode);
    if(index < 0){
        console.log("Room with passcode '" + roomCode + "' doesn't exist.");
        return false;
    }
 
    //create new player with the same information as the one to be moved, and add it to the player array in the correct room
    var playerToBeAdded = new player(nickname);
    rooms[index].players.push(playerToBeAdded);
 
    //remove player (that has just been moved into room) from nonActivePlayers array
    var i = findNonactivePlayerByNickname(nickname);
    nonactivePlayers.splice(i, 1);
    //nonactivePlayers = nonactivePlayers.filter((item) => item.name !== nickname);
 
    console.log("Player " + nickname + " moved to room " + roomCode);
    return true;
}

//Server start up message
function showServerStartUpMessage() {
    console.log("Server is running....");
    console.log(`Listening for connections on ${PORT}`);
}

function startServer() {
    app.listen(PORT, () => showServerStartUpMessage())
}

//Initial connection to the server
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the quiz</h1>`);
    /*addNewRoom();
    addNewRoom();
    addNewRoom();
    console.log(rooms);
    rooms[0].closeRoom();
    rooms[5].closeRoom();
    rooms[3].closeRoom();
    removeNonactiveRooms();
    console.log(rooms);
    addNewPlayer("arran");
    console.log("Non Active Players: " + nonactivePlayers);
    movePlayerToRoom("arran", 1);
    console.log("Room 1 players: " + rooms[1].players[0].name);
    console.log("Non Active Players: " + nonactivePlayers);*/
    //console.log(rooms);
    //addNewQuiz(rooms[0].roomCode, "animals", 5, "easy");
    //rooms[0].testDatabaseConnection();
    //console.log(rooms);
    addNewRoom();
    addNewRoom();
    addNewRoom();
    addNewPlayer("arran");
    console.log("Non Active Players: " + nonactivePlayers);
    movePlayerToRoom("arran", rooms[1].roomCode);
    console.log("Non Active Players: " + nonactivePlayers);
    console.log(rooms);
    findPlayerByNickname("arran", rooms[1].roomCode);
});

//Start the server
startServer();
