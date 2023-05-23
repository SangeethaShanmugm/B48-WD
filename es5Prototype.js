//prototype -  add new property to constructor
//this - to access object property

let firstName = "Anil";
let lastName = "Kokkul";

let sayHi = {
  firstName: "Hari",
  lastName: "Sudhan",
  greet: function () {
    return `Say Hi to ${this.firstName} ${this.lastName}`;
  },
};

console.log(sayHi.greet()); //Say Hi to Hari Sudhan

//constructor function

function Person() {
  (this.name = "John"), (this.age = 20);
}

//creating object
const person1 = new Person();
const person2 = new Person();
console.log(person1); //Person {name: 'John', age: 20}
//add property gender for constrcutor function
//constructorName.prototype.key = "value"

Person.prototype.gender = "Male";

console.log(person1.name); //John
console.log(person1.gender); //Male

console.log(Person.prototype); //{gender: 'Male', constructor: ƒ}

//es6prototype

class geo {
  constructor() {
    this.lat = 43.22;
    this.long = 32.98;
  }
}

class language extends geo {
  constructor(name, country) {
    super();
    this.name = name;
    this.country = country;
  }
}

var French = new language("French", "France");
console.log(French); //{lat: 43.22, long: 32.98, name: 'French', country: 'France'}
