import { Counter } from "../../exercise/counter";
describe('test intial value , increment and decrement of counter',() => {
    
    test('should return intial value as 0', () =>{
        expect(new Counter().getValue()).toBe(0);    
    
      });

      test('should return incremented value ', () =>{
        expect(new Counter().increment()).toBe(1);    
    
      });

       test('should return decremented value ', () =>{
        expect(new Counter().decrement()).toBe(-1);    
    
      });
      });