var messenger = {

    greeting: "Hello",
    name:"everyone",

    sayHello: function() {
        console.log(this.greeting + "," + this.name + "!")
    }
};

messenger.sayHello();

//object freeze 
/*const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function
Object.freeze to prevent data mutation.

Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.
*/
let obj = {
  name:"Sachin",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 

//The obj.review and obj.newProp assignments will result in errors, because our editor runs in strict mode by default, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.


//Use Destructuring Assignment to Extract Values from Objects
/*Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:
*/
const user = { name: 'John Doe', age: 34 };
/*
const name = user.name;
const age = user.age;
/*name would have a value of the string John Doe, and age would have the number 34.

Here's an equivalent assignment statement using the ES6 destructuring syntax:
*/
const { name, age } = user;
/*Again, name would have a value of the string John Doe, and age would have the number 34.

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.

example:
*/
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today,tomorrow}= HIGH_TEMPERATURES;
