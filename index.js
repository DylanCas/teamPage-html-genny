// Node Modules
const fs = require('fs');
const inquirer = require('inquirer');

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));


const questions = [
    {
        type: 'input',
        message: 'What is the managers name?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What the managers ID?',
        name: 'managerID',
    },
    {
        type: 'input',
        message: 'What the managers email?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What the managers office number?',
        name: 'managerOfficeNumber',
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
                name: 'teammateName',
            },
            {
                type: 'input',
                message: 'What is the teammates ID?',
                name: 'teammateID',
            },
            {
                type: 'input',
                message: 'What is the teammates email?',
                name: 'teammateEmail',
            },
            {
                type: 'input',
                message: 'What is the engineer GitHub?',
                name: 'teammateGitHub',
                when: (userAnswers) => userAnswers.type === 'Engineer'
            },
            {
                type: 'input',
                message: 'What is the interns school?',
                name: 'internSchool',
                when: (userAnswers) => userAnswers.type === 'Intern'
            },
        ]
    }
]

inquirer.prompt(questions).then((userAnswers) => {
    console.log(userAnswers)
    // writeToFile('', (userAnswers))
})