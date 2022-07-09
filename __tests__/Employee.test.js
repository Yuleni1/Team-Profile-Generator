const Employee = require('../lib/Employee');

test('creates a employee object', ()=>{
    const employee = new Employee('Yuleni', '650','yuleni@gmail.com' )

expect(employee.name).toBe('Yuleni');
expect(employee.id).toBe('650');
expect(employee.email).toBe('yuleni@gmail.com');
});



