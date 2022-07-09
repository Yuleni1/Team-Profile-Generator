

class Employee {
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email=email;
        
    }

    getName(){
        return `employee ${this.name} has been created`
        
    }

    getId(){
        
        return this.id
      
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee';
    }
}


module.exports = Employee;