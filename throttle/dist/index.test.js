
const throttleInput = (inputCallback) => {
  let allowProcessInput = true;
  const inputInterval = 1000;
  return (userInput) => {
      if (allowProcessInput) {
          inputCallback(userInput);
          allowProcessInput = false;
          setTimeout(() => {
              allowProcessInput = true;
          }, inputInterval);
      }
  };
};

const processInput = (userInput) => {
  console.log('You are typing: ', userInput);
};

jest.useFakeTimers();

describe('throttleInput', () => {
  it('should call the inputCallback once with the provided input', () => {
    const inputCallback = jest.fn();
    const throttledCallback = throttleInput(inputCallback);

    throttledCallback('Test Input');

    expect(inputCallback).toHaveBeenCalledWith('Test Input');

    throttledCallback('Another Input');

    expect(inputCallback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);

    throttledCallback('Yet Another Input');

    expect(inputCallback).toHaveBeenCalledWith('Yet Another Input');
  });
});

describe('processInput', () => {
  it('should log the input to the console', () => {
    const consoleLog = jest.spyOn(console, 'log');
    consoleLog.mockImplementation(() => {});

    processInput('Test Input');

    expect(consoleLog).toHaveBeenCalledWith('You are typing: ', 'Test Input');
  });
});
