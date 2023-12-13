const express = require('express');
const mysql = require('mysql2');
const generateOptions = require('./utils/generateOptions')

const PORT = 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'H42DFa4kv^&n^X2wpd@P',
        database: 'records_db'
    },
    console.log("Connection successful")
);

const init = () => {
    generateOptions.generateOptions();
}

init();