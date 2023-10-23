import inquirer, { QuestionCollection } from 'inquirer';
import { throttleInput, processInput } from './index.js';

const main = async () => {
  const questions: QuestionCollection[] = [
    {
      type: 'input',
      name: 'input',
      message: 'Type something (press Ctrl+C to exit):',
    }
  ];

  const throttleCallback = throttleInput(processInput);

  while (true) {
    const answers = await inquirer.prompt<Record<string, any>>(questions) as { input: string };
    const userInput: string = answers.input;
    throttleCallback(userInput);
  }
};

main();
