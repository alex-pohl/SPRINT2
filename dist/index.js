//DEBOUNCE FUNCTION
export const debounce = (fn, ms = 4000) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};
export function printSomething(whatever) {
    console.log(whatever);
}
export let printDebounced = debounce(printSomething);
printDebounced('This is my text to print');
