const Employee = require('../lib/Employee'); 
const Intern = require('../lib/Intern');

test('creates school', ()=>{
    const intern = new Intern('Yuleni', '650','yuleni@gmail.com' ,'university');

    expect(intern.school).toBe('university');

    })

    test('gets school', ()=>{
        const intern = new Intern('Yuleni', '650','yuleni@gmail.com' ,'university');
    
        expect(intern.getSchool()).toEqual(expect.stringContaining('university'));
        //expect(engineer.getGithub()).toBe('Yuleni1');
    })
    