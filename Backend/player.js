module.exports = class player
{
    constructor(nickname){
        this.name = nickname;
        this.score = 0;
        this.totalScore = 0;
        this.reponses = []; //store the player's reponse to each question
        this.correct = []; //store whether or not the player got each question correct
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

    //increases the player's total score by their score
    updateTotalScore()
    {
        this.totalScore += this.score;
    }

    //resets a player's total score to zero
    resetTotalScore()
    {
        this.totalScore = 0;
    }

}