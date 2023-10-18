//MEMOIZE FUNCTION
import inquirer from "inquirer";
function memoize(fn: Function) {
  const cache = new Map();

  return function (...args: number[]) {
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

//FUNCTION TO BE ADAPTED TO THE SITUATION
function operation(n: number) {
  console.log(`Computing the result for ${n}`);
  console.log(n*2)
  return n * 2;
}

const memoizedOperation = memoize(operation);



// CLI

const cliWithMemoize = async() => {
  while (true){
    const answers: {
      number: number,
  } = await inquirer.prompt([
      {
          type: "input",
          name: "number",
          message: 'Please input a number to compute on:\n '
      }
  ]);
  const input = answers.number;

  if (isNaN(Number(input))){
    break;
  }else{
    const numberToCompute = input;
    if (!isNaN(numberToCompute)){
      memoizedOperation(numberToCompute)
    }else{
      console.log('Incorrect input')  
    }
  }
  }
}

cliWithMemoize();



