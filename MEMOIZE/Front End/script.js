function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.join('-');
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        console.log(cache)
        return result;
    };
}
function operation(n) {
    console.log(`Computing the result for ${n}`);
    console.log(n * 2);
    return n * 2;
}
const memoizedOperation = memoize(operation)

document.addEventListener("DOMContentLoaded", function(){
    let button = document.getElementById("button");
    button.addEventListener("click", function(){
        let numberToCompute = document.getElementById("inputBox").value;
        memoizedOperation(numberToCompute)
    })
})

