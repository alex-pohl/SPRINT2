//DEBOUNCE FUNCTION
import inquirer from "inquirer";

export const debounce = (fn: Function, ms: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: any[]){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            console.log(...args);
            fn.apply(this, args);}, ms)
        }
    }



const answers: {
    messageToPrint: string,
    timer: number
} = await inquirer.prompt([
    {
        type: "input",
        name: "messageToPrint",
        message: 'Please write a message to debounce:\n '
    },{
        type: "number",
        name: "timer",
        message: "how much delay do you want? (ms):\n "
    }
]);

let {messageToPrint, timer} = answers;
export let printDebounced = debounce(()=> messageToPrint, timer );


printDebounced(messageToPrint);

