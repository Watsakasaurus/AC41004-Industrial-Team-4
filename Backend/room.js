module.exports = class room{

constructor(id, passcode, players)
{
    var roomID = id;
    var roomCode = passcode;
    var players = players;
    //var currentQuiz = newQuiz();
    var active = true;
}

 Room(id, code)
{
    var active = true;
    var roomID = id;
    var roomCode = code;
    //var players = players;
    //var currentQuiz = newQuiz();
    console.log("Room created");
    console.log("roomID: " + roomID + " passcode: " + roomCode);

}

 showWelcomeMsg()
{
    return "Welcome to the quiz room"
}

 newQuiz()
{
    var quiz = new quiz();
    return quiz;
}

 closeRoom()
{
    this.active = false;
    return this.active;
}

//module.exports = {
 //Room: Room
 //closeRoom(): closeRoom()
//}
}

