const mysql = require('mysql2');
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'H42DFa4kv^&n^X2wpd@P',
        database: 'records_db'
    }
);

const generateReport = async (input) => {
    let report = '';
    switch (input) {
        case 'View all departments':
            report = db.query('SELECT * FROM department', (err, results) => console.log(results));
            break;

        case 'View all roles':
            report = db.query('SELECT * FROM role', (err, results) => console.log(results));
            break;

        case 'View all employees':
            report = db.query('SELECT * FROM employee', (err, results) => console.log(results));
            break;

        case 'Add a department':
            report = ''
            break;

        case 'Add a role':
            report = ''
            break;

        case 'Add an employee':
            report = ''
            break;

        case 'Update an employee role':
            report = ''
            break;
    }
}


module.exports = {
    generateReport,
};