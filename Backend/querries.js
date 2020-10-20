const { Pool, Client } = require("pg")
const dotenv = require("dotenv")
const { response } = require("express")
dotenv.config()

module.exports = class queries 
{
    constructor() 
    {
        this.pool = new Pool()
    }

    initConn() 
    {
        this.client = new Client();

    }

    //retrieves a given number of questions from the given categories
    //input is an array of categories to select questions from and the number of questions to select
    getQuestions(category, num) 
    {
        let categories = "{" + category.join() + "}";
        return new Promise((resolve, reject) => {
            const client = new Client();
            console.log(categories);
            client.connect().then(() => {
                client.query("SELECT * FROM quiz WHERE category = ANY(" + `'${categories}') limit ` + num, (err, rws) => {
                    client.end();
                    if (err) reject(err);
                    resolve(rws);
                });
            });
        });

    }

}