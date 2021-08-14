// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project? (Required)',
        validate: (projectNameInput) => {
            if (projectNameInput) {
            return true;
        }else { console.log("Enter a project name!");
        }}
    },
    {
        type: 'input',
        name: 'projectInformation',
        message: 'What are the sections of the project? (Required)',
        validate: (projectInfoInput) => {
            if (projectInfoInput) {
            return true;
        }else { console.log("Enter valid information about the project!");
        }}
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'How will the installation of the project go? (Required)',
        validate: (projectInstallInput) => {
            if (projectInstallInput) {
            return true;
        }else { console.log("Enter a valid reason for installation!");
        }}
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: "What will be the project be useful for? (Required)",
        validate: (projectUsageInput) => {
            if (projectUsageInput) {
            return true;
        }else { console.log("Enter a reason for the usage!");
        }}
    },
    {
        type: 'input',
        name: 'projectContributing',
        message: 'What will be contributing to this project? (Required)',
        validate: (projectContributingInput) => {
            if (projectContributingInput) {
            return true;
        }else { console.log("Enter a valid contribution");
        }}
    },
    {
        type: 'input',
        name: 'projectTest',
        message: 'How will the project be tested? (Required)',
        validate: (projectTestInput) => {
            if (projectTestInput) {
            return true;
        }else { console.log("Enter a valid reason!");
        }}
    },
    {
        type: 'input',
        name: 'projectQuestions',
        message: 'What questions will this project answer? (Required)',
        validate: (projectQuestionsInput) => {
            if (projectQuestionsInput) {
            return true;
        }else { console.log("Enter a purpose for the project!");
        }}
    },
    {
        type: 'list',
        name: 'Licenses',
        message: 'Choose one of the following licenses for your project',
        choices: ['MIT', 'GPL', 'Apache', 'None'],
        validate: (projectLicenseInput) => {
            if (projectLicenseInput) {
            return true;
        }else { console.log("Please choose a valid license!");
        }}
    }
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw (err);
            console.log("hi")
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
    console.log(userInput)
    writeToFile("README.md", generate(userInput))
    })
}

// Function call to initialize app
init();
