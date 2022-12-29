//Getters and Settors allow you to define Object Accessor(computed properties)
//get keyword
//this example uses a lang property to get the value of the language property

//create an object
//getter
const person = {
    firstName: 'john',
    lastName: 'Doe',
    language: 'en',
    get lang() {//getter
        return console.log(`${this.language}`)
    }
};

//display data from the object using a getter
// person.lang

//this example uses a lang property to set the value of the language property

const person2 = {
    firstName: 'john',
    lastName: 'Doe',
    language: 'en',
    set lang(lang) {//setter
        this.language = lang;
        //why use a setter instead of a method
        //it secures better data quality
        this.language = lang.toUpperCase();
    },
    get lang() {//getter
        return console.log(`${this.language}`)
    },

    getlang: function() {
        return console.log(`${this.language}`)
    }

};

//set an object property using a setter:
person2.lang = "kw";//using the setter
person2.lang//using the getter to get the language

//javascript function or getter
//here we are getting the same results using a method
person2.getlang()
//why getter and setter
//it gives a simpler syntax
//it allows equal syntax for properties and methods
//it can secure better data quality
//it is esufu for doing things behind-the-scenes

//Object.defineProperty()
//The Object.defineProperty() can be used to add Getters and Setters

const obj = {counter: 0};
//Define setters and getters
Object.defineProperty(obj, "reset", {
    get: function(){this.counter = 0
         console.log(this.counter);}
});
Object.defineProperty(obj, "increment", {
    get: function(){this.counter++;
        console.log(this.counter);}
});
Object.defineProperty(obj, "decrement", {
    get: function(){this.counter--;
        console.log(this.counter);}
});
Object.defineProperty(obj, "add", {
    get: function(){this.counter+=value;
        console.log(this.counter);}
});
Object.defineProperty(obj, "subtract", {
    get: function(){this.counter = 0;
        console.log(this.counter);}
});

obj.add = 5;