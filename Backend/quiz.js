const { json } = require("body-parser");
const queries = require("./querries");

module.exports = class quiz 
{
    constructor(category, numOfQuestions) 
    {
        this.category = category;
        this.numOfQuestions = numOfQuestions;
        this.allQuestions = {};
        this.allAnswers = [];
        this.allOptions = [];
        this.getQuestions()
        this.getAnswers()
    }

    getQuestions() 
    {
        let query = new queries();
        query.getQuestions(this.category, this.numOfQuestions).then((data) => {
            this.allQuestions = data.rows;
        }).catch((err) => {
            console.error(err);
        });
        console.log("Questions: " + this.allQuestions)
    }

    getOptions() 
    {
        //get the options from the db info
        //this.allOptions =
    }

    getAnswers() 
    {
        // takes out the answers from any number of questions
        var i;
        for (i = 0; i <= this.allQuestions.length; i++) {
            this.allAnswers = this.allQuestions[i].answer;
        }
    }

}
