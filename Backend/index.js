//Include expressJS

const express = require('express')
let room = require('./room.js')
let quiz = require('./quiz.js')
let player = require('./player.js')
let crypto = require('crypto')
const app = express()
const PORT = 5000

var nonactivePlayers = [];
var rooms = [];

function addNewRoom() 
{
    //let code = Math.floor(Math.random() * 10000);
    let code = crypto.randomBytes(10).toString('hex');
    var newRoom = new room(rooms.length, code);
    rooms.push(newRoom);
    const roomMsg = newRoom.showWelcomeMsg();
    //res.send(`<h1>${roomMsg}</h1>`);
}

function addNewPlayer()
{
    var newPlayer = new player("arran");
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
    addNewPlayer();

});

//Start the server
startServer();
