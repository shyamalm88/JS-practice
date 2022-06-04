const Person = {
  firstName: "Arghya",
  lastName: "Majumder",
};

const printName = function (state, country) {
  console.log(
    this.firstName + " " + this.lastName + ", " + state + ", " + country
  );
};

Function.prototype.myApply = function (context, args) {
  context._this = this;
  return context._this(...args);
};

const fn = printName.myApply(Person, ["WB", "India"]);
