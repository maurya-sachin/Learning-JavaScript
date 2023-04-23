// Escaping Literal Quotes in Strings
/*When you are defining a string you must start and end with a single or double quote.
What happens when you need a literal quote: " or ' inside of your string?
In JavaScript, you can escape a quote from considering it as an end of string quote by placing 
a backslash (\) in front of the quote.*/
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// if you were to print this to the console, you would get:
//  I am a "double quoted" string inside "double quotes".

//Quoting Strings with Single Quotes
//Unlike some other programming languages, single and double quotes work the same in JavaScript.
const doubleQuoteStr = "This is a string";
const singleQuoteStr = 'This is also a string';

/*However, this becomes a problem if you need to use the outermost quotes within it.
Remember, a string has the same kind of quote at the beginning and end. But if you have
that same quote somewhere in the middle, the string will stop early and throw an error.*/
const ourStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape Sequences in Strings
/*Quotes are not the only characters that can be escaped inside a string. Escape sequences allow you to use 
characters you may not otherwise be able to use in a string.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f  form feed
*/
const theStr = "FirstLine\n\\SecondLine\nThirdLine"

//Concatenating Strings with Plus Operator
/*In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. 
You can build a new string out of other strings by concatenating them together.
Example
'My name is Alan,' + ' I concatenate.'*/

const exampleStr = "This is the start." + " This is the end.";

//Concatenating Strings with the Plus Equals Operator
/*
let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';
*/

//Constructing Strings with Variables
const myName = "Sachin Maurya";
const exeStr = "My name is " + myName + ' and I am well!';

//Appending Variables to Strings
//Just as we can build a string over multiple lines out of string literals, we can also append variables to a string 
//using the plus equals (+=) operator.
const someAdjective = "passion!";
let onestr = "Learning to code is ";
onestr += someAdjective;

//Find the Length of a String
let lastNameLength = 0;
const lastName = "Souravmaurya";
lastNameLength = lastName.length;

//Use Bracket Notation to Find the First Character in a String
//Bracket notation is a way to get a character at a specific index within a string.
let firstLetterOfLastName = "";
const otherName = "Sauravmaurya";
firstLetterOfLastName = otherName[0];

//Understand String Immutability

/*In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code will produce an error because the letter B in the string Bob cannot 
be changed to the letter J:

let myStr = "Bob";
myStr[0] = "J";
Note that this does not mean that myStr could not be re-assigned. The only way to change myStr would 
be to assign it with a new value, like this:
*/
let twoStr = "Bob";
twoStr = "Job";

//Use Bracket Notation to Find the Nth Character in a String
/*You can also use bracket notation to get the character at other positions within a string.
--Remember that computers start counting at 0, so the first character is actually the zeroth character.
*/
//const lastName = "Lovelace";
//const thirdLetterOfLastName = lastName[2];

//Use Bracket Notation to Find the Last Character in a String
/*In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", you can get the value of the last letter of the string 
by using firstName[firstName.length - 1].
*/
//const lastName = "Lovelace";
//const lastLetterOfLastName = lastName[lastName.length-1];

//Use Bracket Notation to Find the Nth-to-Last Character in a String
/*You can use the same principle we just used to retrieve the last character in a string to retrieve 
the Nth-to-last character.
For example, you can get the value of the third-to-last letter of the const firstName = "Augusta" 
string by using firstName[firstName.length - 3]
*/
//const lastName = "Lovelace";
//const secondToLastLetterOfLastName = lastName[lastName.length-2];