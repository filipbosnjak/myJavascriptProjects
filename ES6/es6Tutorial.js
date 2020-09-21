//Variable scoping and variables generally

var counter = 5;

function sayName(){
    var name = "Ed";
    let sth  = 34
    console.log(name);
}
sayName();
console.log(name);//Doesn't do anything because variable 'name' is declared localy
console.log(sth);
const pi = 3.14; //We can't reassign this variable. We would get an error for sth like 'pi = 4;'

let counter = 10;
counter = 15;

//Var vs Let -> Var is available within the scope of the function and let is available within the scope of {} no matter what it was.