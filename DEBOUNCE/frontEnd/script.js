
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


let button = document.getElementById("button");
button.addEventListener("click", function(){
    const message = document.getElementById("message").value;
    const delay = document.getElementById("delay").value;

    const printDebounced = debounce(() => {
        console.log(message);
    }, delay);
    
    printDebounced();
})

