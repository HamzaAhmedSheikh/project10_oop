#!/usr/bin/env node
import chalk from 'chalk';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
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
