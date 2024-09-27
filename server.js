//installing dependencies

//handles the HTTP resquest
const express = require('express');
const app = express();

//handles connectivity with the DBMS
const mysql = require('mysql2');

//handles cross origin resource sharing
const cors = require('cors');

//handles the environment variables
const dotenv = require('dotenv');

//use the dependencies
dotenv.config();
app.use(express.json());
app.use(cors());

//database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// To check the connection
db.connect((err) => {
    if(err){
        console.log('Error connecting to database ', err);
    }else{
        console.log('connected successfully as id: ', db.threadId);
    }
});

// codes comes down here
app.get('', (req, res) => {
    const getPatients = "";
    db.query(getPatients, (err, data) => {
        if(err){
            return res.status(400).send("Failed to get patients", err);
        }
        res.status(200).send(data);
    });
});


//The endpoint
//listen to the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get("", (req, res) => {
    res.send('BACK TO BUSINESS');
});