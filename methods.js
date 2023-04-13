var messenger = {

    greeting: "Hello",
    name:"everyone",

    sayHello: function() {
        console.log(this.greeting + "," + this.name + "!")
    }
};

messenger.sayHello();