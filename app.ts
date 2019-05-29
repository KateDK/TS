//string
let myName: string = "kate";
/*
myName = 34; //Error, myName is set up as a type of string
*/

//numbers
let favNum: number = 8;
/*
favNum = "3"; //ERror, favNum is expecting a number!
*/

//boolean
let hasHobbies: boolean = true;
/*
hasHobbies = 1; //Error, 1 is not a boolean!!!!
*/

//assign types
let myRealAge;
myRealAge = 16;
myRealAge = "16";
//this works becouse we did not specify what kind of
//type the myRealAge variable is expecting so it was setup to type any.

let myCatAge: number;
myCatAge = 13;
//myCatAge = "13"; => this is wrong becouse its expecting type number

//array
let hobbies: any[] = ["reading", "knitting"];
hobbies = [100];

//tuples (an array with mixed types and a limited amount of items)
// let address = [60, "east"];
//if we know that this is always going to be the format we can be explicit about it:
let address: [number, string] = [60, "east"]; //if we try to assign a string to the 0 index we will get an error

//enums
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

//functions
function returnMyName(): string {
  //stating that function is expected to return a string
  return myName;
  //return myAge //this will error out
}
//console.log(returnMyName());

//void
function sayHello(): void {
  //this function does not return anything
  console.log("Hi there!");
  //return "something" //this will error out
}

//argument types
function multiply(num1, num2): number {
  return num1 * num2;
}
//console.log(multiply(2, "str")); //=> NaN this will not error out as we did
//not specify that the function is only expected to recieve numeric arguments.

function multiplyNew(num1: number, num2: number): number {
  return num1 * num2;
}
//console.log(multiplyNew(2,'str'));//Error

//function types
// let myMultiply;
// myMultiply = sayHello;
//if we want to specify what kind of function we can assign we can do this:
let myMultiply: (val1: number, val2: number) => number;
//above we specified that the function that can be assigned has to take two values of type number
//and has to return a number
//myMultiply=sayHello; //Error
//Note: the name of arguments does not matter in this case as we only care about their order for correct function excecution
myMultiply = multiplyNew; //this works ok

//objects
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

//explicit object typing:
let user: { name: string; age: number } = {
  name: "Kate",
  age: 16
};

//complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};
