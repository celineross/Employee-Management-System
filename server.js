//requirements
var inquirer = require("inquirer");
var ct = require("console.table");
const connection = require("./connection");
const { connect } = require("./connection");

//initialize program
async function init() {
    inquirer.prompt({
        type: "list",
        message: "Choose an option below: ",
        name: "options",
        choices: [
            "View employees",
            "View departments",
            "View roles",
            "Add employee",
            "Add department",
            "Add role",
            "Exit"
        ]
        //switch case statements for user options
    }).then(function (result) {
        switch (result.options) {
            case "View employees":
                return viewEmp();
                break;
            case "View departments":
                return viewDept();
                break;
            case "View roles":
                return viewRole();
                break;
            case "Add employee":
                return addEmp();
                break;
            case "Add department":
                return addDept();
                break;
            case "Add role":
                return addRole();
                break;
            case "Exit":
                connection.end();
                break;
        }
    });
}
//function to view all employees
function viewEmp() {
    connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id",
        function (err, res) {
            console.table(res);
            if (err) throw err;
            init();
        });
}
//function to view all departments
function viewDept() {
    connection.query("SELECT * FROM department",
        function (err, res) {
            console.table(res);
            if (err) throw err;
            init();
        });

}
//function to view all roles
function viewRole() {
    connection.query("SELECT * FROM role",
        function (err, res) {
            console.table(res);
            if (err) throw err;
            init();
        });
}
//function to add an employee
function addEmp() {
    connection.query("SELECT * FROM role",
        function (err, res) {
            if (err) throw err;
            inquirer.prompt([
                {
                    name: "first_name",
                    type: "input",
                    message: "First name: "
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "Last name: "
                },
                {
                    name: "role",
                    type: "list",
                    message: "Job Title: ",
                    //loop through the response and return the list of roles
                    choices: function () {
                        var roles = [];
                        for (var i = 0; i < res.length; i++) {
                            roles.push(res[i].title);
                        }
                        return roles;
                    },
                //match chosen role to its corresponding index
                }]).then(function (userResponse) {
                    var roleID = [];
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].title === userResponse.role) {
                            roleID = res[i].id;
                        }
                    }
                    connection.query("INSERT INTO employee SET ?",
                        {
                            first_name: userResponse.first_name,
                            last_name: userResponse.last_name,
                            role_id: roleID
                        },
                        function (err) {
                            if (err) throw err;
                            init();
                        });
                });
        });
}
//function to add a department
function addDept() {
    inquirer.prompt([{
        name: "department",
        type: "input",
        message: "New Department: "
    },
    ]).then(function (res) {
        connection.query("INSERT INTO department (name) VALUES (?)",
            [res.department],
            function (err, data) {
                if (err) throw err;
                console.table(res);
                init();
            });
    });
}
//function to add a role
function addRole() {
    
}

init();