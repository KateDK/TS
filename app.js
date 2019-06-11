var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
//######################################################################
//classes
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        //we can only access this property from within this class or object that will be based on this class.
        //We will not be able to access private properties from outside of this class.
        this.age = 8;
        this.name = name;
    }
    //in the constructor are two ways to assign values to the class with the constructor function
    // the first way will assign a value for the name property that already exists in the class
    //the second will create a new public property on the class called username and assign a value to it.
    //class methods:
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
        this.setHobby("reading");
    };
    Person.prototype.setHobby = function (hobby) {
        this.hobby = hobby;
        console.log(this.hobby);
    };
    return Person;
}());
//using the class:
var person = new Person("Kate", "KateDK");
console.log(person.name, person.username);
//we do not have access to type or age as they are protected or private.
person.printAge();
person.setType("Code Ninja");
//person.setHobby('learning'); => will not work with private method
//######################################################################
//Inheritance
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var Kate = /** @class */ (function (_super) {
    __extends(Kate, _super);
    function Kate(username) {
        var _this = 
        //when creating a constructor for an extended class we have to call super() first
        //super() calls the constructor of the parent class
        _super.call(this, "Kate", username) || this;
        _this.name = "Kate";
        _this.age = 9;
        return _this;
        //in this class we do not have access to the type atribute of the Person class
        //becouse its private.
        //we do however have access to the protected age property
    }
    return Kate;
}(Person));
var kate = new Kate("mmmmCoffee");
console.log(kate); // {username: "mmmmCoffee", age: 8, name: "Kate"}
//even though we passed a different name to the new object, the class overwrites it
//######################################################################
//Getters & Setters
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "tulip";
console.log(plant.species);
//######################################################################
//Static Properties and Methods
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
//the static keyword enables us to use a class property without having to extantiate it!!!
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(8));
//######################################################################
//Abstract Classes
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var Project = /** @class */ (function () {
    function Project() {
        //an abstract class cannot be extenciated directly, we can only inharit from them
        //to use it we must extand from it
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log("1)", newProject);
newProject.changeName("newName");
console.log("2)", newProject);
