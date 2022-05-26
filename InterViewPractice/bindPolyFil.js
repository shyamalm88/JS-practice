const Person = {
  firstName: "Arghya",
  lastName: "Majumder",
};

const printName = function (state, country) {
  console.log(
    this.firstName + " " + this.lastName + ", " + state + ", " + country
  );
};

// Function.prototype.binding = function (obj, ...args) {
//   const that = this;
//   return function (...args2) {
//     that.apply(obj, [...args, ...args2]);
//   };
// };

Function.prototype.myBind = function (context, ...args) {
  context._this = this;
  return function (...args2) {
    return context._this(...args, ...args2);
  };
};

const fn = printName.myBind(Person, "WB");
fn("India");
