import { calculate } from ".././calculate";
describe('validate calculate function',() => {
   
    test('add 1+2 equal to 3', () =>{
        expect(calculate(1,'+',2)).toBe(3);
    
   });
    test('add 2*2 equal to 4', () =>{
        expect(calculate(2,'*',2)).toBe(4);
    
   });
     test('add 4-2 equal to 2', () =>{
        expect(calculate(4,'sub',2)).toBe(2);
    
   });
     test('add 6/3 equal to 2', () =>{
        expect(calculate(6,'/',3)).toBe(2);
    
   });
    test('add error when division by 0', () =>{
        expect(calculate(6,'/',0)).toBe("Division by zero is not allowed");
    
   });
});
