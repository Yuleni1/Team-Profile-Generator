const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const employees = [];

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
}


const employeePromt=(employeeArray) => {

    console.log(`
=================
Add a New Employee
=================`
);

     return inquirer.prompt([
        {
        type: 'list',
        message: 'What employee type would you like to add?',
        name: 'employee',
        choices: ['engineer','intern','finish building team']

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
        message: 'Please enter github.',
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
            message:'Please enter school.',
            when:({employee}) => {
                if(employee === 'intern'){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmaAddNewEmployee',
            message: ' Would you like to enter another employee?',
            default: false
        }
       ])
       .then(employeeData => {
        employees.push(employeeData);
        console.log(employees)
        if(employeeData.confirmaAddNewEmployee){
            return employeePromt(employeeData);
        }else{
            return employees;
        }
       
       })
    } 
    employeePromt();