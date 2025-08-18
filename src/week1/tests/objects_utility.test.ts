import { getUserName } from "../object_utility" ;
import { User } from "../user";
describe('Get a property from an object',() => {
    
    test('Pass a sample user object and assert the correct name is returned', () =>{
        expect(getUserName(new User("Sonal","tower3",1234,"1263377"))).toBe("Sonal");    
       });  
     test('Pass a sample user object and assert invalid name', () =>{
        expect(getUserName(new User("sonal","tower3",1234,"1263377"))).toBe("sonal");    
       }); 
       
});