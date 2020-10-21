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

        //this.getQuestions();
        //this.getAnswers();
        //this.getOptions();
    }

    getQuestions() 
    {
        let query = new queries();
        query.getQuestions(this.category, this.numOfQuestions).then((data) => {
            this.allQuestions = data.rows;
            console.log(data.rows);
        }).catch((err) => {
            console.error(err);
        });
        console.info(this.allQuestions);
        //console.log(this.allQuestions[0].answer);
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

            //adds the options array
            this.allOptions.push(options);
            console.log(options);
        }
        console.info(this.allOptions);
        //console.log(this.allOptions[0][0]);
    }

    getAnswers() 
    {
        // takes out the answers from any number of questions
        var i;
        for (i = 0; i <= this.allQuestions.length; i++) {
            this.allAnswers[i] = this.allQuestions[i].answer;
        }
        console.info(this.allAnswers);
        //console.log(this.allAnswers[0]);
    }

}
