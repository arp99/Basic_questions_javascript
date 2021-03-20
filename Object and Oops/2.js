class Employee{
    constructor(name , id , basic , HRA , allowances){
        this.name = name;
        this.id = id;
        this.basic = basic;
        this.HRA = HRA;
        this.allowances = allowances;
    }
    getSalary(){
        return this.basic + this.HRA + this.allowances;
    }
}

//creating instance
const emp1 = new Employee('Sinchan','1',60000,10000,20000);
const emp2 = new Employee('Nobita','2',65000,10000,25000);
console.log('Net salary of employee1: ',emp1.getSalary());
console.log('Net salary of employee2: ',emp2.getSalary());