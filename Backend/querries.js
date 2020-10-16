const { Pool, Client } = require("pg")
const dotenv = require("dotenv")
const { response } = require("express")
dotenv.config()

module.exports = class queries {

    constructor() {
        this.pool = new Pool()
        this.getTestData()
    }

    initConn() {
        this.client = new Client();

    }

    // Making querries from the database
    getTestData() {
        var num = 3;

        return new Promise((resolve, reject) => {
            const client = new Client();
            client.connect().then(() => {
                client.query('SELECT * FROM quiz limit ' + num, (err, rws) => {
           

                    if (err) reject(err);
                    resolve(rws);
                });
            
            });
        });
    }

    // Retrieves data based on the desired category by the user
    getTestData1(){

        var cat = "'animals'";

        return new Promise((resolve, reject) => {
            const client = new Client();
            client.connect().then(() => {
            client.query("SELECT * FROM quiz WHERE category = " + cat,(err, rws)=>{
                    if (err) reject(err);
                    resolve(rws);
                });
            });
        });
    }

    //retrieves a given number of questions from the given categories
    //input is an array of categories to select questions from and the number of questions to select
    getQuestions(category, num)
    {
        let categories = "{" + category.join() +"}";
        return new Promise((resolve, reject) => {
            const client = new Client();
            console.log(categories);
            client.connect().then(() => {
            client.query("SELECT * FROM quiz WHERE category = ANY(" + `'${categories}') limit ` + num,(err, rws)=>{
                    if (err) reject(err);
                    resolve(rws);
                });
            });
        });
        
    }

}