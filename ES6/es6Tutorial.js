//Variable scoping and variables generally

var counter = 5;

function sayName(){
    var name = "Ed";
    let sth  = 34
    console.log(name);
}

sayName();

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

const list = {
    name: 'Shop list',
    items: ['Eggs','Milk','Bread']
}

const {name,items} = list; //Now ve can use name and items as separate consts
//console.log(items);