export class abc {
    //The strictPropertyInitialization setting controls whether class fields need to be initialized in the constructor.

  name:string

  constructor(){
    this.name="hello set in constructor"
  }
}
 
const ab = new abc();

console.log(`var ${ab.name}`)