#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let balance = 10000;
let myPin = 1122;


console.log(myPin);


let pinAnswer = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"Enter your pin",
            type:"number"
        }
    ]
);

if(pinAnswer.pin === myPin){
   console.log(chalk.green("correct pin code"));
   
   let operations = await inquirer.prompt(
     [
        {
            name:"operation",
            message:"please select the operation",
            type:"list",
            choices:["Widhraw","Check Balance","Fast Cash Option"]
        }
     ]
   );
   console.log(operations);


   if(operations.operation === "Widhraw"){

   let selectAmount = await inquirer.prompt(
      [
        {
            name:"amount",
            message:"Enter your Amount",
            type:"number",
        }
      ]
   );
   
    if(balance >= selectAmount.amount){
          let remainBalance = balance -= selectAmount.amount;
          console.log(chalk.green(`Your remainning blalance is ${remainBalance}`));
          

    }else{
        console.log(chalk.red(`Unsufficient Balance , Your current balance is ${balance}`));
        
    };

   
    }else if(operations.operation === "Check Balance"){
        console.log(chalk.yellow(`Your Balance is ${balance}`));
        
    }else if(operations.operation === "Fast Cash Option"){
        let fashCash = await inquirer.prompt(
            [
                {
                    name:"Selectamount",
                    message:"Select Wihdraw amount",
                    type:"list",
                    choices:["1000","5000",7000],

                }
                 
            ]
        );    
                balance -=fashCash.Selectamount
                console.log(chalk.green(`your amount is ${balance}`));
                
          
    };
   
}


else{
    console.log(chalk.red("incorrect pin code"));
};