var inquirer = require("inquirer");
var fs = require('fs');
var generate = require("./utils/generateMarkdown");
const questions = [

    {
        type: "input",
        name: "badge",
        message: "Badge:"
    },

    {
        type: "input",
        name: "Project Title",
        message: "Project Title:"
    },

    {
        type: "input",
        name: "Description",
        message: "Description:"
    },

    {
        type: "input",
        name: "Table of Contents",
        message: "Table of Contents:"
    },

    {
        type: "input",
        name: "Installation",
        message: "Installation:"
    },

    {
        type: "input",
        name: "Usage",
        message: "Usage:"
    },

    {
        type: "input",
        name: "License",
        message: "License:"
    },

    {
        type: "input",
        name: "Contributing",
        message: "Contributing:"
    },

    {
        type: "input",
        name: "Tests",
        message: "Tests:"
    },

    {
        type: "input",
        name: "Questions",
        message: "User GitHub profile picture"
    },
];

function writeToFile(fileName, data) {
fs.writeFile(fileName,data, function (err){
if (err) throw err;
console.log("saved");
})
}

function init() {
inquirer.prompt(questions).then(function(response) {
console.log(response);
writeToFile("readme.md",generate({...response}));

})
}

init();
