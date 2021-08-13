// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');


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
        message: 'What are the sections of the project? (Required)' 
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'How will the installation of the project go? (Required)' ,
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: "What will be the project be useful for? (Required)",
    },
    {
        type: 'input',
        name: 'projectContributing',
        message: 'What will be contributing to this project? (Required)',
    },
    {
        type: 'input',
        name: 'projectTest',
        message: 'How will the project be tested? (Required)',
    },
    {
        type: 'input',
        name: 'projectQuestions',
        message: 'What questions will this project answer? (Required)',
    },
    {
        type: 'list',
        name: 'Licenses',
        message: 'Choose one of the following licenses for your project',
        choices: ['MIT', 'GPL', 'Apache']
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
const sampArr = [{name: "John", id: 3}, {name: "Jim", id: 4 }, {name: "James", id: 5}]
const lowerArr = sampArr.filter(person => person.id !== 4)
console.log(lowerArr)