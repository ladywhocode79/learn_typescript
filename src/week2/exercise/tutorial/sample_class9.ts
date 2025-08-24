export interface Pingable {
  ping(): void;
}
//  classes in JavaScript can inherit from base classes.

// implements
//  Clauses
// You can use an implements clause to check that a class satisfies a particular interface. An error will be issued if a class fails to correctly implement it:
//Classes may also implement multiple interfaces, e.g. class C implements A, B {.
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
class Ball implements Pingable {
  ping() {
    console.log("pong!");
  }
}