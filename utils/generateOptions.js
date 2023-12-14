const inquirer = require('inquirer');

// Generates initial menu of options for user to choose from 
// Constructed with assistance from Xpert Learning Assistant
const generateOptions = async () => {
    const response = await inquirer
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

        const choice = response.options;
        console.log(response.options);

        // Switch statement to determine if more details are needed or the user would like to exit
        switch (choice) {
            case 'Exit':
                return;
                break;
            
            case 'Add a department':
                const newDepartment = await addDepartment();
                return newDepartment;
                break;

            case 'Add a role':
                const newRole = await addRole();
                return newRole;
                break;

            case 'Add an employee':
                const newEmployee= await addEmployee();
                return newEmployee;
                
            default:
                return choice;
        }

};

// For getting the name of the new department to be added when 'add a department' is selected from the options menu
const addDepartment = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please provide a name for the new department.',
            name: 'departmentName'
        }
    ])
    .then((response) => {
        const newDepartment = response.departmentName;
        console.log(newDepartment)
        return newDepartment;
    })};

// For getting required details when the 'add a role' option is selected from the options menu
const addRole = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please provide a title for the new roll.',
            name: 'roleName'
        },

        {
            type: 'input',
            message: 'Please provide a salary amount (numbers only).',
            name: 'roleSalary'
        },

        {
            type: 'input',
            message: 'Please provide the department_id to associated with the new role.',
            name: 'roleDptId'
        }
    ])
    .then((response) => {
        const newRole = response;
        console.log(newRole);
        return newRole;
    })
};

// For getting required details when the 'add an employee' option is selected from the options menu
const addEmployee = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please provide a first name for the new employee.',
            name: 'firstName'
        },

        {
            type: 'input',
            message: 'Please provide a last name for the new employee.',
            name: 'lastName'
        },

        {
            type: 'input',
            message: 'Please provide the role_id to associated with the new employee.',
            name: 'employeeRoleId'
        }
    ])
    .then((response) => {
        const newEmployee = response;
        console.log(newEmployee);
        return newEmployee;
    })

};

module.exports = {
    generateOptions
};