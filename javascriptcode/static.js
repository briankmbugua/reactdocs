class Car {
    constructor(brand){
        this.carname = brand;
    }
    static hello() { // static method
        return 'hello';
    }
}

mycar = new Car('ford');
//hello can be called on the class car and not on
//the new object created from the car class
//mycar.hello() this will raise an error
console.log(Car.hello())
console.log(mycar)//Car {carname: 'ford'} the static method hello() is not present in the obj
                  //created from the Car class
/*
usually static methods are used to implement functions that belong to the class as a whole
but not to any particular object of it. 
*/
