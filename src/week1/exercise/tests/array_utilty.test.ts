import { contains } from "../../exercise/array_utility";
describe('array contains',() => {
    
    test('should return true if number found in numbers array', () =>{
        expect(contains([1,2,3],2)).toBe(true);    
    
      });
      test('should return false if number not found in numbers array', () =>{
        expect(contains([1,2,3],5)).toBe(false);    
    
      });
     test('should return true if string found strings array', () =>{
        expect(contains(['ab','fg','tu'],'tu')).toBe(true);    
    
      });  

        test('should return false if string not found strings array', () =>{
        expect(contains(['ab','fg','tu'],'1')).toBe(false);    
    
      });  
});