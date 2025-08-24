export class abc {
    //Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.

  readonly name:string = "happy"

  constructor(){
    this.name="hello set in constructor"
  }
}
 
const ab = new abc();
//ab.name="sonal"

console.log(`var ${ab.name}`)