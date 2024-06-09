#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

let playerPoints = 100;

let opponentPoints = 100;

function decreasePoints(entity: string) {
  if (entity === "player") {
    playerPoints -= 20;
  } else {
    opponentPoints -= 20;
  }
}
function refillPoints() {
  playerPoints = 100;
}
async function startGame() {
  const player = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: chalk.cyan("\tENTER YOUR NAME:\n"),
    },
  ]);
  const opponent = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message: chalk.cyan("\tSELECT YCUR OPPONENT\n"),
      choices: ["SKELETON", "MONSTER", "ZOMBIE"],
    },
  ]);

  console.log(chalk.magenta(`THE BATTLE BEGINS ${player.name} VS ${opponent.select}`));

  while (true) {
    const answer = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: chalk.cyan("\tSelect your option\n"),
        choices: ["Attack", "Drink potian", "Run for your dear life"],
      },
    ]);
    if (answer.opt === "Attack") {
      const num = Math.floor(Math.random() * 2);
      if (num > 0) {
        decreasePoints("player");
        console.log(`${player.name} Points is ${playerPoints}`);

        console.log(`Opponent's Points is ${opponentPoints}`);
        if (playerPoints <= 0) {
          console.log(chalk.red("YOU LOSE, BETTER LUCK NEXT TINE"));
          process.exit();
        }
      } else {
        decreasePoints("opponent");

        console.log(`${player.name} Points is ${playerPoints}`);
        
        console.log(`Opponent's Points is ${opponentPoints}`);

        if (opponentPoints <= 0) {
          console.log(chalk.yellow("YOU WIN!"));

          process.exit();
        }
      }
    } else if (answer.opt === "Drink potion") {
      refillPoints();
      console.log(
        chalk.green(`${player.name} drink a potion. Your Points is ${playerPoints}`)
      );
    } else if (answer.opt === "Run tor your dear life") {
      console.log(chalk.red("YOU LOSE, BETTER LUCK NEXT TIME"));
      process.exit();
    }
  }
}

startGame();
