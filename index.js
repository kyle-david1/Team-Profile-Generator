const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const Manager = require('./library/Manager');

const team = [];

const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the managers name ?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is their employee ID number?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is their email address?',
  },
  {
    type: 'input',
    name: 'office',
    message: 'What is their office number?',
  },
]

const engineerQuestions = [
  [
    {
      type: 'input',
      name: 'name',
      message: 'What is the Engineers name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is their employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email address?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is their github url?',
    },
  ]
]


const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the interns name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is their employee ID number?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is thier email address?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What school do they attend?',
  },
];

const nextPersonQuestion = [
  {
    type: 'list',
    name: 'next',
    message: 'Would you like to add another person?',
    choices: ['engineer', 'intern', 'Im done']
  },
]

const createManager = () => {
  inquirer.prompt(managerQuestions)
  .then((answers => {
    const manager = new Manager (answers.name, answers.id, answers.email, answers.office)
    console.log(answers)
    nextPerson();
  }))
}

const createEngineer = () => {
  inquirer.prompt(engineerQuestions)
  .then((answers => {
    const manager = new Engineer (answers.name, answers.id, answers.email, answers.github)
    console.log(answers)
    nextPerson();
  }))
}

const createIntern = () => {
  inquirer.prompt(internQuestions)
  .then((answers => {
    const manager = new Intern (answers.name, answers.id, answers.email, answers.school)
    console.log(answers);
    nextPerson();
  }))
}

createManager();

const nextPerson = () => {
  inquirer.prompt(nextPersonQuestion)
  .then(answers => {
    if(answers.choices === 'engineer'){
      createEngineer();
    } else if(answers.choices === 'Intern'){
      createIntern();
    }else (answers.choices === 'Im done'){
        createHTML();
    }
    })}
  

  // get answers and push to empty array 
  // team function for empty array 

  // generate HTML 

