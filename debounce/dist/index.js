//DEBOUNCE FUNCTION
import inquirer from "inquirer";
export const debounce = (fn, ms) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            console.log(...args);
            fn.apply(this, args);
        }, ms);
    };
};
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "messageToPrint",
        message: 'Please write a message to debounce:\n '
    }, {
        type: "number",
        name: "timer",
        message: "how much delay do you want? (ms):\n "
    }
]);
let { messageToPrint, timer } = answers;
export let printDebounced = debounce(() => messageToPrint, timer);
printDebounced(messageToPrint);
