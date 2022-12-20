// Node Modules
const fs = require('fs');
const inquirer = require('inquirer');

const { createManagerCard, createEngineerCard, createInternCard } = require('./src/cards')
const createHtml = require('./src/html')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

const questions = [
    {
        type: 'input',
        message: 'What is the managers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What the managers ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What the managers email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What the managers office number?',
        name: 'officeNumber',
    },
    {
        type: 'loop',
        message: 'Would you like to add an engineer or intern?',
        name: 'teammates',
        questions: [
            {
                type: 'list',
                message: 'What type of employee are you adding?',
                name: 'type',
                choices: ['Engineer', 'Intern'],
            },
            {
                type: 'input?',
                message: 'What is the teammates name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the teammates ID?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the teammates email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the engineer GitHub?',
                name: 'github',
                when: (userAnswers) => userAnswers.type === 'Engineer'
            },
            {
                type: 'input',
                message: 'What is the interns school?',
                name: 'school',
                when: (userAnswers) => userAnswers.type === 'Intern'
            },
        ]
    }
]

inquirer.prompt(questions).then((userAnswers) => {
    console.log(userAnswers)
    // writeToFile('', (userAnswers))
})