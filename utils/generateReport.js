
// Generates the query text for the database based on previous user selections
const generateReport = (input) => {
    const selectedOption = input[0];
    const details = input[1];
    console.log('Selected option: ' + selectedOption);
    console.log(details);

    let report = ''
    switch (selectedOption) {
        
        case 'view':
            switch(details) {
                case 'View all departments':
                    report = 'SELECT * FROM department';
                    break;

                case 'View all roles':
                    report = 'SELECT * FROM role';
                    break;

                case 'View all employees':
                    report = 'SELECT * FROM employee';
                    break;
            }
        break;
        
        case 'newDepartment':
            report = `INSERT INTO department (name) VALUES ("${details}")`;
            break;

        case 'newRole':
            report = `INSERT INTO role (title, salary, department_id) VALUES ("${details.roleName}", ${details.roleSalary}, ${details.roleDptId})`;
            break;

        case 'newEmployee':
            report = `INSERT INTO employee (first_name, last_name, role_id) VALUES ("${details.firstName}", "${details.lastName}", ${details.employeeRoleId})`;
            break;
    }

    return report;

}


module.exports = {
    generateReport,
};