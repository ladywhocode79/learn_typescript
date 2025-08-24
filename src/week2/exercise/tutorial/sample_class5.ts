export class Point {
  //Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:
  // x: number;
  // y: number;
 
  // // Normal signature with defaults
  // constructor(x = 0, y = 0) {
  //   this.x = x;
  //   this.y = y;
  // }

  //There are just a few differences between class constructor signatures and function signatures:

// Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
// Constructors can’t have return type annotations - the class instance type is always what’s returned

  z: number=0;
  k: number=0;
 
    // Constructor overloads
  constructor(z: number, k: number);
  constructor(zk: string);
  constructor(z: string | number, k: number = 0) {
    // Code logic here
  }
}
