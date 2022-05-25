const Person = {
  firstName: "Arghya",
  lastName: "Majumder",
};

const printName = function (state, country) {
  console.log(
    this.firstName + " " + this.lastName + ", " + state + ", " + country
  );
};

Function.prototype.binding = function (obj, ...args) {
  const that = this;
  return function (...args2) {
    that.apply(obj, [...args, ...args2]);
  };
};

const fn = printName.binding(Person, "WB");
fn("India");
