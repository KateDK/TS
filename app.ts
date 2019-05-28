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
  Green, //1
  Blue = 100 //
}
let myColor: Color = Color.Green;
console.log(myColor); //=>1 values are assigned automatically
myColor = Color.Blue;
console.log(myColor); //=> 100, we can overide automaticaly assigned values
