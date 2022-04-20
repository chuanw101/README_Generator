// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {type: "input", name:"title", message: "Enter the project title:"},
    {type: "input", name:"name", message: "Enter your name:"},
    {type: "input", name:"descrip", message: "Enter a description of the project:"},
    {type: "input", name:"install", message: "Enter installation instructions:"},
    {type: "input", name:"usage", message: "Enter usage information:"},
    {type: "input", name:"contrib", message: "Enter contribution guidelines:"},
    {type: "input", name:"test", message: "Enter test instructions:"},
    {type: "list", name:"license", message: "Choose a license:", choices: ["Apache License 2.0", "MIT License", "GNU GPLv3", "None"]},
    {type: "input", name:"username", message: "Enter your GitHub username:"},
    {type: "input", name:"email", message: "Enter your contact email:"},
];

// Create a function to write README file
function writeToFile(fileName, data) {
    const content = generate(data);
    fs.writeFile(`./output/${fileName}`, content, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("README generated successfully in output folder");
        }
      });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        writeToFile("README.md", res);
    });
}

// Function call to initialize app
init();