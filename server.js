// Imports required modules
const express = require('express');
const mysql = require('mysql2');
const generateOptions = require('./utils/generateOptions')
const generateReport = require('./utils/generateReport')

const PORT = 3001;
const app = express();

// Installs middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Creates connection to database
// User password required, additional changes necessary if user is not root
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'records_db',
        
    }
);

const init = async () => {
    const choice = await generateOptions.generateOptions();
    // Ends function if user selects exit
    if (choice[1] === 'Exit') {
        return;
    }
    
    const report = await generateReport.generateReport(choice);
    console.log(report)

    db.query(`${report}`, (err, results) => {
        if (err) {
            console.log(error);
        } else {
            console.table(results);
            init();
        }
    })
};

init();