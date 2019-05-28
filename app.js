//string
var myName = "kate";
/*
myName = 34; //Error, myName is set up as a type of string
*/
//numbers
var favNum = 8;
/*
favNum = "3"; //ERror, favNum is expecting a number!
*/
//boolean
var hasHobbies = true;
/*
hasHobbies = 1; //Error, 1 is not a boolean!!!!
*/
//assign types
var myRealAge;
myRealAge = 16;
myRealAge = "16";
//this works becouse we did not specify what kind of
//type the myRealAge variable is expecting so it was setup to type any.
var myCatAge;
myCatAge = 13;
//myCatAge = "13"; => this is wrong becouse its expecting type number
//array
var hobbies = ["reading", "knitting"];
hobbies = [100];
//tuples (an array with mixed types and a limited amount of items)
// let address = [60, "east"];
//if we know that this is always going to be the format we can be explicit about it:
var address = [60, "east"]; //if we try to assign a string to the 0 index we will get an error
//enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Green"] = 101] = "Green"; //1
})(Color || (Color = {}));
var myColor = Color.Gray;
//console.log(myColor); //=>0 values are assigned automatically
myColor = Color.Blue;
//console.log(myColor); //=> 100, we can overide automaticaly assigned values
myColor = Color.Green;
//console.log(myColor); //=> 101, the values keep incrementing from previous one
//functions
function returnMyName() {
    //stating that function is expected to return a string
    return myName;
    //return myAge //this will error out
}
console.log(returnMyName());
//void
function sayHello() {
    //this function does not return anything
    console.log("Hi there!");
    //return "something" //this will error out
}
