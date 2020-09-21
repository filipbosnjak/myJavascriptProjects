//Variable scoping and variables generally

var counter = 5;

function sayName(){
    var name = "Ed";
    let sth  = 34
    console.log(name);
}

sayName();

console.log(name);//Doesn't do anything because variable 'name' is declared locally
//console.log(sth);

const pi = 3.14; //We can't reassign this variable. We would get an error for sth like 'pi = 4;'

let counter1 = 10;
counter1 = 15;//This is perfectly legal

//Var vs Let -> Var is available within the scope of the function and let is available within the scope of {} no matter what it was.
//In for loop for(...){} we have curly brackets and its better to use let than var cause let wont get out of the scope of for loop and mess 
//our code

//String concat... Using backticks `` alt+7 So: `...${variableName}...`

const message = "Hello World!";

alert(`Message: ${message}`);