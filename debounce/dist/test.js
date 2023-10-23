//import { debounce } from "index.js"; NO FUNCIONA!!

const debounce = (fn, ms) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            console.log(...args);
            fn.apply(this, args);
        }, ms);
    };
};

test('Delay function should delay the execution', (done) => {
    const mockFunction = jest.fn();
    const debouncedFunction = debounce(mockFunction, 100);

    debouncedFunction();

    expect(mockFunction).not.toHaveBeenCalled();

    setTimeout(()=> {
        expect(mockFunction).toHaveBeenCalled();
        done();
    }, 150);
})

