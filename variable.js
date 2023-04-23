var myName;

//Assignment operator(=)
/*In JavaScript, you can store a value in a variable with the assignment operator (=).*/

var a;
a = 7;

//Assigning the Value of One Variable to Another

var a;
a = 7;
var b;
b = a;

//Initializing Variables with the Assignment Operator
var a = 9;

//Declare String Variables
var myFirstName = "Sachin", myLastName = "Maurya";

//Understanding Uninitialized Variables
/*When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined.*/

var a = 5, b = 10, c = 'I am a';

a = a + 1;
b = b + 5;
c = c + " String!";

/*Understanding Case Sensitivity in Variables
MYVAR is not the same as MyVar nor myvar
Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.*/
// Variable declarations

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Explore Differences Between the var and let Keywords
/*One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations
So unlike var, when you use let, a variable with the same name can only be declared once*/

//Declare a Read-Only Variable with the const Keyword
/*
const FAV_PET = "Cats";
FAV_PET = "Dogs";
The console will display an error due to reassigning the value of FAV_PET.*/
const SM= "Sachin Maurya";
let fact = "is studying!";
fact = "is learning!";
console.log(SM, fact);
