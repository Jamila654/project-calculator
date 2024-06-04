#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green.bold.underline("\t ⭕️Welcome⭕️"))

const answer = await inquirer.prompt([
    {
      type:'number',
      name:'num1',
      message: chalk.bold.blueBright('Enter the first number 💻: ')
    },
    {
        type:'number',
        name:'num2',
        message: chalk.bold.yellowBright('Enter the second number 💻: ')
    },
    {
        type:'list',
        name:'operator',
        message: chalk.bold.greenBright('Choose one operator 🔻'),
        choices:[chalk.blue('Add ➕'), chalk.yellow('Subtract ➖'), chalk.green('Multiply *️⃣'), chalk.red('Divide ➗')]
    }
]);

let result: number;

switch(answer.operator)
{
    case chalk.blue('Add ➕'):
        result = answer.num1 + answer.num2
        console.log(chalk.blueBright("The answer for addition is: 🟰  ") + chalk.whiteBright(result),'👈')
        console.log(chalk.bold.magentaBright("Turning off ") + "🛑 🛑 🛑")
        break;

    case chalk.yellow('Subtract ➖'):
        result = answer.num1 - answer.num2
        console.log(chalk.yellowBright("Your answer for subtraction is 🟰  ") + chalk.whiteBright(result))
        console.log(chalk.bold.magentaBright("Turning off ") + "🛑 🛑 🛑")
        break;

    case chalk.green('Multiply *️⃣'):
        result = answer.num1 * answer.num2
        console.log(chalk.greenBright("your answer for multiplication is 🟰  ") + chalk.whiteBright(result))
        console.log(chalk.bold.magentaBright("Turning off ") + "🛑 🛑 🛑")
        break;

    case chalk.red('Divide ➗'):
        result = answer.num1 / answer.num2
        console.log(chalk.redBright("Your answer for division is 🟰  " ) + chalk.whiteBright(result))
        console.log(chalk.bold.magentaBright("Turning off ") + "🛑 🛑 🛑")
        break;
}
    