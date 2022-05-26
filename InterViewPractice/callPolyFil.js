const Person = {
  firstName: "Arghya",
  lastName: "Majumder",
};

const printName = function (state, country) {
  console.log(
    this.firstName + " " + this.lastName + ", " + state + ", " + country
  );
};

Function.prototype.myCall = function (context, ...args) {
  context._this = this;
  return context._this(...args);
};

const fn = printName.myCall(Person, "WB", "India");
