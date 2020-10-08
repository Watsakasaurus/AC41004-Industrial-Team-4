const { Pool, Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config();

const connect_link = 'posgressql://aylin:aylin@localhost:5432/Uni_db'


const client = new Client();
client.connect().then(() => {


    client.query('SELECT * FROM quiz', (err, res) => {
        console.log(err, res)
        client.end()
    })
}).catch(err => {
    console.error(err);
});




