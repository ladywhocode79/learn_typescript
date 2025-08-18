//Goal: Create a command-line tool for basic arithmetic.
// Specification:
// The tool is run via ts-node index.ts <operand1> <operator> <operand2>, e.g., ts-node index.ts 10 * 5.
// The core logic must be in a separate, tested calculate(op1: number, operator: string, op2: number): number function.
// Supported operators: +, -, *, /.
// Error Handling: calculate must throw new Error('Division by zero is not allowed.') for division by zero. 
// The main index.ts should catch this error and print a friendly message to the console.
// Tests: The test suite must validate all operators and the specific division-by-zero error case.

export function calculate(op1: number, operator: string, op2: number): number | string {
    let result: number|string;
     console.log(`Received values in function: ${op1}, ${operator}, ${op2}`);
    if (operator === '+')
        result = op1 + op2
    else if (operator === '-') {
        if (op1 > op2)
            result = op1 - op2
        else
            result = op2 - op1
    }
    else if (operator === '/')
        if(op2 > 0)
            result = op1 / op2
        else
         result= "Division by zero is not allowed"
         
    else
        result = op1 * op2
        
    return result
}


