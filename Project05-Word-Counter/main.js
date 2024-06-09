#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        name: "Line",
        type: "input",
        message: "Enter the words ",
    },
]);
const words = answer.Line.trim().split(" ");
console.log(words);
console.log(chalk.yellowBright(`Your sentence words ${words.length}`));
