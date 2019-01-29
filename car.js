function Car (licensePlate, brand, model, color) {
    this.licensePlate = licensePlate;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.toString = function () {
        console.log(`A ${this.brand} ${this.model} with licensePlate ${this.licensePlate} and the color ${this.color}`);
    }
}

module.exports = Car;