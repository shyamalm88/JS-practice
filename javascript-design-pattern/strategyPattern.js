function Fedex() {
  this.calculate = function (package) {
    return package.length * 100;
  };
}

function Ups() {
  this.calculate = function (package) {
    return package.length * 150;
  };
}

function Usps() {
  this.calculate = function (package) {
    return package.length * 250;
  };
}

function Shipping() {
  this.company = null;
  this.setStrategy = function (company) {
    return (this.company = company);
  };
  this.calculate = function (package) {
    return this.company.calculate(package);
  };
}

const fedex = new Fedex();
const ups = new Ups();
const usps = new Usps();
const package = [{ name: "item1" }, { name: "item2" }];

const ship = new Shipping();
ship.setStrategy(fedex);
console.log("package value Fedex " + ship.calculate(package));
ship.setStrategy(ups);
console.log("package value UPS " + ship.calculate(package));
