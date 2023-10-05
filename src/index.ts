//DEBOUNCE FUNCTION

export const debounce = (fn: Function, ms: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: any[]){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms)
    }
}

let delay: number = 0;
export function printSomething(whatever: string, ms: number){
    delay = ms;
    console.log(whatever);

}


export let printDebounced = debounce(printSomething, delay);

printDebounced('This is my text to print', 2000);

