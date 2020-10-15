//Include expressJS

const express = require('express')
let room = require('./room.js')
let player = require('./player.js')
let crypto = require('crypto')
const app = express()
const bodyParser = require('body-parser')
const { response } = require('express')
const queries = require('./querries.js')
var test1query = new queries();
const PORT = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var nonactivePlayers = [];
var rooms = [];

//creates and adds a new room to the rooms array
//returns the new room's generated passcode
function addNewRoom(category) {
    let code = crypto.randomBytes(10).toString('hex');
    var check = findRoomByCode(code);
    //while a room with the generated code already exists, generate a new random code
    while (check >= 0) {
        code = crypto.randomBytes(10).toString('hex');
        check = findRoomByCode(code);
    }

    //create and add a new room to the rooms array
    var newRoom = new room(rooms.length, code, category);
    rooms.push(newRoom);
    const roomMsg = newRoom.showWelcomeMsg();
    return newRoom.roomCode;
}

//creates and adds a new player to the nonactivePlayers array
//input is the nickname of the player to be added
//returns true if a new player is successfully added and false if not
function addNewPlayer(newPlayerName) {
    //check if the nickname has already been taken by another player
    var taken = findNonactivePlayerByNickname(newPlayerName);
    if (taken < 0) {
        //create and add the new player
        var newPlayer = new player(newPlayerName);
        nonactivePlayers.push(newPlayer);
        console.log("new player: " + nonactivePlayers[nonactivePlayers.length - 1].name);
        return true;
    }
    return false;
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
    console.log("No player with nickname '" + nickname + "' in nonactive players array.");
    return found;
}

//finds the index of a player with a given nickname in a room in the rooms array
//inputs are the nickname of the player and the passcode of the room to search for
//returns -1 if no room with the given code or player with the given nickname is found
function findPlayerByNickname(nickname, roomCode) {
    var i = findRoomByCode(roomCode);
    if (i >= 0) {
        var found = rooms[i].players.findIndex(p => p.name == nickname);
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
    return falstartServerse; //if no room with the given passcode exists
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
//returns true if the player is successfully moved or false if the player isn't moved
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

    //check if the player's chosen nickname has already been taken for this room
    var taken = findPlayerByNickname(nickname, roomCode);
    if (taken >= 0) {
        console.log("nickname " + nickname + " already taken");
        return false; //if a player with this nickname is found in the room
    }

    //create new player with the same information as the one to be moved, and add it to the player array in the correct room
    var playerToBeAdded = new player(nickname);
    rooms[index].players.push(playerToBeAdded);

    //remove tstartServerhe player (that has just been moved into room) from nonActivePlayers array
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
    let newRoomCode = addNewRoom();
    console.log(newRoomCode);
    /*addNewPlayer("nicole");
    addNewPlayer("arran");
    movePlayerToRoom("nicole", rooms[0].roomCode);
    movePlayerToRoom("arran", rooms[0].roomCode);*/
    //addNewQuiz(newRoomCode, "'animals'", 10);
});

app.post('/username', (req, res) => {
    console.log('Post request recieved: New player in a new room')

    //Make new player object
    addNewPlayer(req.body.post);
    //Place player in a new room
    newRoomCode = addNewRoom();
    //Move the player to new room
    movePlayerToRoom(req.body.post, newRoomCode)

});

// Connection to the database to get number of questions 
app.get('/num_of_questions', (req, res) => {
    test1query.getTestData().then((data) => {
        res.status(200).json(data.rows);
    }).catch((err) => {
        console.error(err);
    });
});
// Second connection to the database to get question based on the category
app.get('/cat_of_questions', (req, res) => {
    test1query.getQuestions().then((data) => {
        res.status(200).json(data.rows);
    }).catch((err) => {
        console.error(err);
    });
});

app.get('/questions', (req, res)=>{
    console.log('Post request recieved: send questions to quiz')

    //Pick up roomcode in the request
    let roomCode = req.body.roomCode;

    //Find the room index in the array
    let roomIndex = findRoomByCode(roomCode)


    if (roomIndex < 0) //No room with that code exists
    {
        //Send status 3 not found
        console.log("Could not find room")
        res.send(JSON.stringify(
            {
                roomCode: roomCode,
                status: 3
            }
        ))
    }
    else //Otherwise send questions
    {
        let roomFound = rooms[roomIndex]
        res.send(JSON.stringify(rooms[roomIndex].currentQuiz.allQuestions))
    }
})


app.post('/roomadduser', (req, res) => {
    console.log('Post request recieved: New player in an existing room')

    //Pick up nickname and room code from JSON in the request
    let nickName = req.body.nickName;
    let roomCode = req.body.roomCode;

    //Make new player object
    addNewPlayer(nickName);

    let success = movePlayerToRoom(nickName, roomCode);

    //Failed to add the player into the room
    if (success === false) {
        //Send failure message back
        res.send(JSON.stringify({
            nickname: nickName,
            roomCode: newRoomCode,
            status: 4
        }))
    }
    else {
        //Send success message
        res.send(JSON.stringify({
            nickname: nickName,
            roomCode: newRoomCode,
            status: 0
        }))
    }
})

app.post('/roomallplayers', (req, res) => {
    console.log('Post request recieved: All players in an existing room (nicknames & scores)');

    //Pick up room code from JSON in the request
    let roomCode = req.body.roomCode;

    let index = findRoomByCode(roomCode);

    //if failed to find a room with the given passcode
    if (index < 0) {
        //Send failure message back
        res.send(JSON.stringify({
            roomCode: req.body.roomCode,
            status: 3,
            successful: false
        }))
    }
    else {
        //Send success message
        res.send(JSON.stringify({
            roomCode: req.body.roomCode,
            players: rooms[index].players,
            status: rooms[index].status,
            successful: true
        }))
    }

});

app.post('/roomallnicknames', (req, res) => {
    console.log("Post request recieved: All players' nicknames in an existing room");

    //Pick up room code from JSON in the request
    let roomCode = req.body.roomCode;

    let index = findRoomByCode(roomCode);

    //if failed to find a room with the given passcode
    if (index < 0) {
        //Send failure message back
        res.send(JSON.stringify({
            roomCode: req.body.roomCode,
            status: 3,
            successful: false
        }))
    }
    else {
        //create an array of the players' nicknames
        let nicknames = [];
        let nickname = "";
        let l = rooms[index].players.length;
        for (i = 0; i < l; i++) {
            nickname = rooms[index].players[i].name;
            nicknames.push(nickname);
        }

        //Send success message
        res.send(JSON.stringify({
            roomCode: req.body.roomCode,
            nicknames: nicknames,
            status: rooms[index].status,
            successful: true
        }))
    }

});

app.post('/startroom', (req, res) => {
    console.log('Post request recieved: Host wants to start the quiz');

    //Pick up room code, category and number of questions from JSON in the request
    let roomCode = req.body.roomCode;
    let category = req.body.category;
    let numOfQuestions = req.body.numOfQuestions;
    let maxTime = req.body.maxTime;

    let index = findRoomByCode(roomCode);

    //if failed to find a room with the given passcode
    if (index < 0) {
        //Send failure message back
        res.send(JSON.stringify({
            roomCode: req.body.roomCode,
            status: 3,
            successful: false
        }))
    }
    else {
        //create new quiz and add to the room
        addNewQuiz(roomCode, category, numOfQuestions);

        //update the room's max time
        rooms[index].maxtime = maxTime;

        //update the room's status
        rooms[index].status = 6;

        //Send success message
        res.send(JSON.stringify({
            roomCode: req.body.roomCode,
            status: rooms[index].status,
            successful: true
        }))
    }

});

//front end sending roomcode, nicknames, responses, maxtime, individualtimes and questionnumber
app.post('/questionresponse', (req, res) =>{
    console.log('Post request recieved: Responses from the players');

    //Pick up room code from JSON in the request
    let roomCode = req.body.roomCode;

    let index = findRoomByCode(roomCode);

    //if failed to find a room with the given passcode
    if (index < 0) {
        //Send failure message back
        res.send(JSON.stringify({
            roomCode: req.body.roomCode,
            status: 3,
            successful: false
        }))
    }
    else {
        //loop for checking each players answer
        for(i = 0; i < req.body.nickname.length; i++)
        {
            //compare user answer with correct one
            //allAnswers needs to be created
            if(req.body.response[i] === rooms[index].currentQuiz.allAnswers[req.body.questionnumber-1])
            {
                //if correct, update score of player
                //search for the player in the room with the name matching the one who gave this answer
                for(j = 0; j < rooms[index].players.length; j++)
                {
                    //if player nickname given in req.body equals the nickname of the player in the room
                    if(req.body.nickname[i] === rooms[index].players[j].name)
                    {
                        //update the score of the player
                        rooms[index].players[j].score = (req.body.maxtime - req.body.individualtime[i]) * 10;
                        rooms[index].players[j].updateTotalScore();
                    }
                }
            }
        }

        //do i change status? i dont think so
        
        //Send success message
        res.send(JSON.stringify({
            roomCode: req.body.roomCode,
            players: rooms[index].players,
            status: rooms[index].status,
            successful: true
        }))
    }

});

app.post('/history', (req, res) => {
    console.log('Post request recieved: Quiz history');

    //Pick up room code from JSON in the request
    let roomCode = req.body.roomCode;

    let index = findRoomByCode(roomCode);

    //if failed to find a room with the given passcode
    if (index < 0) {
        //Send failure message back
        res.send(JSON.stringify({
            roomCode: req.body.roomCode,
            status: 3,
            successful: false
        }))
    }
    else {
        //update the room's status to show the quiz has ended
        rooms[index].status = 9;

        //Send success message
        res.send(JSON.stringify({
            roomCode: req.body.roomCode,
            players: rooms[index].players,
            status: rooms[index].status,
            successful: true
        }))
    }

});

//Start the server
startServer();

