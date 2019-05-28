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
