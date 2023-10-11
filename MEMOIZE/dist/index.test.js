//IMPORTS NOT WORKING

function memoize(fn) {
    const cache = new Map();
    const memoized = function (...args) {
        const key = args.join('-');
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
    memoized.cache = cache;
    return memoized;
}
function operation(n) {
    console.log(`Computing the result for ${n}`);
    console.log(n * 2);
    return n * 2;
}
const memoizedOperation = memoize(operation);



test('should use memoize to display the result of operation (n*2): ', () => {
    expect(memoizedOperation(5)).toBe(10)
});
test('should store the values in a .map', () =>{
    memoizedOperation(5);
    expect(memoizedOperation.cache.size).toBeGreaterThan(0);
}
)
