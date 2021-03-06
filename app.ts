//######################################################################
//string
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let myName: string = "kate";
/*
myName = 34; //Error, myName is set up as a type of string
*/

//######################################################################
//numbers
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let favNum: number = 8;
/*
favNum = "3"; //ERror, favNum is expecting a number!
*/

//######################################################################
//boolean
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let hasHobbies: boolean = true;
/*
hasHobbies = 1; //Error, 1 is not a boolean!!!!
*/

//######################################################################
//assign types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let myRealAge;
myRealAge = 16;
myRealAge = "16";
//this works becouse we did not specify what kind of
//type the myRealAge variable is expecting so it was setup to type any.

let myCatAge: number;
myCatAge = 13;
//myCatAge = "13"; => this is wrong becouse its expecting type number

//######################################################################
//array
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let hobbies: any[] = ["reading", "knitting"];
hobbies = [100];

//######################################################################
//tuples (an array with mixed types and a limited amount of items)
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// let address = [60, "east"];
//if we know that this is always going to be the format we can be explicit about it:
let address: [number, string] = [60, "east"]; //if we try to assign a string to the 0 index we will get an error

//######################################################################
//enums
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
enum Color {
  Gray, //0
  Blue = 100, //
  Green //1
}
let myColor: Color = Color.Gray;
//console.log(myColor); //=>0 values are assigned automatically
myColor = Color.Blue;
//console.log(myColor); //=> 100, we can overide automaticaly assigned values
myColor = Color.Green;
//console.log(myColor); //=> 101, the values keep incrementing from previous one

//######################################################################
//functions
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function returnMyName(): string {
  //stating that function is expected to return a string
  return myName;
  //return myAge //this will error out
}
//console.log(returnMyName());

//######################################################################
//void
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function sayHello(): void {
  //this function does not return anything
  console.log("Hi there!");
  //return "something" //this will error out
}

//######################################################################
//argument types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function multiply(num1, num2): number {
  return num1 * num2;
}
//console.log(multiply(2, "str")); //=> NaN this will not error out as we did
//not specify that the function is only expected to recieve numeric arguments.

function multiplyNew(num1: number, num2: number): number {
  return num1 * num2;
}
//console.log(multiplyNew(2,'str'));//Error

//######################################################################
//function types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// let myMultiply;
// myMultiply = sayHello;
//if we want to specify what kind of function we can assign we can do this:
let myMultiply: (val1: number, val2: number) => number;
//above we specified that the function that can be assigned has to take two values of type number
//and has to return a number
//myMultiply=sayHello; //Error
//Note: the name of arguments does not matter in this case as we only care about their order for correct function excecution
myMultiply = multiplyNew; //this works ok

//######################################################################
//objects
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let userData = {
  name: "Kate",
  age: 16
};
//trying to re-assign the object to an empty object we will recieve an error
//as it expects to recieve types that were initiated in the object at its creation
//userData={};//Error => Type '{}' is missing the following properties from type '{ name: string; age: number; }
// //similar to that, if we try to reassign it to an object that has diferent keys we will get an error

// userData={
//   a: "hi",
//   b=8,
// }; //Error=> Type '{ a: string; b: any; }' is not assignable to type '{ name: string; age: number; }'

//unlike the function case, we do care about how we name the types as in object there is no order so we care about the keys.

//######################################################################
//explicit object typing:
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let user: { name: string; age: number } = {
  name: "Kate",
  age: 16
};

//######################################################################
//complex object
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

//######################################################################
//type alias//
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [1, 2, 3.4],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

//######################################################################
//union types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let myRealAge1: number | string;
//in this case, the myRealAge1 variable can be assigned to
//both a number and a string but not anything else.

//######################################################################
//check types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let finalValue = "A string";
if (typeof finalValue === "string") {
  //do something
}
//to check the type of something we need to put the type into a
//string to check it
if (typeof finalValue === "number") {
  console.log("I will never run becouse finalValue is not a number!!!");
}

//######################################################################
//never
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function neverReturns(): never {
  throw new Error("An Error");
}
//The function above never returns anything. it throws an error.
//its not the same case as void -
//there is no return at all (not even undefined).

//######################################################################
//Nullable types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let canBeNull = 12;
canBeNull = null; //that's OK
let canAlsoBeNull; //type=any val=undefined
//canAlsoBeNull=null; //also OK
//We can add a strict null check to make sure some values would not be able
//to be assigned to null.
//to do that:
/*
go to tsconfig
add in "strictNullChecks": true ti the compiler options
*/

//after we did that we will start getting errors

/*
app.ts:195:1 - error TS2322: Type 'null' is not assignable to type 'number'.

195 canBeNull = null; 
NOTE: we do not get an error for canAlsoBeNull as it is not assigned
to any type and is undefined. since its falsy it can allso be nullified.
*/

/*
To fix the errors we simply need to make all the variables that can be 
nullified a union type of the original type AND null

let canBeNull: number | null = 12;

assigning a variable to null in its creation will only allow null to be its value
so is we would want to reassign its best to ether just declare the variable or create a union type
*/

let canThisBeAny;
canThisBeAny = null;
canThisBeAny = 12;

//######################################################################
//Module Excercise
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//Try to be as explicit as possible and add Types to everything you can!

type Money = { money: number; deposit: (value: number) => void };
let bankAccount: Money = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: Money; hobbies: string[] } = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

//######################################################################
//classes
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

class Perrson {
  public name: string;
  //we do not have to use this.name here.
  //we can add the public before the property to make it available to everyone,
  //but we dont have to as its the default.
  private type: string;
  //we can only access this property from within this class or object that will be based on this class.
  //We will not be able to access private properties from outside of this class.
  protected age: number = 8;
  //protected properties can be available to objects that inherit this class.
  private hobby: string;
  constructor(name: string, public username: string) {
    this.name = name;
  }
  //in the constructor are two ways to assign values to the class with the constructor function
  // the first way will assign a value for the name property that already exists in the class
  //the second will create a new public property on the class called username and assign a value to it.

  //class methods:
  printAge() {
    console.log(this.age);
  }
  setType(type: string) {
    this.type = type;
    console.log(this.type);
    this.setHobby("reading");
  }
  private setHobby(hobby: string) {
    this.hobby = hobby;
    console.log(this.hobby);
  }
}

//using the class:
const perrson = new Perrson("Kate", "KateDK");
console.log(perrson.name, perrson.username);
//we do not have access to type or age as they are protected or private.
perrson.printAge();
perrson.setType("Code Ninja");
//perrson.setHobby('learning'); => will not work with private method

//######################################################################
//Inheritance
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
class Kate extends Perrson {
  name = "Kate";
  constructor(username: string) {
    //when creating a constructor for an extended class we have to call super() first
    //super() calls the constructor of the parent class
    super("Kate", username);
    this.age = 9;
    //in this class we do not have access to the type atribute of the Person class
    //becouse its private.
    //we do however have access to the protected age property
  }
}
const kate = new Kate("mmmmCoffee");
console.log(kate); // {username: "mmmmCoffee", age: 8, name: "Kate"}
//even though we passed a different name to the new object, the class overwrites it

//######################################################################
//Getters & Setters
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

class Plant {
  private _species: string = "Default";
  get species() {
    return this._species;
  }
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "tulip";
console.log(plant.species);

//######################################################################
//Static Properties and Methods
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
//the static keyword enables us to use a class property without having to extantiate it!!!
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(8));

//######################################################################
//Abstract Classes
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

abstract class Project {
  //an abstract class cannot be extenciated directly, we can only inharit from them
  //to use it we must extand from it
  projectName: string = "Default";
  budget: number;

  calcBudget() {
    return this.budget * 2;
  }

  //changeName is an abstract method. what it means is that we do not implement any logic
  //we only specify what it takes and what it returns.
  //we will have to set it up with logic when we will extand from the class
  abstract changeName(name: string): void;
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log("1)", newProject);
newProject.changeName("newName");
console.log("2)", newProject);

//######################################################################
//Private Constructors
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public readonly name: string) {}
  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One!");
    }
    return OnlyOne.instance;
  }
}

//let wrong = new OnlyOne("The Only One");
let right = OnlyOne.getInstance();
//console.log(right.name);
//right.name = "Something Else.."; //We can re-write the name of this singleton if the property is not setup as readonly
// other way is to use only a getter (without a setter)

//######################################################################
//Module Excercise
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//Re-write all this code using TypeScript and Class Features.

// Exercise 1 - How was your TypeScript Class?
class Car {
  public acceleration: number = 0;
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  honk() {
    console.log("Toooooooooot!");
  }
  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//     console.log("Toooooooooot!");
//   };

//   this.accelerate = function(speed: number) {
//     this.acceleration = this.acceleration + speed;
//   };
// }
var car = new Car("BMW");
car.honk();
console.log("1", car.acceleration);
car.accelerate(10);
console.log("2", car.acceleration);
car.accelerate(10);
console.log("3", car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class baseObject {
  width: number = 0;
  length: number = 0;
}

// var baseObject = {
//   width: 0,
//   length: 0
// };

class Rectangle extends baseObject {
  calcSize(): number {
    return this.width * this.length;
  }
}
//var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 3;
console.log("rec sizs:", rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)

class Person {
  private _firstName: string = "";
  get firstName() {
    return this._firstName;
  }

  set firstName(val: string) {
    if (val.length > 3) {
      this._firstName = val;
    } else {
      this._firstName = "";
    }
  }
}
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function() {
//     return this._firstName;
//   },
//   set: function(value) {
//     if (value.length > 3) {
//       this._firstName = value;
//     } else {
//       this._firstName = "";
//     }
//   },
//   enumerable: true,
//   configurable: true
// });
const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
