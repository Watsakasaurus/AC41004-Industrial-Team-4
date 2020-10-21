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
            //console.info(this.allQuestions);

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
        var options = ["","","",""];
        for (i = 0; i < this.dbJSON.length; i++) {
            //adds all options and the answer into a new array
            options[0] = this.dbJSON[i].option1;
            options[1] = this.dbJSON[i].option2;
            options[2] = this.dbJSON[i].option3;
            options[3] = this.dbJSON[i].option4;

            //adds the options array
            this.allOptions.push(options);

        }
        console.info(this.allOptions);
        //console.log(this.allOptions[0][0]);
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
