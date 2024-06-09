#! /usr/bin/env node
import inquirer from "inquirer";
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`You Withdraw $${amount} Successfully!!\n`);
            console.log(`\nYour Remaining Balance is: $${this.balance}`);
        }
        else {
            console.log("Insufficient Balance ..");
        }
    }
    deposit(amount) {
        if (amount > 100) {
            amount -= 1;
        }
        this.balance += amount;
        console.log(`\nYou Successfully deposit $${amount}`);
        console.log(`\nYour Remaining Balance is: $${this.balance}`);
    }
    checkBalance() {
        console.log(`Your Current Balance is: $${this.balance}`);
    }
}
class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    account;
    constructor(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
}
const accounts = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 1500),
];
console.log(accounts);
const customers = [
    new Customer("Ahmed", "Raza", "Male", 19, 3112242143, accounts[0]),
    new Customer("Dansh", "Raza", "Male", 26, 3112242143, accounts[1]),
    new Customer("Ghulam", "Raza", "Male", 65, 3112242143, accounts[2]),
];
async function service() {
    do {
        const accNumInput = await inquirer.prompt([
            {
                name: "accountNumber",
                type: "number",
                message: "Enter Your Account Number:",
            },
        ]);
        const customer = customers.find((customer) => customer.account.accountNumber === accNumInput.accountNumber);
        if (customer) {
            console.log(` Welcome!!!, ${customer.firstName} ${customer.lastName}\n`);
            const ans = await inquirer.prompt([
                {
                    name: "select",
                    type: "list",
                    message: "Select An Operation..",
                    choices: ["Deposit", "Withdraw", "Check Balance", "Exit"],
                },
            ]);
            switch (ans.select) {
                case "Deposit":
                    const depositAmount = await inquirer.prompt([
                        {
                            name: "amount",
                            type: "number",
                            message: "Enter The Amount To Deposit:",
                        },
                    ]);
                    customer.account.deposit(depositAmount.amount);
                    break;
                case "Withdraw":
                    const withdrawAmount = await inquirer.prompt([
                        {
                            name: "amount",
                            type: "number",
                            message: "Enter The Amount To Withdraw:",
                        },
                    ]);
                    customer.account.withdraw(withdrawAmount.amount);
                    break;
                case "Check Balance":
                    customer.account.checkBalance();
                    break;
                case "Exit":
                    console.log("\nExiting Program !!!");
                    console.log("\nThank You For Coming .. Have a Nice Day !!!");
                    return;
            }
        }
        else {
            console.log(" Invalid Account Number.. Please Try Again !!!");
        }
    } while (true);
}
service();
