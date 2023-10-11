"use strict";
//MEMOIZE FUNCTION
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.join('-');
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        console.log(cache);
        return result;
    };
}
// Example usage:
function expensiveOperation(n) {
    console.log(`Computing the result for ${n}`);
    return n * 2;
}
const memoizedExpensiveOperation = memoize(expensiveOperation);
console.log(memoizedExpensiveOperation(5));
console.log(memoizedExpensiveOperation(15));
console.log(memoizedExpensiveOperation(52));
console.log(memoizedExpensiveOperation(55));
console.log(memoizedExpensiveOperation(57));
