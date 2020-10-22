const { json } = require("body-parser");
const queries = require("./querries");

module.exports = class quiz {
    constructor(category, numOfQuestions) {
        this.category = category;
        this.numOfQuestions = numOfQuestions;
        this.dbJSON = {};
        this.allQuestions = [];
        this.allAnswers = [];
        this.allOptions = [];
    }

    getdbJSON() {
        console.log("Getting from DB...");
        let query = new queries();
        query.getQuestions(this.category, this.numOfQuestions).then((data) => {
            this.dbJSON = data.rows;
            console.log(this.dbJSON);

            this.getQuestions();
            this.getAnswers();
            this.getOptions();

        }).catch((err) => {
            console.error(err);
        });
    }

    getQuestions() {
        console.log("Getting questions....");
        //separates out the questions
        var i;
        for (i = 0; i < this.dbJSON.length; i++) {
            this.allQuestions.push(this.dbJSON[i].question);
        }
        console.info(this.allQuestions);
    }

    getOptions() {
        //separates out the options (including the answer) from any number of questions
        console.log("Getting options....");
        var i;
        for (i = 0; i < this.dbJSON.length; i++) {
            //adds all the options to the array
            this.allOptions.push([this.dbJSON[i].option1, this.dbJSON[i].option2, this.dbJSON[i].option3, this.dbJSON[i].option4]);

        }
        console.info(this.allOptions);
    }

    getAnswers() {
        console.log("Getting answers....");
        // takes out the answers from any number of questions
        var i;
        for (i = 0; i < this.dbJSON.length; i++) {
            let ans = this.dbJSON[i].answer
            this.allAnswers.push(ans)
        }
        console.info(this.allAnswers);
    }

}
