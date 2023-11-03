const Car = function (name) {
  this.name = name;
};
Car.prototype.drive = function () {
  console.log(this.name + " is driving");
};
const FourWheeler = function (name) {
  Car.call(this, name);
};
FourWheeler.prototype = new Car();
FourWheeler.prototype.constructor = Car;
const bmw = new FourWheeler("BMW");
bmw.drive();
