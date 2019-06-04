//######################################################################
//string
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var myName = "kate";
/*
myName = 34; //Error, myName is set up as a type of string
*/
//######################################################################
//numbers
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var favNum = 8;
/*
favNum = "3"; //ERror, favNum is expecting a number!
*/
//######################################################################
//boolean
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var hasHobbies = true;
/*
hasHobbies = 1; //Error, 1 is not a boolean!!!!
*/
//######################################################################
//assign types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var myRealAge;
myRealAge = 16;
myRealAge = "16";
//this works becouse we did not specify what kind of
//type the myRealAge variable is expecting so it was setup to type any.
var myCatAge;
myCatAge = 13;
//myCatAge = "13"; => this is wrong becouse its expecting type number
//######################################################################
//array
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var hobbies = ["reading", "knitting"];
hobbies = [100];
//######################################################################
//tuples (an array with mixed types and a limited amount of items)
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// let address = [60, "east"];
//if we know that this is always going to be the format we can be explicit about it:
var address = [60, "east"]; //if we try to assign a string to the 0 index we will get an error
//######################################################################
//enums
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
//######################################################################
//functions
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function returnMyName() {
    //stating that function is expected to return a string
    return myName;
    //return myAge //this will error out
}
//console.log(returnMyName());
//######################################################################
//void
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function sayHello() {
    //this function does not return anything
    console.log("Hi there!");
    //return "something" //this will error out
}
//######################################################################
//argument types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function multiply(num1, num2) {
    return num1 * num2;
}
//console.log(multiply(2, "str")); //=> NaN this will not error out as we did
//not specify that the function is only expected to recieve numeric arguments.
function multiplyNew(num1, num2) {
    return num1 * num2;
}
//console.log(multiplyNew(2,'str'));//Error
//######################################################################
//function types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// let myMultiply;
// myMultiply = sayHello;
//if we want to specify what kind of function we can assign we can do this:
var myMultiply;
//above we specified that the function that can be assigned has to take two values of type number
//and has to return a number
//myMultiply=sayHello; //Error
//Note: the name of arguments does not matter in this case as we only care about their order for correct function excecution
myMultiply = multiplyNew; //this works ok
//######################################################################
//objects
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var userData = {
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
var user = {
    name: "Kate",
    age: 16
};
//######################################################################
//complex object
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [1, 2, 3.4],
    output: function (all) {
        return this.data;
    }
};
//######################################################################
//union types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var myRealAge1;
//in this case, the myRealAge1 variable can be assigned to
//both a number and a string but not anything else.
//######################################################################
//check types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var finalValue = "A string";
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
function neverReturns() {
    throw new Error("An Error");
}
//The function above never returns anything. it throws an error.
//its not the same case as void -
//there is no return at all (not even undefined).
//######################################################################
//Nullable types
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var canBeNull = 12;
canBeNull = null; //that's OK
var canAlsoBeNull; //type=any val=undefined
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
var canThisBeAny;
canThisBeAny = null;
canThisBeAny = 12;
//######################################################################
