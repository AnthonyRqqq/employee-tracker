const express = require('express');
const mysql = require('mysql2');
const generateOptions = require('./utils/generateOptions')
const generateReport = require('./utils/generateReport')

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
    }
);

const init = async () => {
    const choice = await generateOptions.generateOptions();
    console.log(choice);
    // Ends function if user selects exit
    if (choice.at(1) === 'Exit') {
        return;
    }
    
    const report = await generateReport.generateReport(choice);
    console.log(report)

    db.query(`${report}`, (err, results) => {
        if (err) {
            console.log(error);
        } else {
            console.log(results);
        }
    })


}

init();