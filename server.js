var inquirer = require("inquirer");
var ct = require("console.table");
const connection = require("./connection");

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

function viewEmp() {
    connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id",
        function (err, res) {
            console.table(res);
            if (err) throw err;
            init();
        });
}

function viewDept() {
    connection.query("SELECT * FROM department",
    function (err, res) {
        console.table(res);
        if (err) throw err;
        init();
    });

}

function viewRole() {

}

function addEmp() {

}

function addDept() {

}

function addRole() {

}

init();