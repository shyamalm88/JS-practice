let Person = function (origin) {
  this.origin = origin;
};

Person.prototype.greet = function () {
  this.origin === "english"
    ? console.log("Hello! My name is " + this.name)
    : console.log("Ola! My name is " + this.name);
};

let Student = function (name, origin) {
  Person.call(this, origin);
  this.name = name;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = this;

let s1 = new Student("Arghya", "spanish");
s1.greet();
