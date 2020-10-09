module.exports = class room{

constructor(id, passcode/*, players*/)
{
    this.roomID = id;
    this.roomCode = passcode;
    this.players = [];
    //var currentQuiz = newQuiz();
    this.active = true;
    console.log("Room created");
    console.log("roomID: " + this.roomID + " passcode: " + this.roomCode + " status: " + this.active);
}

    getRoomId()
    {
        return this.roomID
    }



    Room(id, code)
{
    /*
    var active = true;
    var roomID = id;
    var roomCode = code;
    //var players = players;
    //var currentQuiz = newQuiz();
    console.log("Room created");
    console.log("roomID: " + this.roomID + " passcode: " + this.roomCode);
    */
}

 showWelcomeMsg()
{
    return "Welcome to the quiz room"
}

 newQuiz()
{
    /*
    var quiz = new quiz();
    return quiz;
    */
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

