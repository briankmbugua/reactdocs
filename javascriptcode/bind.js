//bind is a method on the prototype of all functions in javascript
//it allows you to create a new function from an existing function,
//change the new function this context, and provide any arguments you want
//the new function to be calle with

//USING bind to Change this in a function
//The first argument provide to bind is the this context the function will be bound
//to, if you don't want to change the value of this pass null as the first argument.

// let nodevember = {
//     numOfAttendees: 0,
//     incrementNumOfAttendees: function() {
//         this.numOfAttendees++;
//         console.log(this.numOfAttendees)
//     }
// }
// nodevember.incrementNumOfAttendees.bind(nodevember);

// console.log(nodevember.numOfAttendees);

//with bind() method an object can borrow a method from another object.

const person = {
    firstName: 'john',
    lastName: 'doe',
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
//the member object borrows the fullname method from the person object
const member = {
    firstName: 'hege',
    lastName: 'Nilsen'
}
let fullName = person.fullName.bind(member);
document.getElementById('demo').innerHTML = fullName();

//preserving this
//sometimes the bind() method has to be used to prevent loosing this.

const person1 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo2");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }

  person1.display()

  //when a function is used as a callback, this is lost.
  //e.g will try to display the person name after 3 seconds, 
  //but it will display undefined instead
  const person2 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo3");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }

  setTimeout(person2.display, 3000); //undefined undefined

//the bind() method solves this problem
