"use strict";
//DEBOUNCE FUNCTION
Object.defineProperty(exports, "__esModule", { value: true });
const debounce = (fn, ms = 4000) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};
function printSomething(whatever) {
    console.log(whatever);
}
let printDebounced = debounce(printSomething);
printDebounced('This is my text to print');
