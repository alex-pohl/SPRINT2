//MEMOIZE FUNCTION

export function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.join('-');
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}
export function operation(n) {
    console.log(`Computing the result for ${n}`);
    console.log(n * 2);
    return n * 2;
}
export const memoizedOperation = memoize(operation);
let numberToCompute;
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "number",
        message: 'Please input a number to compute on:\n '
    }
]);
numberToCompute = answers.number;
memoizedOperation(numberToCompute);
