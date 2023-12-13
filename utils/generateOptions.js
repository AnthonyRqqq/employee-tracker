const inquirer = require('inquirer');

const generateOptions = () => {
    return inquirer
    .prompt(
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'options',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        })
    .then((response) => {
        const choice = response.options;
        console.log(response.options)
        if (choice === 'Exit') {
            return;
        } else {
            return choice;
        }
    })
};

module.exports = {
    generateOptions,
};