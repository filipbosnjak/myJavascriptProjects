//Coercion - conversion between different two build-in types

let a = 23;
let b = String(a);
console.log(b);
let c = "asd" + "asd";
console.log(c);
c = "asd" + 24 + 1 + 2; //After string turns everything in a string
console.log(c);
c = 24 + 1 + 2 + "asd"; //Does the computation first then string concat
console.log(c);

let array = [1, 2, 3, 4];
// reduce();
//It takes in costum defined function and executes it on each element of
//an array. reducer function's returned value is assigned to the
//accumulator, whose value is remembered across each iteration
//throughout the array, and ultimately becomes the final, single resulting value.

const reducer = (sum = 0, curr) => {
  return sum + curr;
};

let sumOfArray = array.reduce((sum, curr) => {
  /*reducer -> like this we pass a reference to an already definde function*/
  return sum + curr;
});
console.log(sumOfArray);

console.clear();
//.entries();
//The entries() method returns a new Array Iterator object that contains the key/value pairs for
//each index in the array.

const iterator = array.entries() //Returns IterableIterator<[number, number]>
 
for(e i)