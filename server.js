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

}

function viewDept() {

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