
/*constructor(id, passcode, players)
{
    var roomID = id;
    var roomCode = passcode;
    var players = players;
    var currentQuiz = newQuiz();

}*/

var active = true;
var roomID = 0;
var roomCode = 0;

function Room(id, code)
{
    var active = true;
    var roomID = id;
    var roomCode = code;
    //var players = players;
    //var currentQuiz = newQuiz();
    console.log("Room created");
    console.log("roomID: " + roomID + " passcode: " + roomCode);

}

function showWelcomeMsg()
{
    return "Welcome to the quiz room"
}

function newQuiz()
{
    var quiz = new quiz();
    return quiz;
}

function closeRoom()
{
    active = false;
    return active;
}

module.exports = {
 Room: Room
 //closeRoom(): closeRoom()
}