export class Point {
    //As with other locations, the type annotation is optional, but will be an implicit any if not specified.

//Fields can also have initializers; these will run automatically when the class is instantiated:

  x= 1;
  y= 2;
}
 
const pt = new Point();

console.log(`var1= ${pt.x} && var2= ${pt.y}`)