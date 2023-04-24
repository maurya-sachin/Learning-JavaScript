//Understanding Boolean Values
/*Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where
true is on and false is off. These two states are mutually exclusive.
Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
*/



//Comparison with the Equality Operator
/*There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or
false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a
variable on the left.*/
function equalityTest(myVal) {
    if (myVal == 10) {
      return "Equal";
    }
    return "Not Equal";
  }


//Comparison with the Strict Equality Operator
/*Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert
both values being compared to a common type, the strict equality operator does not perform a type conversion.
If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
Examples
*/
3 ===  3  // true
3 === '3' // false
//In the second example, 3 is a Number type and '3' is a String type.