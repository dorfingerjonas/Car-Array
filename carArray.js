const Car = require('./car');

function CarArray () {
    this.cars = [];
    this.push = function (...items) {
        for (const item of items) {
            if (item instanceof Car) {
                this.cars[this.cars.length] = item;
            }
        }
    };
    this.getCar = function (licensePlate) {
        for (const car of cars) {
            if (car.licensePlate === this.licensePlate) {
                console.log(licensePlate);
            }
        }
    };
}

module.exports = CarArray;