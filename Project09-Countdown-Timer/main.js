#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
let ans = await inquirer.prompt([
    {
        type: "number",
        name: "userInput",
        message: "Please enter the amount of second",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter a valid number";
            }
            else if (input > 60) {
                return "Seconds must be in 60";
            }
            else {
                return true;
            }
        },
    },
]);
let input = ans.userInput;
const startTimer = (val) => {
    const getSec = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(getSec);
    setInterval(() => {
        let currentTime = new Date();
        const diffTime = differenceInSeconds(intervalTime, currentTime);
        if (diffTime <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((diffTime % (3600 * 24)) / 3600);
        const sec = Math.floor(diffTime % 60);
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
    }, 1000);
};
startTimer(input);
