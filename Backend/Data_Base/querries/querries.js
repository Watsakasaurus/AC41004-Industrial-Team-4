const { Pool, Client } = require("pg")
const dotenv = require("dotenv")
const pool = new Pool()
dotenv.config();

var num = 1; 
const cat = "animals"; 
//const connect_link = 'posgressql://aylin:aylin@161.35.170.36:5432/Uni_db'


const client = new Client();
client.connect().then(() => {


    client.query('SELECT * FROM quiz limit ' + num, (err, res) => {
        console.log(err, res)
        client.end()
    })
}).catch(err => {
    console.error(err);
    
});










