var inquirer = require("inquirer");
var ct = require("console.table");
const connection = require("./connection");

async function start() {
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
    })
    .then(function(result) {
        switch (result.options) {
            // case "View employees":
            // case "View departments":
            // case "View roles":
            // case "Add employee":
            // case "Add department":
            // case "Add role":
            case "Exit":
            connection.end();
            break;
        }
    })
}