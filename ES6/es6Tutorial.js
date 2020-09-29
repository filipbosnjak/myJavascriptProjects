//Variable scoping and variables generally

var counter = 5;

function sayName1(){
    var name = "Ed";
    let sth  = 34
    console.log(name);
}

sayName1();

//console.log(name);
//Doesn't do anything because variable 'name' is declared locally
//console.log(sth);

const pi = 3.14; //We can't reassign this variable. We would get an error for sth like 'pi = 4;'

let counter1 = 10;
counter1 = 15;//This is perfectly legal

//-->VAR VS LET -> Var is available within the scope of the function and let is available within the scope of {} no matter what it was.
//In for loop for(...){} we have curly brackets and its better to use let than var cause let wont get out of the scope of for loop and mess 
//our code

/* -- STRING CONCAT... Using backticks `` alt+7 So: `...${variableName}...` -- */

const message = "Hello World!";

//alert(`Message: ${message}`);

/* -- OBJECT LITERALS -- */

function showBook(title,author){
    return {
        title,author //Before ES6 we would write title:title,author:author
    };
}
//let newBook = showBook('Book','Author');
//console.log(newBook);

/* -- OBJECT DESTRUCTURING -- */
//Extraction of desired elements of an object into a single variable.

const list = {
    name: 'Shop list',
    items: ['Eggs','Milk','Bread']
}

const {name,items} = list; //Now ve can use name and items as separate consts
//console.log(items);



/* -- ARROW FUNCTIONS -- */

let name1 = 'Filip';

//Normal function
//function sayName(name){
//    alert(name);
//}
//-> Arrow function
const sayName = (name) => alert(name);
sayName(name1);

// -> We can use this keyword in an nested functions. Usually it is lost after another function is defined in a function
//    that is defined in an object. We solved it by assigning this to that... Ugly. But not with arrow functions

const button = document.getElementById('button');
button.addEventListener('click' , function(){ //Doesnt work with arrow function - it has to be declared
    /*
    ...someCode...
    this.classlist.add(...)
    */
   
    const buttonDisappear = () => {
        //We can use this keyword to refrence button object here
        this.classList.add('clicked');
    }
    buttonDisappear();
})

/* -- DEFAULT PARAMETERS -- */

//Old way
/*
function add(a,b){
    var x = a || 1; //Meaning: if a is unassigned assign 1 to it. Useful for avoiding errors
    var y = b || 1;
}*/

//New way
const add = (x = 1,y = 1) => {
    return x + y; 
}

/* -- ARRAY FUNCTIONS -- */

//Foreach

const array = [1,2,3,4,5,6];

array.forEach( (i) => { // i - variable with which we iterate trough the foreach loop
    console.log(i);
})

//console.log(i) -> error... i is not defined

//Map
//Of a given array make modified copy. Modifies every element and returns it as new array!

const newArray = [1,2,3,1,2,3,1,2,3];

const newArray1 = newArray.map( (i) => {
    return i*2;
});
console.log(newArray1);

//Filter
//Exactly what the name says -> Filtering array

const newArray2  = newArray.filter( (i) => {
    return i !== 1; //Removes all the ones from the array
})
console.log(newArray2);

/* -- CONSTRUCTORS & CLASSES -- */

//Old way
/*
function Person(name,age){
    this.name = name;
    this.age = age;

    this.sayName = function(){
        console.log(this.name);
    }
}
*/
//var Filip = new Person('Filip' , 23);
//console.log(Filip);
//Filip.sayName();

//ES6 ->>

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
    }
}

var Filip = new Person('Filip' , 23);
console.log(Filip);
Filip.sayName();
//...Much better...

//Inheritance... Careful with that..

class Employee extends Person{
     constructor(name,age,company){
         super(name,age);
         this.company = company;
     }
}

var employee = new Employee('Filip' , 23, 'SomeCoolCompany');
console.log(employee);
employee.sayName();


/* -- CALLBACKS & PROMISES -- */
//Callback is a function to be executed after another one finished executing simply put
//We used callbacks when we want to wait for certain operation to finish
//Function that is passed as a parameter is called a callback function

console.log('start');

function getData(data , callback){
    console.log('fetching data...');
    setTimeout( () => {
        callback({
            data:data
        });
    },2000);
}

getData(5, function(data) {
    console.log(data);
});

console.log('finish'); //This will execute before getData() cause it is async

//In ES6 we have Promises - Operations that will finish in the future

const promise = new Promise( (resolve,reject) => {
    //Code here is async
    console.log('fetching data again...');
    setTimeout( () => {
        //resolve(123);
        reject(new Error('Sth went wrong...'));
    },2000);
});

promise.then( (data) => { //Here data can be used after it is fetched
    console.log(data);
}).catch( (err) => {
    console.log(err);
})

console.clear();

/* --  SPREAD AND REST OPERATORS -- */

//SPREAD
let arr3 = [1,2,3];
let arr4 = [...arr3,4,5,6]; // With SPREAD operator (...) -> ...arr3 we extract out all elements and copy them in our new array. 
console.log(arr3 , arr4);   // Then we can add new elements.

//If we did it like this:
let arr5 = [arr3,4,5,6]; 
//We would get array inside of an array i.e. nested array
console.log(arr5);

//REST
//REST operator allows us to take undefined number of arguments that we pass to a function, represent them as an array inside a function and use them that way.

const sum = (...arguments) => {
    console.log(arguments)
    /*let sum = 0;
    arguments.forEach( (i,sum) => {
        //console.log(i-1);
        sum = sum + arguments[i-1];
        console.log(sum); // oesnt work cause arrow function makes a local copy of a sum and works with it leaving original sum that is returned untouched 
    })
    return sum;*/
}
//let sum1 = sum(1,2,3);
sum(1,2,3,4);

/* -- .reduce() array method -- */
//.reduce() method executes provided function on every element of an array array and returnin  a single value

let newArr1 = [1,2,3,4];
 let sum1 = newArr1.reduce( (sum = 0 , curr ) => { //Simple sum of an array
     return sum + curr;//Sum value is remembered trough each iteration of the loop and can be returned out.
 } )
console.log(sum1);
const prod = (arr) => {
    return arr.reduce( (sum = 1 , curr) => {
        return sum*curr;
    })
}
console.log(prod(newArr1));

/* -- OBJECT DUPPLICATION, REFERENCING AND PRIMITIVE TYPES -- */

//Lets say we have an object:
let Person1 = {
    name:'Filip'
};

console.log(Person1);

//We can try to copy Person object like this:

let Person2 = Person1;
console.log(Person2);

//But now when we change Person 2 we also change Person 1
//That is because Person1 holds an adress in memory of that object not the object itself

/*
Person2.name = 'Karla';
console.log(Person1); -> This outputs obj with name:'Karla'
*/
//We can maka a copy with a spread operator for eg.

Person2 = {
    ...Person1  //Like this we make legitimate copy of an object
}
Person2.name = 'Karla';

console.log(Person1); // -> This outputs obj with name of 'Filip'

