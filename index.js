// require all of your classes 
// require inquirer , path if needed, fs
// const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/Manager');
const fs = require('fs');

// require your page template
const team = require('./src/page-template');
const inquirer = require('inquirer');
const { type } = require('os');
const { default: Choices } = require('inquirer/lib/objects/choices');
// empty team members array 
const teamMembers = [];
// empty id array 
const id = [];


// function that wraps everything ( like an init function)
function init() {

    console.log(`/////////////////////////  Welcome to the team profile generator /////////////////////////`)

    inquirer.
        prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Manager name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Manager id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Manager email?'
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is the Manager office number?'
            },

        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
            teamMembers.push(manager)
            console.log(teamMembers)

            addEmployee()
        })


}

function addEmployee() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'Do you want to add any other team members?',
            choices: ['Engineer', 'Intern', 'Build team']
        }
    ])
        .then((answers) => {
            switch (answers.choices) {
                case 'Engineer':
                    addEngineer()
                    break;
                case 'Intern':
                    addIntern()
                    break;
                    case 'Build team': 
                    buildTeam()
                        break;


                default:
                    console.log(" hey pick an option !!!!!")
                    break;
            }
        })

}


// function for creating a manager (call this at the bottom of your init function )
//inquirer prompt with the manager questions
//in your .then- set up a variable for manager that is equal to a new instance in your managers class passing in the response you received from the users input

// push that variable to your team members array, push the id to the id array 
// call your next function

// next function should be for creating the team 
// this should ask the user what type of employee they would like to create 
// in your .then have a conditional or switch case that runs that employee types function based on what they choose 
// or if they select the option that says they are done adding team members, run the function that builds the team


function addEngineer() {
    inquirer.
    prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineer name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineer id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineer email?'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the Engineer Github?'
        },

    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
        teamMembers.push(engineer)
        console.log(teamMembers)
        addEmployee()
    })
    

}

function addIntern() {

    inquirer.
        prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Intern name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Intern id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Intern email?'
            },
            {
                type: 'input',
                name: 'university',
                message: 'What university did the intern attend?'
            },

        ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.university)
            teamMembers.push(intern)
            console.log(teamMembers)
            addEmployee()
        })
}

function buildTeam() {

    fs.writeFileSync('./dist/team.html', team(teamMembers), 'utf8');

}


// make sure to call your init fucntions
init()





















