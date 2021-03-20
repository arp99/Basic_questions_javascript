class BankAccount{
    constructor(name , accNo , balance , type , ifsc){
        this.name = name;
        this.accountNumber = accNo;
        this.balance = balance;
        this.type = type;
        this.IFSC = ifsc;
    }
}

//creating instances
const cust1 = new BankAccount('Nobita' , 1234 , 80000, 'savings',123456)
const cust2 = new BankAccount('Sunio' , 5678 , 70000, 'savings',567234)
const cust3 = new BankAccount('Jian' , 9011 , 90000, 'savings',999567)

console.log(`Customer name: ${cust1.name} Balance: ${cust1.balance}`)
console.log(`Customer name: ${cust2.name} Balance: ${cust2.balance}`)
console.log(`Customer name: ${cust3.name} Balance: ${cust3.balance}`)
console.log(`Average account balance: ${((cust1.balance + cust2.balance + cust3.balance)/3).toFixed(2)}`)