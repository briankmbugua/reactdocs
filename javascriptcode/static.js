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
//mycar.hell() this will raise an error
console.log(Car.hello())
console.log(mycar)
