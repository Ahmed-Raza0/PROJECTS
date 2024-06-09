#! /usr/bin/env node

import inquirer from "inquirer";
 
import chalk from "chalk";

const random = Math.floor(Math.random()*10+1)
 

const guessingNumber = await inquirer.prompt([
{
    message:"Enter your number (1-10)",
    type:"number",
    name:"game"
}
])

if (guessingNumber.game===random) {
    console.log(chalk.green("you are win guess game"));
    
}else{
    console.log(chalk.red("you are lose guess game"));
    
}