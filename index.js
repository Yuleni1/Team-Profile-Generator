const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Manager = require('../Team-Profile-Generator/lib/Manager');
const Engineer = require('../Team-Profile-Generator/lib/Engineer');

const managerArray =[];
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
        .then(managerData => { 
            const manager = new Manager (managerData.name, managerData.id,managerData.email,managerData.officeNumber)
            managerArray.push(manager);
            console.log(managerArray);
            
        })
}


const employeePromt=() => {

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
       .then(employeeAnswers => {
        if (employee === 'engineer'){
            employee = new Engineer (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.github);
            console.log(employee);
        }
        
       
       })
    } 


    const writeFile = data => {
        fs.writeFile('./dist/index.html', data, err => {
                   if (err) {
                     console.log(err);
                   return;
                    }
             console.log('Page created! Check out index.html in this directory to see it!');
                  
    })
}

managerPrompt()
.then(employeePromt)
// .then( => {
//     console.log(managerArray);
// })
// .then(pageHTML => {
//     return writeFile(pageHTML);
//   })