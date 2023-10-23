import inquirer from 'inquirer';
import { throttleInput, processInput } from './index.js';
const main = async () => {
    const questions = [
        {
            type: 'input',
            name: 'input',
            message: 'Type something (press Ctrl+C to exit):',
        }
    ];
    const throttleCallback = throttleInput(processInput);
    while (true) {
        const answers = await inquirer.prompt(questions);
        const userInput = answers.input;
        throttleCallback(userInput);
    }
};
main();
