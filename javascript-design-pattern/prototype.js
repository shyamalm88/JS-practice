var Person = function () {};
Person.prototype.name = null;
Person.prototype.age = null;
Person.prototype.state = null;

Person.prototype.printPerson = function () {
  console.log(this.name, this.age, this.state);
};

var p1 = new Person();
p1.name = "Arghya";
p1.printPerson();
