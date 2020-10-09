//Include expressJS

const express = require('express')
let room = require('./room.js')
let Room = room.Room;
const quiz = require('./quiz.js')
let player = require('./player.js')
const app = express()
const PORT = 5000

var nonactivePlayers = [];
var rooms = [];

function addNewRoom() 
{
    let code = Math.floor(Math.random() * 100);
    var newRoom = new room(rooms.length, code);
    rooms.push(newRoom);
    const roomMsg = newRoom.showWelcomeMsg();
    //res.send(`<h1>${roomMsg}</h1>`);
}

function addNewPlayer(newPlayerName)
{
    var newPlayer = new player(newPlayerName);
    nonactivePlayers.push(newPlayer);
    console.log("new player: " + nonactivePlayers[0].name);
}

function findNonactiveRooms() {
    var nonactive = [];
    for (i = 0; i < rooms.length; i++) {
        if (rooms[i].active === false)
        {
            nonactive.push(rooms[i].roomID);
            console.log("Removing room ID: " + rooms[i].roomID)
        }
    }
    return nonactive;
}

function removeNonactiveRooms() 
{
    var indexes = findNonactiveRooms();
    console.log(indexes)
    
    //https://stackoverflow.com/questions/3396088/how-do-i-remove-an-object-from-an-array-with-javascript
    for(i = 0; i < indexes.length; i++)
    {
       rooms = rooms.filter((item) => item.roomID !== indexes[i]);
    }
}

//moves a player from the nonactivePlayers array into the players array of the desired room
//inputs are the nickname of the player to be moved, and the id of the room the player should be added to
function movePlayerToRoom(nickname, roomNumber)
{
    var playerIndex;

    //create new player with the same information as the one to be moved, and add it to the player array in the correct room
    var playerToBeAdded = new player(nickname);
    rooms[roomNumber].players.push(playerToBeAdded);

    //remove player (that has just been moved into room) from nonActivePlayers array
    nonactivePlayers = nonactivePlayers.filter((item) => item.name !== nickname);

    //find the index(in nonactivePlayers array) of the player that has been moved
    // for(i = 0; i < nonactivePlayers.length; i++)
    // {
    //     // if(nonactivePlayers[i].name === nickname)
    //     // {
    //     //     playerIndex = i;
    //     // }

        
    // }

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
    addNewRoom();
    addNewRoom();
    addNewRoom();
    addNewRoom();
    addNewRoom();
    console.log(rooms);
    rooms[0].closeRoom();
    rooms[5].closeRoom();
    rooms[3].closeRoom();
    removeNonactiveRooms();
    console.log(rooms);
    addNewPlayer("arran");
    movePlayerToRoom("arran", 1);
    console.log("Room 1 players: " + rooms[1].players[0].name);
    console.log("Non Active Players: " + nonactivePlayers);
});

//Start the server
startServer();
