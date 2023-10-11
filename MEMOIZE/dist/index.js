//MEMOIZE FUNCTION
import inquirer from "inquirer";
function memoize(fn) {
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
function operation(n) {
    console.log(`Computing the result for ${n}`);
    console.log(n * 2);
    return n * 2;
}
const memoizedOperation = memoize(operation);
let numberToCompute;
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "number",
        message: 'Please input a number to compute on:\n '
    }
]);
numberToCompute = answers.number;
memoizedOperation(numberToCompute);
