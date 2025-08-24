export class Point {
    //A field declaration creates a public writeable property on a class:
    // If you intend to definitely initialize a field through means other than the constructor 
    // (for example, maybe an external library is filling in part of your class for you), 
    // you can use the definite assignment assertion operator, !:
  x!: number;
  y!: number;
}
 
const pt = new Point();
pt.x = 0;
pt.y = 0;
console.log(`var1= ${pt.x} && var2= ${pt.y}`)