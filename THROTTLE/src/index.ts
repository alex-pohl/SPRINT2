const throttleInput = (inputCallback: (userInput: string) => void) => {
  let allowProcessInput = true;
  const inputInterval = 1000;

  return (userInput: string) => {
    if (allowProcessInput) {
      inputCallback(userInput);
      allowProcessInput = false;

      setTimeout(() => {
        allowProcessInput = true;
      }, inputInterval);
    }
  };
};

const processInput = (userInput: string) => {
  console.log('You are typing: ', userInput);
};

export { throttleInput, processInput };

