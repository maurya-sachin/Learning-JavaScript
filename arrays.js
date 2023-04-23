// var item0 = "pen"
//     item1 = "pencil"
//     item3 = "notebook";

/*var items = [];
items[0]="Pen";
items[1]="Pencil";
items[2]= "Notebook";*/

var items = ["Pen", "Pencil", "Notebook", "Eraser", "Ruler"];

/*function listItems(){
    console.log(item0);
    console.log(item1);
    console.log(item2);
}*/

/*function listItems(){
    console.log(items[0]);
    console.log(items[1]);
    console.log(items[2]);
}*/

function listItems(){
    for(var i= 0;i<items.length;i++){
        console.log(items[i]);
    }
}
listItems();

//Manipulate Arrays With push Method
/*An easy way to append data to the end of an array is via the push() function.
.push() takes one or more parameters and "pushes" them onto the end of the array.
Examples:
*/
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
//arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].


//Manipulate Arrays With pop Method
/*
Another way to change the data in an array is with the .pop() function.
.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning 
it to a variable. In other words, .pop() removes the last element from an array and returns that element.
Any type of entry can be popped off of an array - numbers, strings, even nested arrays.
*/
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
//The first console.log will display the value 6, and the second will display the value [1, 4]


//Manipulate Arrays With shift Method
/*
pop() always removes the last element of an array. What if you want to remove the first?
That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Example:
*/
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
// removedFromOurArray would have a value of the string Stimpson, and ourArray would  have ["J", ["cat"]].

//Manipulate Arrays With unshift Method
/*
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning 
of an array i.e. add elements in front of the array.
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds
the element at the beginning of the array.

Example:
*/

//const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
//After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value 
//["Happy", "J", "cat"].


