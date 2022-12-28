//defining classes
/*
classes are in fact special function thus can have class expression or class
declaration just like functions 
The body of a class is executed in strict mode even without the 'use strict' directive

A class can be characterized by three aspects;
. kind -> Getter, setter, method, or field
. location -> Static or instance
. visibility -> Public or private
*/

//Declaration

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

//Expression the class is anonymus but assinged to a variable
const Rectangle1 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

//Expression: the class has it's own name

const Rectangle2 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

//before es6
//this is a constructor function
function Person(name, age) {
    this.name = name
    this.age = age
}

const brian = new Person("brian", 26)

console.log(brian.age);
console.log(brian.name);

//to add a new function to the person constructor we have to use the prototype property
Person.prototype.showName = function() {
    console.log(`the name is ${this.name}`);
}

brian.showName()
console.log('extends')

//we can do the above with class keyword

class PersonTwo{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    showName() {
        console.log(`name is ${this.name}`)
    }
}

class PersonThree extends PersonTwo{
    constructor(name, age, work){
        super(name,age)
        this.work = work
    }
    showWork() {
        return console.log(`${this.showName()} and i do this ${this.work}`)
    }
}

brianM = new PersonThree("brian", 26, "coder")

brianM.showWork()


// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }

//   mycar = new Model("Ford", "Mustang");

//   console.log(mycar.show())