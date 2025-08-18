import { sum } from "../sum";
describe('check function sum',() => {
    //Test two positive number
    test('add 1+2 equal to 3', () =>{
        expect(sum(1,2)).toBe(3);
    
    })
      //Test one positive and negative  number
    test('add 5_-2 ', () =>{
        expect(sum(5,-2)).toBe(3)
    
    })
       //Test one number is undefined
    test('one of them is undefined', () =>{
        expect(sum(5)).toBe(5)
    
    })

         //Test all undefined
    test('both are undefined', () =>{
        expect(sum()).toBe(0)
    
    })
     // Another test block for a different case
  test('adds negative numbers correctly', () => {
    expect(sum(-1, -5)).toBe(-6);
  });

  // Jest has many matchers, for example, toEqual for objects
  test('adds floating-point numbers', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // Use toBeCloseTo for floats
  });

    
  test('add two non-numbers', () => {
    expect(sum("a","b")).toBe("ab"); 
     });
});

