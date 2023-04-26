//In JavaScript, we can divide up our code into reusable parts called functions.

function reusableFunction(){
    console.log('Hi World');
  }
  
  reusableFunction();

//Passing Values to Functions with Arguments
/*
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is
defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it
is called are known as arguments.
Here is a function with two parameters, param1 and param2:
*/

function testFun(param1, param2) {
  console.log(param1, param2);
}

/*Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function,
param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments
and the parameters would take on the value of the new arguments.*/


//Return a Value from a Function with Return
//We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

function timesFive(num){
    return num*5;
  }
//timesFive returns the value eqaul to num*5


function randomNum(max){
    var rand = Math.random()* max;
    rand= Math.round(rand);
    return rand;
}

console.log(randomNum(50));

//Arrow Functions to Write Concise Anonymous Functions
/*we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:
*/
const myFunc = () => {
  const myVar = "value";
  return myVar;
}

//Arrow Functions with Parameters
//Just like a regular function, you can pass arguments into an arrow function.

const doubler = (item) => item * 2;
doubler(4);
//doubler(4) would return the value 8.

//If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item * 2;
//It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
///multiplier(4, 2) would return the value 8.


// Rest Parameter with Function Parameters
/*ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number
of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:
*/
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
//The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

//The rest parameter eliminates the need to use the arguments object and allows us to use array methods on the array of parameters passed to the function howMany.


//Spread Operator to Evaluate Arrays In-Place
/*ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:
*/
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
//maximus would have a value of 89.

//We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
//maximus would have a value of 89.

//...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

//const spreaded = ...arr;

//example
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);