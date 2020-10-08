//Include expressJS

const express = require('express')
let room = require('./room.js')
let Room = room.Room;
const quiz = require('./quiz.js')
const player = require('./player.js')
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

function findNonactiveRooms() {
    var nonactive = [];
    for (i = 0; i < rooms.length; i++) {
        if (rooms[i].active === false)
        {
            nonactive.push(i);
            console.log("Removing room ID: " + i)
        }
    }
    return nonactive;
}

function removeNonactiveRooms() 
{
    var indexes = findNonactiveRooms();
    console.log(indexes)
    /*
    for(i = 0; i < indexes.length; i++)
    {
        console.log(rooms[i].roomID)
        if(rooms[i].roomID == indexes[i])
        {
            rooms.splice(indexes[i], 1);
        }
    }
    */

    for(i = 0; i < rooms.length; i++)
    {
        if(i > indexes.length)
        {

        }
        else
        {
            if(rooms[i].roomID === indexes[i])
            {
                rooms.splice(indexes[i], 1);
            }
        }

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
});

//Start the server
startServer();
