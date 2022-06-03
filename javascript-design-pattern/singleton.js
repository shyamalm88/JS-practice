let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw Error("can not initiate new instance");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singleInstance = Object.freeze(new Counter());
console.log(singleInstance.getInstance() === singleInstance.getInstance());

//pure js
var Singleton = (function () {
  var instance;

  return {
    getInstance: function () {
      if (!instance) {
        instance = new Object("I am the instance");
      }
      return instance;
    },
  };
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log("Same instance? " + (instance1 === instance2));
