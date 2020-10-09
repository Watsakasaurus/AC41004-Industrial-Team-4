const { Pool, Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config();

module.exports = class queries
{
    constructor()
    {
        this.pool = new Pool()
    }

    getTestData()
    {
        var num = 1; 
        const cat = "animals";

        const client = new Client();
        client.connect().then(() => 
        {
            client.query('SELECT * FROM quiz limit ' + num, (err, res) => {
            console.log(err, res)
            client.end()
        })
        }).catch(err => {
            console.error(err);
    
        });
    }
}










