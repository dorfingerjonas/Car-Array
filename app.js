const Car = require('./car');
const CarArray = require('./carArray');

const c1 = new Car("L-1234", "BMW", "i5", "lightblue");
const c2 = new Car("P: HJSD15W", "Audi", "A3", "grey");

const cars = new CarArray();

cars.push('a', 'b', c1, 'x');

console.log(c2.toString());