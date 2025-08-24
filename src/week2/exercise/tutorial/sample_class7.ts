export class Point {
  x = 10;
  y = 10;
 
  //A function property on a class is called a method. Methods can use all the same type annotations as functions and constructors:
  //Note that inside a method body, it is still mandatory to access fields and other methods via this.. 
  // An unqualified name in a method body will always refer to something in the enclosing scope:


  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

