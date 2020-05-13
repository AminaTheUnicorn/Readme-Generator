const  inquirer = require("inquirer");
const  fs = require('fs');
const  generate = require("./utils/generateMarkdown");

// const writeToFile = generate.promisify(fs.writeFile);
const questions = [


    {
        type: "input",
        name: "ProjectTitle",
        message: "Project Title:"
    },

    {
        type: "input",
        name: "Description",
        message: "Description:"
    },

    {
        type: "input",
        name: "TableofContents",
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

    {type: "input",
      name: "Username",
      message: "Enter your GitHub Username:"
    },

    {
      type: "input",
      name: "Email",
      message: "Enter your GitHub email:"
    }
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
writeToFile("new-readme.md",generate({...response}));


})
}

init();
