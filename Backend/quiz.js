const queries = require("./querries");

module.exports = class quiz
{
    constructor(category, numOfQuestions){
        this.category = category;
        this.numOfQuestions = numOfQuestions;
        //this.difficulty = difficulty;
        //this.currentQuestion = "";
        //this.currentAnswer = "";
        //this.currentOptions = [];
        this.allQuestions = {};
        this.allAnswers = [];
        this.allOptions = [];

        this.getQuestions()
    }

    getQuestions()
    {
        //get the questions from db info
        //this.allQuestions =

        let query = new queries();
        //let questionSet = query.getQuestions(this.category)

        query.getQuestions(this.category).then((data)=>{
            this.allQuestions = data.rows;
        }).catch((err)=>{
            console.error(err);
        });
        
        console.dir("Questions: " + JSON.stringify(this.allQuestions))
    }

    getOptions()
    {
        //get the options from the db info
        //this.allOptions =
    }

    getAnswers()
    {
        //get the answers from the db info
        //this.allAnswers =
    }

}
