import { capitalize } from "../capitalize";
describe('capitalize',() => {
    //convert first letter to capital of mixed string
    test('Convert hello -> Hello', () =>{
        expect(capitalize("hello")).toBe("Hello");
    
    })

      //convert first letter to capital of all capitals string
    test('Convert WORLD -> World', () =>{
        expect(capitalize("WORLD")).toBe("World");
    
    })
       //if sent '' , returns ''
    test('sent "" , returns "" ', () =>{
        expect(capitalize("")).toBe("");
    
    })
});
