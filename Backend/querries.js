const { Pool, Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()
const express1 = require('express')
const app1 = express1()





module.exports = class queries {

    

    constructor() {
        this.pool = new Pool()
        this.getTestData()
    }

    initConn(){
        this.client = new Client();
        
    }

    getTestData(){
        console.log("Begining of getsTestData()")
        var num = 2;
        return new Promise((resolve, reject)=>{
            const client = new Client();
            client.query('SELECT * FROM quiz limit ' + num, (err, rws) => {
                console.log(rws);
                console.log("got to promise");
                if (err) reject(err);
                resolve(rws);

            });
        });
    }

}