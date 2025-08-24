export interface Animal {
  dateOfBirth: any;
}
 
interface Dog extends Animal {
  breed: any;
}
 
class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}
//  class fields are initialized after the parent class constructor completes, overwriting any value set by the parent class.
//   This can be a problem when you only want to re-declare a more accurate type for an inherited field. 
//  To handle these cases, you can write declare to indicate to TypeScript that there should be no runtime effect for this field declaration.
class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}