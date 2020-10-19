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

        this.getQuestions();
        this.getAnswers();
        this.getOptions();
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
        //separates out the options (including the answer) from any number of questions
        var i;
        var options = [];
        for (i = 0; i <= this.allQuestions.length; i++) {
            //adds all options and the answer into a new array
            options.push(this.allQuestions[i].option1);
            options.push(this.allQuestions[i].option2);
            options.push(this.allQuestions[i].option3);
            options.push(this.allQuestions[i].option4);
            options.push(this.allQuestions[i].answer);

            //adds the options array
            this.allOptions.push(options);
            //console.log(options);
        }
        console.info(this.allOptions);
    }

    getAnswers() {
        // takes out the answers from any number of questions
        var i;
        for (i = 0; i <= this.allQuestions.length; i++) {

            this.allAnswers = this.allQuestions[i].answer;
            

        }
        console.info(this.allAnswers);
    }

}
