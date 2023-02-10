#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import Person from './Person.js';
import Student from './Student.js';
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    console.log(gradient.pastel.multiline(figlet.textSync(`OOP Practice`, { horizontalLayout: 'full' })));
    const rainbowTitle = chalkAnimation.rainbow(`    
     Identify Your Personality Type \n 
    `);
    await sleep();
    rainbowTitle.stop();
    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    ${chalk.hex("#FF5733").bold('If you enjoy conversing with others, enter 1 and press enter.')} 
    ${chalk.hex("#FFA500").bold('If you prefer to remain anonymous, enter 2 and press enter.')}
  `);
}
await welcome();
function isNumber(str) {
    const possibly_a_number = parseInt(str);
    const isNum = !isNaN(possibly_a_number);
    return isNum;
}
async function userInputName() {
    const userName = await inquirer.prompt({
        type: "input",
        name: "user_name",
        message: "What is your name:"
    });
    if (userName.user_name) {
        if (userName.user_name !== "") {
            let studentName = userName["user_name"];
            const student1 = new Student();
            student1.Name = studentName;
            console.log(`Your Name is: ${student1.Name} and your personality is ${student1.getPersonality()}`);
        }
        else {
            console.log(chalk.red("Please enter a number"));
        }
    }
}
async function MainFn() {
    try {
        const answer = await inquirer.prompt({
            name: 'select_a_number',
            type: 'input',
            message: chalk.blue("Type '1' if you like to talk to others or Type '2' If you prefer to remain anonymous:"),
        });
        if (answer.select_a_number !== "") {
            const isNum = isNumber(answer["select_a_number"]);
            console.log(typeof isNum);
            if (isNum) {
                const person = new Person();
                person.askQuestion(answer["select_a_number"]);
                await userInputName();
            }
            else {
                console.log(chalk.red("Please enter a number."));
            }
        }
    }
    catch (error) {
        console.log('Please enter a number.');
    }
}
await MainFn();
