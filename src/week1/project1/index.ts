// The process.argv array contains all command-line arguments.
// The first two elements are the node executable and the script file path.
// const args: string[] = process.argv;

// console.log("All arguments:", args);

// // Your custom arguments start at index 2.
// const customArgs: string[] = args.slice(2);

// console.log("Your custom arguments:", customArgs);

// //Example: accessing specific arguments
// if (customArgs.length > 0) {
//   const name: string|undefined = customArgs[0];
//   console.log(`Hello, ${name}!`);
// } else {
//   console.log("No name provided.");
// }

// // You can also parse key-value pairs
// const optionIndex = args.indexOf('--option');
// if (optionIndex !== -1) {
//   const optionValue: string|undefined = args[optionIndex].split('=')[1];
//   console.log(`The option value is: ${optionValue}`);
// }

import { calculate } from './calculate';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command(
    '$0 <operand1> <operator> <operand2>',
    'A simple calculator that takes two numbers and an operator.',
    (yargs) => {
      // The builder function defines the types and descriptions for the arguments
      return yargs
        .positional('operand1', {
          describe: 'The first number',
          type: 'number',
          demandOption: true
        })
        .positional('operator', {
          describe: 'The operator (+, -, *, /)',
          type: 'string',
          demandOption: true
        })
        .positional('operand2', {
          describe: 'The second number',
          type: 'number',
          demandOption: true
        });
    },
    (argv) => {
      // The handler function is where you write your logic
      console.log(`Received values: ${argv.operand1}, ${argv.operator}, ${argv.operand2}`);

      // Now you can use these values in your calculation logic
      const num1 = argv.operand1 as number;
      const op = argv.operator as string;
      const num2 = argv.operand2 as number;

      let result: number|string;
      result = calculate(num1,op,num2)
      console.log(`Result: ${result}`);
    }
  )
  .help()
  .argv;

