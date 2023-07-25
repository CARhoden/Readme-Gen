// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();


const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

function makeReadMe() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for creating the project?'
        },
        {
            type: 'input',
            name: 'solve',
            message: 'What problem does it solve?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: "Can you provide instructions on how to use your application?"
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Can you provide either the file location for a screenshot of your application or a link to the photo from a web address?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using for the project?',
            choices: ["MIT License", "Apache 2.0 License", "ISC License", "Mozilla Public License 2.0", "BSD 3-Clause License", "BSD 2-Clause License", "Eclipse Public License 1.0", "Unlicense",]
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Did you collaborate or get help from an external source? If so list them here.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How do you run tests with your application?'
        },
        {
            type: 'input',
            name: 'author',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ]).then((response) => {
        markdown = generateMarkdown(response)
        fs.writeFile('README.md', markdown,
            (err) =>
                err ? console.log("Error trying to make README", err) : console.log('README created Successfully!'))
    })
}

makeReadMe()