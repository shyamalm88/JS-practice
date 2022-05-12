var Person = function (name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  this.printPerson = function () {
    console.log(this.name, this.age, this.state);
  };
};

var p1 = new Person("arghya", 34, "ka");
p1.printPerson();
