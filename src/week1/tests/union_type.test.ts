import { formatId } from "../union_type";
describe('formatId',() => {
    
    test('send id as string', () =>{
        expect(formatId("abcd")).toBe("ID: abcd");
        });

     test('send id as number', () =>{
        expect(formatId(10)).toBe("ID: #10");    
    
      });
});