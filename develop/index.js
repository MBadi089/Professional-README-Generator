// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer
// TODO: Create an array of questions for user input
const questions = [
    //Ask the user for their github name
    {
        type: 'userInput',
        name: 'githubInfo',
        message: 'Please enter your Github Username.',
        validade: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    //Ask the user for their project name
    {
        type: 'userInput',
        name: 'projectName',
        message: 'What is the name of the project?',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            }
            else {
                console.log('You need to enter the project name!');
                return false;
            }
        }
    },
    //Ask the user for the project discription
    {
        type: 'userInput',
        name: 'projectDiscription',
        message: 'Please describe the project.',
        validate: projectDiscriptionInput => {
            if (projectDiscriptionInput) {
                return true;
            }
            else {
                console.log('You need to add a discription of the project!');
                return false;
            }
        }
    },
    //Ask the user how they install the project
    {
        type: 'userInput',
        name: 'projectInstall',
        message: 'How did you install your project?',
        validate: projectInstallInput => {
            if (projectInstallInput) {
                return true;
            }
            else {
                console.log('You need to input your installation for your project!');
                return false
            }
        }
    },
    //Ask the user about how they use the project
    {
        type: 'userInput',
        name: 'usageInfo',
        message: 'How do you use this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else {
                console.log('You need to put how to use the project!');
                return false;
            }
        }
    },
    //Ask the user how developers can use or update the project
    {
        type: 'userInput',
        name: 'contributeProject',
        message: 'How can developers help contribute to this project?',
        validate: contributeProjectInput => {
            if (contributeProjectInput) {
                return true;
            }
            else {
                console.log('You need to put how developers can help contribute to the project!');
                return false;
            }
        }
    },
    //Ask the user to choose which license to use for the project
    {
        type: 'checkbox',
        name: 'chooseLicense',
        message: 'Please choose a license for your project.',
        choices: ['Apache', 'GNU', 'NPM Packages', 'OpenBSD', 'Rust', 'WordPress'],
        validate: chooseLicenseBox => {
            if (chooseLicenseBox) {
                return true;
            }
            else {
                console.log('Please choose a license from the list!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filenName, data, (err) => {
        if (err)
            throw err;
            console.log('Great! Data transferred to the README!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();