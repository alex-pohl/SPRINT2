import inquirer from "inquirer";
import { debounce } from "./index.ts";
import { printSomething } from "./index.ts";
import { printDebounced } from "./index.ts";


const answers: {
    messageToPrint: string,
    delay: number
} = await inquirer.prompt([
    {
        type: "input",
        name: "messageToPrint",
        message: 'Please write a message to debounce'
    },{
        type: "number",
        name: "delay",
        message: "how much delay do you want? (ms)"
    }
])

let {messageToPrint, delay} = answers;

printDebounced(messageToPrint, delay);

