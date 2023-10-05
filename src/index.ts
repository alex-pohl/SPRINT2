//DEBOUNCE FUNCTION

const debounce = (fn: Function, ms = 4000) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: any[]){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms)
    }
}

function printSomething(whatever: string){
    console.log(whatever);
}

let printDebounced = debounce(printSomething);

printDebounced('This is my text to print');