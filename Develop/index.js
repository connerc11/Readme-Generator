// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project? (Required)'
    },
    {
        type: 'input',
        name: 'projectInformation',
        message: 'What are the sections of the project?',
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'How will the installation of the project go?',
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: "What will be the project be useful for?",
    },
    {
        type: 'input',
        name: 'projectContributing',
        message: 'What will be contributing to this project?',
    },
    {
        type: 'input',
        name: 'projectTest',
        message: 'How will the project be tested?',
    },
    {
        type: 'input',
        name: 'projectQuestions',
        message: 'What questions will this project answer?',
    }
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
