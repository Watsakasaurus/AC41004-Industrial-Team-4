const { json } = require("body-parser");
const queries = require("./querries");

module.exports = class quiz {
    constructor(category, numOfQuestions) {
        this.category = category;
        this.numOfQuestions = numOfQuestions;
        //this.difficulty = difficulty;
        //this.currentQuestion = "";
        //this.currentAnswer = "";
        //this.currentOptions = [];
        //

        this.allQuestions = {};
        this.allAnswers = [];
        this.allOptions = [];

        this.getQuestions()
        this.getAnswers()
    }

    getQuestions() {
        //get the questions from db info
        //this.allQuestions =

        let query = new queries();
        //let questionSet = query.getQuestions(this.category)

        query.getQuestions(this.category, this.numOfQuestions).then((data) => {
            this.allQuestions = data.rows;
        }).catch((err) => {
            console.error(err);
        });

        console.log("Questions: " + this.allQuestions)

    }

    getOptions() {
        //get the options from the db info
        //this.allOptions =
    }

    getAnswers() {
        // takes out the answers from any number of questions
        var i;
        for (i = 0; i <= this.allQuestions.length; i++) {

            this.allAnswers = this.allQuestions[i].answer;
            

        }


        //get the answers from the db info
        //this.allAnswers =
    }

}
