//                          TYPESCRIPT

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

//We can initialize empty array like this
let initArray: Array<string> = [];
initArray.push('Filip');
console.log(initArray);


/* -- TUPLES -- */
//Array with defined number and type of elements

let tuple: [string,number] = ['Filip' , 4];

console.log(tuple);

/* -- FUNCTIONS -- */

let tsFunction = (n1:number , n2:number):number =>  {
    return n1 + n2;
}

//Function defined like this cant take anything other than number type variables
//Also: all it can return is a number - NOTHING ELSE
console.log(tsFunction(2,2));

/* -- VARIABLE CASTING -- */

let str: string = '4';
let num: Number = parseInt(str);

let num1: number = 5;
let str2: string = String(num1);
console.log(str2);


/* -- CLASSES -- */

class User {
    name:string;
    email:string;
    protected age:number; //We can use protected variable inside of a class and in any subclasses

    constructor(name:string,email:string,age:number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: ' + this.name);
    }
}
class User1 extends User{
    name1:string;
    
    constructor(name1:string,name:string,email:string,age:number){
        super(name,email,age);
        this.name1 = name1;
        //let con:number = super.age; //We can use age here cause its just protected. It it were private we wouldnt be able to
        //console.log(con);
    }
}

let newUser = new User('Filip' , 'filip@gmail.com' , 23)
//console.log(newUser.age); We cant acces private and protected classes outside of a class

/* -- GENERICS -- */

const last = (array:Array<string>) => {
    return array[array.length -1];
}

let array:Array<string> = ['1','2','3'];

//console.log(last(array)); 

//Problem is this function works just for strings. What if we wanted numbers? 

const newLast = <T>(arr:Array<T>) => {
    return arr[arr.length-1];
}

//T stands for generic type. It says to a function to expect generic type passed.
//Instead of T we could put anything. T is just common one
//Like this we dont use type definiton

let newArr:Array<number> = [1,2,3];

console.log(newLast(newArr));
console.log(newLast(array));

