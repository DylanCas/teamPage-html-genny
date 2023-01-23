// Node Modules
const fs = require('fs');
const inquirer = require('inquirer');

// Pulls constructor/subclasses
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const createHtml = require('./src/html');

// full team array
const teammates = []

// Initial questions
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the managers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the managers ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the managers email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the managers office number?',
        name: 'officeNumber',
    },
])
    .then((answers) => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teammates.push(manager)
        listEmployees()
    })

function listEmployees() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add an employee?',
            choices: ['Engineer', 'Intern', 'Finish'],
            name: 'empList'
        }
    ])
        .then((answers) => {
            switch (answers.empList) {
                case 'Engineer':
                    engineerPrompt()
                    break;
                case 'Intern':
                    internPrompt()
                    break;
                case 'Finish':
                    finish()
                    break;
            }
        })
}



function engineerPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employees name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the employees ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the employees email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the employees github?',
            name: 'github',
        }
    ])
        .then((answers) => {
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            teammates.push(engineer)
            listEmployees()
        })
}

function internPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employees name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the employees ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the employees email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the employees school?',
            name: 'school',
        }
    ])
        .then((answers) => {
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            teammates.push(intern)
            listEmployees()
        })
}

function finish() {
console.log(teammates)

    fs.writeFile('dist/index.html', createHtml(teammates), (err) =>
        err ? console.error(err) : console.log('Success')
    );
}