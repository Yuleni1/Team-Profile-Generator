const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');


const promptUser = () => {

    return inquirer.prompt([

        {
          type: 'input',
          name: 'name',
          message: 'What is the employee name?'          
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?'          
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?'          
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?'          
        },
        {
            type: 'input',
            name: 'school',
            message: 'Is your employee an Intern? If so provide a school'          
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please provide gitHub User name.'          
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'If a manager please provide office Number.'          
        }
        
    ])
}
promptUser()