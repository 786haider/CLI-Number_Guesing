#! /usr/bin/env node

import inquirer from "inquirer";

//  (1) Computer will generate a random number

//(2)User input for guessing number

//(3)Compare  user input with computer generate number

const randomNumber= Math.floor(Math.random()* 10+1);


const awnsers = await inquirer.prompt([
    {
        message:"Please guess a number between 1 to 10:", 
       type:"number",
       name:"userGuessedNumber",
      },
]);

if(awnsers.userGuessedNumber ===randomNumber){
    console.log("Congratulation ! you guessed right number 🥳 ");
}
else {
    console.log("You guessed wrong number ☠");
    
}











