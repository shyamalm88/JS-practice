const Person = (function () {
  let name = "Arghya";
  function sayName() {
    console.log(name);
  }
  return {
    sayName: sayName,
  };
})();

Person.name = "Arindam";

Person.sayName();
