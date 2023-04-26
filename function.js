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

  