#! /usr/bin/env node
import inquirer from "inquirer";
let ToDo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you  want to add your todo? ",
        },
        {
            name: "add",
            type: "confirm",
            message: "Do you want to add more",
            default: "false",
        },
    ]);
    ToDo.push(addTask.todo);
    condition = addTask.add;
    console.log(ToDo);
}
if (ToDo.length > 0) {
    console.log("Your todo list:");
    ToDo.forEach((tod) => {
        console.log(tod);
    });
}
else {
    console.log("no todo found");
}
