const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');
const Manager = require('../Team-Profile-Generator/lib/Manager');
const Engineer = require('../Team-Profile-Generator/lib/Engineer');
const Intern = require('../Team-Profile-Generator/lib/Intern');
const { execArgv } = require('process');

const teamMembersArray = [];


const managerPrompt = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name:  'name',
            message: 'Please enter managers name.'
        },
        {
            type: 'input',
            name:  'id',
            message: 'Please enter managers id.'
        },
        {
            type: 'input',
            name:  'email',
            message: 'Please enter managers email.'
        },
        {
            type: 'input',
            name:  'officeNumber',
            message: 'Please enter managers office number.'
        }
    ])
    .then(managerData => { 
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)
        teamMembersArray.push(manager);
        // console.log(managerArray);       
    })
}


const employeePromt = () => {

    console.log(
    `
    =================
    Add a New Employee
    =================
    `);

     return inquirer.prompt([
        {
            type: 'list',
            message: 'What employee type would you like to add?',
            name: 'employee',
            choices: ['engineer','intern']
        },
        {   
            type: 'input',
            name:  'name',
            message: 'Please enter employees name.'
        },
        {
            type: 'input',
            name:  'id',
            message: 'Please enter employees id.'
        },
        {
            type: 'input',
            name:  'email',
            message: 'Please enter employees email.'
        },
        {
            type: 'input',
            name:  'github',
            message: 'If engineer please enter github user name.',
            when: ({employee}) => {
                if(employee === 'engineer'){
                    return true;
                } else{
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'school',
            message:'If intern Please enter school.',
            when:({employee}) => {
                if(employee === 'intern'){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'confirmAddNewEmployee',
            message: ' Would you like to enter another employee?',
            choices: ['yes', 'no']
        }
       ])
       .then(employeeAnswers => {        
            if (employeeAnswers.employee === 'engineer'){
                const newEmployee = new Engineer (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.github);
                // console.log('newEmployee: ', newEmployee);
                teamMembersArray.push(newEmployee)
            }
            else if (employeeAnswers.employee === 'intern'){
                const newEmployee = new Intern (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.school)
                // console.log('newEmployee: ', newEmployee);
                teamMembersArray.push(newEmployee)
            }
            
            if (employeeAnswers.confirmAddNewEmployee === "yes") return employeePromt();
            else if (employeeAnswers.confirmAddNewEmployee === "no") return teamMembersArray;
       })
    }

const writeFile = data => {
    console.log(data);
        fs.writeFile('./dist/index.html', data, err => {
                   if (err) {
                     console.log(err);
                   return;
                    }
             console.log('Page created! Check out index.html in this directory to see it!');
                  
    })
}
const copyFile = () => {
    return new Promise((resolve, reject) =>{

                fs.copyFile('./src/style.css', './dist/style.css', err => {
                      if (err) {
                        reject(err);
                        
                        return;
                      }
                      resolve({
                      ok: true,
                      message:'Style sheet copied successfully!'

                      })
                      
                    });
    })
}

managerPrompt()
.then(employeePromt)
.then(teamMembersArray => generateHTML(teamMembersArray))
.then(pageHTML => writeFile(pageHTML))
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })