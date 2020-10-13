//Include expressJS

const express = require('express')
let room = require('./room.js')
let player = require('./player.js')
let crypto = require('crypto')
const app = express()
const bodyParser = require('body-parser')

const PORT = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/test', (req, res)=>{
    queries.getTestData().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.error(err);
    });
});
var nonactivePlayers = [];
var rooms = [];

//creates and adds a new room to the rooms array
//returns the new room's generated passcode
function addNewRoom() {
    let code = crypto.randomBytes(10).toString('hex');
    var check = findRoomByCode(code);
    //while a room with the generated code already exists, generate a new random code
    while (check >= 0) {
        code = crypto.randomBytes(10).toString('hex');
        check = findRoomByCode(code);
    }

    //create and add a new room to the rooms array
    var newRoom = new room(rooms.length, code);
    rooms.push(newRoom);
    const roomMsg = newRoom.showWelcomeMsg();
    return newRoom.roomCode;
}

//creates and adds a new player to the nonactivePlayers array
//input is the nickname of the player to be added
function addNewPlayer(newPlayerName) {
    var newPlayer = new player(newPlayerName);
    nonactivePlayers.push(newPlayer);
    console.log("new player: " + nonactivePlayers[0].name);
}

//finds the index of a room with a given passcode in the rooms array
//input is the passcode to search for
//returns -1 if no room with the given code is found
function findRoomByCode(code) {
    var found = rooms.findIndex(r => r.roomCode == code);
    return found;
}

//finds the index of a player with a given nickname in the nonactivePlayers array
//input is the nickname to search for
//returns -1 if no player with the given nickname is found
function findNonactivePlayerByNickname(nickname) {
    var found = nonactivePlayers.findIndex(p => p.name == nickname);
    if (found >= 0) {
        return found;
    }
    console.log("Player with nickname '" + nickname + "' doesn't exist in nonactive players array.");
    return found;
}

//finds the index of a player with a given nickname in a room in the rooms array
//inputs are the nickname of the player and the passcode of the room to search for
//returns -1 if no room with the given code or player with the given nickname is found
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

//adds a new quiz to a given room
//inputs are the room's passcode, the category and number of questions
//returns true if a new quiz was successfully added and false if not
function addNewQuiz(roomCode, category, numOfQuestions) {
    var index = findRoomByCode(roomCode);
    if (index >= 0) {
        rooms[index].newQuiz(category, numOfQuestions);
        console.log("Quiz category: " + rooms[index].currentQuiz.category + " num: " + rooms[index].currentQuiz.numOfQuestions);
        return true;
    }
    return false; //if no room with the given passcode exists
}

//finds the indexes of all nonactive rooms in the rooms array
//returns an array with the indexes of all nonactive rooms
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

//removes all rooms that are no longer active
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
//returns false if the player isn't moved due to no room with the given passcode existing or no player with the given nickname existing and returns true if the player is successfully moved
function movePlayerToRoom(nickname, roomCode) {
    //check if a room with the given roomCode exists
    var index = findRoomByCode(roomCode);
    if (index < 0) {
        console.log("Room with passcode '" + roomCode + "' doesn't exist.");
        return false; //if no room exists
    }

    //check if a player with the given nickname exists
    var i = findNonactivePlayerByNickname(nickname);
    if (i < 0) {
        return false; //if the player isn't in the nonActivePlayers array
    }

    //create new player with the same information as the one to be moved, and add it to the player array in the correct room
    var playerToBeAdded = new player(nickname);
    rooms[index].players.push(playerToBeAdded);

    //remove the player (that has just been moved into room) from nonActivePlayers array
    nonactivePlayers.splice(i, 1);

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
    addNewRoom();
    addNewPlayer("nicole");
    addNewPlayer("arran");
    movePlayerToRoom("nicole", rooms[0].roomCode);
    movePlayerToRoom("arran", rooms[0].roomCode);
    rooms[0].testDatabaseConnection();
    //addNewQuiz(rooms[0].roomCode, "", 1);
});

app.post('/username', (req, res) =>{
    console.log('Post request recieved: ' + req.body.post)

})




//Start the server
startServer();

