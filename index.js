#!/usr/bin/env node 
import inquirer from 'inquirer';
import chalk from 'chalk';
var answer = await inquirer.prompt([{
    name : "goodname", 
    type : "string", 
    message: "Enter your good name"
}
])
console.log(chalk.red(answer.goodname));
