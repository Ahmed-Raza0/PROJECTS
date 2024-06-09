#! /usr/bin/env node
import inquirer from "inquirer";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is your name?",
    },
    {
        name: "age",
        type: "number",
        message: "How old are you?",
    },
]);
console.log(person);
