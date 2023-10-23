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
export { throttleInput, processInput };
