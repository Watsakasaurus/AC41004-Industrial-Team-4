module.exports = class player
{
    constructor(nickname){
        this.name = nickname;
        this.score = 0;
    }

    //increases the player's score by a number of points
    //input is the number of points to increase by
    updateScore(points)
    {
        this.score += points;
    }

    //resets a player's score to zero
    resetScore()
    {
        this.score = 0;
    }

}