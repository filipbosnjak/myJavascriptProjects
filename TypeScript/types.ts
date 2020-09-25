//                          TYPESCRIPT

//  Its a superset of javascript. Any valid javascript is valid typescript. Developed by Microsoft.

//  What Typescript offers us?
//  -> Static Type Checking - we re required to specify our types - like in for eg. Java or C - makes code more readable and descriptive
//  -> Types: String, Number, Boolean, Array, Any, Void, Null, Tuple, Enum, Generics
//  -> We can use classes and OOP - ES6 Syntax supported (yaay)
//  -> Modularity - importing ts code
//  -> Encapsulation with private and protected variables
//  -> Inheritance

//  Compile ts -> js | tsc types.ts | Npm installation | Live compilation on save tsc types.ts -w (w for watch)
//  Js file is what we include in our project | Always close js file while working on ts file


/* -- TYPES IN TYPESCRIPT -- */ 

let mystring: String = 'Hello World';
let string1: String = 'Hello';
let string2: String = 'World';

// We can assign function return to a string

let string3: String = 'Filip'.slice(0,3);

console.log(string1 + ' ' + string2);
console.log(string3);

/* -- ARRAY OF STRINGS -- */

let string4: Array<String> = ['String1' , 'String2' , 'String3'];

console.log(string4[1]);

let numArr: Array<Number> = [1,2,3];

console.log(numArr);


/* -- TUPLES -- */
//Array with defined number and type of elements

let tuple: [string,number] = ['Filip' , 4];

console.log(tuple);

/* -- FUNCTIONS -- */

let tsFunction = (n1:number , n2:number) => {
    return n1 + n2;
}

//Function defined like this cant take anything other than number type variables
console.log(tsFunction(2,2));

