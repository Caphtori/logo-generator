const fs = require("fs").promises;
const inquirer = require("inquirer");
const { renderElements } = require("./lib/elementConstructor.js");
const { LogoName } = require('./lib/logoName.js')

const questions = require("./lib/questions.js");

async function questioner(){
    const result = await inquirer.prompt(questions).then((data)=>data)
    return result;
};

function writeToFile(filename, data) {
    fs.writeFile(`./output/${filename}`, renderElements(data)).then((err) =>
    err ? console.log(err) : console.log('Success!'));
};

async function init(){
    const result = await questioner();
    const logoName = new LogoName(result.logoName);
    writeToFile(logoName.filename, result);
};

init();