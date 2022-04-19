// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {type: "input", name:"title", message: "Enter the project title:"},
    {type: "input", name:"descrip", message: "Enter a description of the project:"},
    {type: "input", name:"install", message: "Enter installation instructions:"},
    {type: "input", name:"usage", message: "Enter usage information:"},
    {type: "input", name:"contrib", message: "Enter contribution guidelines:"},
    {type: "input", name:"test", message: "Enter test instructions:"},
    {type: "list", name:"license", message: "Choose a license:", choices: ["Apache License 2.0", "MIT License", "GNU GPLv3"]},
    {type: "input", name:"username", message: "Enter your GitHub username:"},
    {type: "input", name:"email", message: "Enter your contact email:"},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        console.log(JSON.stringify(res));
    });
}

// Function call to initialize app
init();