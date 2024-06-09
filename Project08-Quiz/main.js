#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let points = 0;
let answer1 = await inquirer.prompt([
    {
        name: "one",
        message: "Which student are you involved",
        type: "list",
        choices: ["Online", "Onsite", "Offline", "None of them"],
    },
]);
if (answer1.one == "Onsite") {
    console.log(chalk.green("Your answer is correct"));
    points += 5;
}
else {
    console.log(chalk.red("Your answer is incorret "));
}
let answer2 = await inquirer.prompt([
    {
        name: "two",
        message: "Typescript is a superset of ",
        type: "list",
        choices: ["Javascript", "Python", "C++", "None of them"],
    },
]);
if (answer2.two == "Javascript") {
    console.log(chalk.green("Your answer is correct"));
    points += 5;
}
else {
    console.log(chalk.red("Your answer is incorret "));
}
if (points >= 10) {
    console.log(chalk.green(`Your Points is ${points},Congratulation you got full marks`));
}
else if (points >= 5) {
    console.log(chalk.yellow(`Your Points is ${points},Not bad keep it up never give up`));
}
else {
    console.log(chalk.red(`Your Points is ${points},Sorry you lose try again`));
}
