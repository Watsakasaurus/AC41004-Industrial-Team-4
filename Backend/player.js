module.exports = class player
{
    constructor(nickname){
        this.name = nickname;
        this.score = 0;
    }

    updateScore(points)
    {
        this.score += points;
    }

    resetScore()
    {
        this.score = 0;
    }

}