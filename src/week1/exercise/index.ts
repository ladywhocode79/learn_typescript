// /Users/sonal/typscript/index.ts

const message: string = "Hello, TypeScript!";
// This is an industrial-grade general-purpose greeter function:
//define function with parameter type
function greet(person:any, date:any) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
//define function with parameter type and return type
function add(a:number, b:number): number {
   let c= a+b 
 
   return c 
}

greet("Brendan", new Date());
console.log(message);

//declare variable and assign type
let myName: string = "Alice";
let myNames = "Alice";
console.log(myName);
console.log(myNames);
 console.log(`sum is ${add(2,3)}`);


 //Anonymous Functions
 const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

//Object Types
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//Optional Properties ?
function printName(obj: { first: string; last?: string }) {
 console.log("The first value is " + obj.first);
 console.log("The last value is " + obj.last);
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

//In JavaScript, if you access a property that doesn’t exist, 
// you’ll get the value undefined rather than a runtime error. 
// Because of this, when you read from an optional property, 
// you’ll have to check for undefined before using it.
function printNames(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  //console.log(obj.last.toUpperCase());

//'obj.last' is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

printNames({ first: "Bobs" });
printNames({ first: "Alices", last: "Alissons" });

async function getFavoriteNumber(): Promise<number> {
  return 26;
}

//Union types
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//printId({ myID: 22342 });