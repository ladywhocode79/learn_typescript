import { User } from "./user";
export function getUserName(user: { name: string;
     address: string;pincode:number;phoneNumber:string }): string
 {
    
    // Requirements: Takes a user object and returns only the name property.
    //Tests: Pass a sample user object and assert the correct name is returned.
    const userOne = user
    const name = userOne.name
    
  return name
}