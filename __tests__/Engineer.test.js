const Employee = require('../lib/Employee'); 
const Engineer = require('../lib/Engineer');

test('creates github', ()=>{
    const engineer = new Engineer('Yuleni', '650','yuleni@gmail.com' ,'Yuleni1');

    expect(engineer.github).toBe('Yuleni1');

    })

test('gets github', ()=>{
    const engineer = new Engineer('Yuleni', '650','yuleni@gmail.com' ,'Yuleni1');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('Yuleni1'));
    //expect(engineer.getGithub()).toBe('Yuleni1');
})
