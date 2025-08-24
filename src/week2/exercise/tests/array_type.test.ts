import { Array_Type } from "../../exercise/generic_utility"
describe('test Returns the last item of an array, or undefined if the array is empty',() => {
    const numbers : number[] = [1,2,3]
    let a_type = new Array_Type()
    
    
    test('should return last value in numbers array', () =>{
        expect(a_type.last(numbers)).toBe(3);    
    
      });
    const string : string[] = ["abd","dfe","qwe","lpd"]  
     test('should return last value in string array', () =>{
        expect(a_type.last(string)).toBe("lpd");    
    
      });
      const empty : string[] = []  
     test('should return undefined as string array is empty', () =>{
        expect(a_type.last(empty)).toBe(undefined);    
    
      });
   
      });