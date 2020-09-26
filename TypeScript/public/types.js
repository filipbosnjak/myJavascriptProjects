"use strict";
//                          TYPESCRIPT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//  Its a superset of javascript. Any valid javascript is valid typescript.
//  TypeScript extend JavaScript with new features. Developed by Microsoft.
//  What Typescript offers us?
//  -> Static Type Checking - we re required to specify our types - like in for eg. Java or C - makes code more readable and descriptive
//  -> Types: String, Number, Boolean, Array, Any, Void, Null, Tuple, Enum, Generics
//  -> We can use classes and OOP - ES6 Syntax supported (yaay)
//  -> Modularity - importing ts code
//  -> Encapsulation with private and protected variables
//  -> Inheritance
//  Compile ts -> js | tsc types.ts | Npm installation | Live compilation on save tsc types.ts -w (w for watch)
//  Js file is what we include in our project | Always close js file while working on ts file
//TypeScript Workflow
//Usually we have one folder that is going to be deployed and another with ts source code. Here we need config.json
//--> ts --init -> This creates tsconfig.json file where we have our config settings
//We have to change rootDir and
/* -- TYPES IN TYPESCRIPT -- */
var mystring = 'Hello World';
var string1 = 'Hello';
var string2 = 'World';
// We can assign function return to a string
var string3 = 'Filip'.slice(0, 3);
console.log(string1 + ' ' + string2);
console.log(string3);
/* -- ARRAY OF STRINGS -- */
var string4 = ['String1', 'String2', 'String3'];
console.log(string4[1]);
var numArr = [1, 2, 3];
console.log(numArr);
/* -- TUPLES -- */
//Array with defined number and type of elements
var tuple = ['Filip', 4];
console.log(tuple);
/* -- FUNCTIONS -- */
var tsFunction = function (n1, n2) {
    return n1 + n2;
};
//Function defined like this cant take anything other than number type variables
//Also: all it can return is a number - NOTHING ELSE
console.log(tsFunction(2, 2));
/* -- VARIABLE CASTING -- */
var str = '4';
var num = parseInt(str);
var num1 = 5;
var str2 = String(num1);
console.log(str2);
/* -- CLASSES -- */
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created: ' + this.name);
    }
    return User;
}());
var User1 = /** @class */ (function (_super) {
    __extends(User1, _super);
    function User1(name1, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.name1 = name1;
        return _this;
        //let con:number = super.age; //We can use age here cause its just protected. It it were private we wouldnt be able to
        //console.log(con);
    }
    return User1;
}(User));
var newUser = new User('Filip', 'filip@gmail.com', 23);
//console.log(newUser.age); We cant acces private and protected classes outside of a class
/* -- GENERICS -- */
var last = function (array) {
    return array[array.length - 1];
};
var array = ['1', '2', '3'];
//console.log(last(array)); 
//Problem is this function works just for strings. What if we wanted numbers? 
var newLast = function (arr) {
    return arr[arr.length - 1];
};
//T stands for generic type. It says to a function to expect generic type passed.
//Instead of T we could put anything. T is just common one
//Like this we dont use type definiton
var newArr = [1, 2, 3];
console.log(newLast(newArr));
console.log(newLast(array));
