class Car {
    constructor () {
        this.name = "Car"
        this.wheels = 4
    }
    turnOn(){
        console.log("Chacabúm!!")
    }
}

class Truck {
    constructor () {
        this.name = "Truck"
        this.wheels = 8
    }
    turnOn(){
        console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!")
    }
}

class Motorcycle {
    constructor () {
        this.name = "Motorcycle"
        this.wheels = 2
    }
    turnOn(){
        console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!")
    }
}

const vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case "car":
                return new Car()
            case "truck":
                return new Truck()
            case "motorcycle":
                return new Motorcycle()
            default:
                return null
        }
    }
}

const car = vehicleFactory.createVehicle("car")
car.turnOn();
const truck = vehicleFactory.createVehicle("truck")
truck.turnOn();
const motorcycle = vehicleFactory.createVehicle("motorcycle")
motorcycle.turnOn();