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

