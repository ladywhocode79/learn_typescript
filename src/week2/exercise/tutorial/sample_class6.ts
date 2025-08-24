export class Base {
  

  z: number=0;
  k: number=0;
}
//if you have a base class, you’ll need to call super(); in your constructor body before using any this. members:
class Derived extends Base{
 
    // Constructor overloads
  constructor(){
    super();
    console.log(this.k);
    
  }
  
  }

