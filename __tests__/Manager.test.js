const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates office number', ()=>{
    const manager = new Manager('Yuleni', '650','yuleni@gmail.com' ,'12b');

    expect(manager.officeNumber).toBe('12b');

})