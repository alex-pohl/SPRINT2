import inquirer from "inquirer";
import { printDebounced } from "./index.js";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "messageToPrint",
        message: 'Please write a message to debounce'
    }, {
        type: "number",
        name: "delay",
        message: "how much delay do you want? (ms)"
    }
]);
let { messageToPrint, delay } = answers;
printDebounced(messageToPrint, delay);
