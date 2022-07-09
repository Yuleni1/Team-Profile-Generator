const Employee = require('../lib/Employee');

test('creates a employee object', ()=>{
    const employee = new Employee('Yuleni', '650','yuleni@gmail.com' )

expect(employee.name).toBe('Yuleni');
expect(employee.id).toBe('650');
expect(employee.email).toBe('yuleni@gmail.com');
});

test("gets employee name",() =>{
    const employee = new Employee('Yuleni')

    expect(employee.getName()).toBe('Yuleni')
})

test("gets employee id",()=>{
    const employee = new Employee('Yuleni','650')

    
    expect(employee.getId()).toBe('650')
})
test("gets employee email",()=>{
    const employee = new Employee('650','yuleni@gmail.com')

    
    expect(employee.getId()).toBe('yuleni@gmail.com')
})

test("gets role",()=>{
    const employee = new Employee('Yuleni')
    expect(employee.getRole()).toBe('Employee')
})

