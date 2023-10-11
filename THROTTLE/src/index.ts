import inquirer from 'inquirer';

const logInput = async () => {
  const questions = [{
    type: 'input',
    name: 'input',
    message: 'Type something: ',
  }];
  let allowProcessInput = true;

  while (true) {
    const answers = await inquirer.prompt(questions);
    const userInput = answers.input;

    if(allowProcessInput){
      console.log('You are typing: ', userInput);
      allowProcessInput = false;

      setTimeout(() => {
        allowProcessInput = true;
      }, 1000);
      }
    }
  }
;

logInput(); 
