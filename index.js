const fs = require("fs").promises;
const inquirer = require("inquirer");

const questions = require("./lib/questions.js");

async function questioner(){
    const result = await inquirer.prompt(questions).then((data)=>data)
    return result;
};