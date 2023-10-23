import { throttleInput, processInput } from '../dist/index.js';



const userInputBox = document.getElementById('userInput');
const outputBox = document.getElementById('output');

const throttledProcessInput = throttleInput((userInput) => {
    processInput(userInput);
    updateOutput(userInput);
});

userInputBox.addEventListener('input', function (event) {
    throttledProcessInput(event.target.value);
});

function updateOutput(text) {
    outputBox.innerHTML = 'Escribiendo: ' + text;
}