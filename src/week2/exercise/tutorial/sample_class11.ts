export class Base {
  greet() {
    console.log("Hello, world!");
  }
}
//  A derived class can also override a base class field or property. 
//  You can use the super. syntax to access base class methods. 
//  Note that because JavaScript classes are a simple lookup object, there is no notion of a “super field”.

// TypeScript enforces that a derived class is always a subtype of its base class.
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
 
const d = new Derived();
d.greet();
d.greet("reader");